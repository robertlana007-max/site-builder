// GetToolNest desktop app: a native window that shows the app shell, https://gettoolnest.xyz/appshell/.
// Everything (the shell, the tools, Live Charts) loads from the website, so site updates reach the app at once.
// The shell gets the installed version (?app=win&v=...) to offer an update when a newer installer is out.
// The site's own service worker gives offline support after the first visit.
// When the site cannot load at all, a bundled offline page (dist/offline.html) is shown.
// Since 1.2: closing the window hides it to the notification-area tray, only one copy runs at a time, and
// the app updates itself with no clicks (see "native updater" below). It installs per user.
// The start URL says so with &nu=1, and the shell then hides its own update bar.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod update_logic;

use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Mutex;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

use tauri::menu::{Menu, MenuItem, PredefinedMenuItem};
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
use tauri::webview::{NewWindowResponse, WebviewWindowBuilder};
use tauri::{AppHandle, Manager, Url, WebviewUrl, WindowEvent};
use tauri_plugin_notification::NotificationExt;
use update_logic::{file_hash_matches, is_newer, normalize_sha256, to_hex};

const VERSION: &str = env!("CARGO_PKG_VERSION");
const HOME: &str = concat!("https://gettoolnest.xyz/appshell/?app=win&v=", env!("CARGO_PKG_VERSION"), "&nu=1");
const VERSION_URL: &str = "https://gettoolnest.xyz/appshell/version.json";
const TRAY_ID: &str = "main-tray";

/// Pages of the site itself stay inside the app window.
fn is_site(url: &Url) -> bool {
    matches!(url.scheme(), "https" | "http")
        && matches!(url.host_str(), Some("gettoolnest.xyz") | Some("www.gettoolnest.xyz"))
}

/// The bundled offline page and other in-app pages (tauri://localhost or http://tauri.localhost).
fn is_local(url: &Url) -> bool {
    match url.scheme() {
        "tauri" => true,
        "http" | "https" => url.host_str() == Some("tauri.localhost"),
        _ => false,
    }
}

/// Firebase sign-in opens a popup (Google account page) that must talk back to the site.
fn is_sign_in_popup(url: &Url) -> bool {
    match url.host_str() {
        Some(h) => {
            h.ends_with(".firebaseapp.com")
                || h == "accounts.google.com"
                || h.ends_with(".googleusercontent.com")
        }
        None => false,
    }
}

fn open_in_browser(url: &Url) {
    if matches!(url.scheme(), "http" | "https" | "mailto" | "tel" | "sms") {
        let _ = tauri_plugin_opener::open_url(url.as_str(), None::<&str>);
    }
}

#[cfg(windows)]
fn offline_url(failed: &str) -> Url {
    let mut u = Url::parse("http://tauri.localhost/offline.html").unwrap();
    u.query_pairs_mut().append_pair("u", failed);
    u
}

/// WebView2 specific setup: downloads go to the user's Downloads folder (with Edge's normal
/// download bubble), and a failed load of the site shows the bundled offline page.
#[cfg(windows)]
fn setup_webview2(window: &tauri::WebviewWindow, downloads: Option<std::path::PathBuf>) {
    use webview2_com::Microsoft::Web::WebView2::Win32::*;
    use webview2_com::NavigationCompletedEventHandler;
    use windows_core::{Interface, BOOL, HSTRING, PCWSTR, PWSTR};

    let win = window.clone();
    let _ = window.with_webview(move |pv| unsafe {
        let Ok(core) = pv.controller().CoreWebView2() else { return };

        if let Some(dir) = downloads {
            if let Ok(wv13) = core.cast::<ICoreWebView2_13>() {
                if let Ok(profile) = wv13.Profile() {
                    let h = HSTRING::from(dir.as_os_str());
                    let _ = profile.SetDefaultDownloadFolderPath(PCWSTR(h.as_ptr()));
                }
            }
        }

        let handler = NavigationCompletedEventHandler::create(Box::new(move |sender, args| {
            let (Some(sender), Some(args)) = (sender, args) else { return Ok(()) };
            let mut ok = BOOL::default();
            args.IsSuccess(&mut ok)?;
            if ok.as_bool() {
                return Ok(());
            }
            let mut status = COREWEBVIEW2_WEB_ERROR_STATUS::default();
            args.WebErrorStatus(&mut status)?;
            let offline = [
                COREWEBVIEW2_WEB_ERROR_STATUS_CANNOT_CONNECT,
                COREWEBVIEW2_WEB_ERROR_STATUS_CONNECTION_RESET,
                COREWEBVIEW2_WEB_ERROR_STATUS_DISCONNECTED,
                COREWEBVIEW2_WEB_ERROR_STATUS_HOST_NAME_NOT_RESOLVED,
                COREWEBVIEW2_WEB_ERROR_STATUS_SERVER_UNREACHABLE,
                COREWEBVIEW2_WEB_ERROR_STATUS_TIMEOUT,
            ];
            if !offline.contains(&status) {
                return Ok(());
            }
            let mut src = PWSTR::null();
            sender.Source(&mut src)?;
            let src = webview2_com::take_pwstr(src);
            let failed = match Url::parse(&src) {
                Ok(u) if is_site(&u) => u.to_string(),
                _ => HOME.to_string(),
            };
            let _ = win.navigate(offline_url(&failed));
            Ok(())
        }));
        let mut token = 0i64;
        let _ = core.add_NavigationCompleted(&handler, &mut token);
    });
}


// ---------- window and tray ----------

/// Shows, restores and focuses the main window (tray click, second launch, "Open GetToolNest").
fn show_main(app: &AppHandle) {
    if let Some(w) = app.get_webview_window("main") {
        if w.is_minimized().unwrap_or(false) {
            let _ = w.unminimize();
        }
        let _ = w.show();
        let _ = w.set_focus();
    }
}

static TRAY_NOTICE_SHOWN: AtomicBool = AtomicBool::new(false);

/// The first time ever the window hides to the tray, a Windows notification says the app still runs.
fn first_hide_notice(app: &AppHandle) {
    if TRAY_NOTICE_SHOWN.swap(true, Ordering::SeqCst) {
        return;
    }
    let marker = app.path().app_config_dir().ok().map(|d| d.join("tray-notice-shown"));
    if let Some(m) = &marker {
        if m.exists() {
            return;
        }
    }
    let _ = app
        .notification()
        .builder()
        .title("GetToolNest")
        .body("GetToolNest is still running. Open it from the tray icon.")
        .show();
    if let Some(m) = marker {
        if let Some(dir) = m.parent() {
            let _ = std::fs::create_dir_all(dir);
        }
        let _ = std::fs::write(m, b"1");
    }
}

/// "Quit" in the tray menu: installs a downloaded update first (silently, without restarting), then exits.
fn quit(app: &AppHandle) {
    if let Some(w) = app.get_webview_window("main") {
        let _ = w.hide();
    }
    if !install_update(app, false) {
        app.exit(0);
    }
}

fn build_tray(app: &AppHandle) -> tauri::Result<()> {
    let open = MenuItem::with_id(app, "open", "Open GetToolNest", true, None::<&str>)?;
    let sep = PredefinedMenuItem::separator(app)?;
    let quit_item = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
    let menu = Menu::with_items(app, &[&open, &sep, &quit_item])?;
    let mut tray = TrayIconBuilder::with_id(TRAY_ID)
        .tooltip("GetToolNest")
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(|app, event| match event.id().as_ref() {
            "open" => show_main(app),
            "quit" => quit(app),
            _ => {}
        })
        .on_tray_icon_event(|tray, event| match event {
            TrayIconEvent::Click { button: MouseButton::Left, button_state: MouseButtonState::Up, .. }
            | TrayIconEvent::DoubleClick { button: MouseButton::Left, .. } => show_main(tray.app_handle()),
            _ => {}
        });
    if let Some(icon) = app.default_window_icon() {
        tray = tray.icon(icon.clone());
    }
    tray.build(app)?;
    Ok(())
}

// ---------- native updater ----------
// Fully automatic, no clicks: the app is installed per user (%LOCALAPPDATA%\GetToolNest), so the installer
// needs no admin rights. A new Setup.exe is downloaded in the background, its SHA-256 checked against
// version.json, and it is installed silently at a quiet moment: when the window is hidden in the tray, after
// 5 minutes without keyboard or mouse input, or at the next start before the window shows. The installer then
// starts the app again (/R), with the window shown again if it was visible, and a notification says so.

const IDLE_SECS: u32 = 5 * 60;
const CHECK_EVERY: Duration = Duration::from_secs(6 * 3600);
const MAX_ATTEMPTS: u64 = 3;
/// Argument the installer passes to the restarted app (/ARGS): window visible or kept in the tray.
const ARG_UPDATED: &str = "--updated";
const ARG_UPDATED_TRAY: &str = "--updated-tray";

#[derive(Clone)]
struct Pending {
    version: String,
    sha256: String,
    path: PathBuf,
    attempts: u64,
}

#[derive(Default)]
struct Updater {
    pending: Mutex<Option<Pending>>,
    installing: AtomicBool,
}

fn http() -> ureq::Agent {
    ureq::Agent::config_builder()
        .timeout_global(Some(Duration::from_secs(30 * 60)))
        .timeout_connect(Some(Duration::from_secs(30)))
        .user_agent(concat!("GetToolNest-Windows/", env!("CARGO_PKG_VERSION")))
        .build()
        .into()
}

fn update_dir() -> PathBuf {
    std::env::temp_dir().join("GetToolNest-update")
}

fn pending_file() -> PathBuf {
    update_dir().join("pending.json")
}

fn save_pending(p: &Pending) {
    let j = serde_json::json!({ "version": p.version, "sha256": p.sha256, "path": p.path, "attempts": p.attempts });
    let _ = std::fs::write(pending_file(), j.to_string());
}

/// A downloaded update left from an earlier run (the app was quit or Windows shut down before it installed).
fn load_pending() -> Option<Pending> {
    let j: serde_json::Value = serde_json::from_str(&std::fs::read_to_string(pending_file()).ok()?).ok()?;
    Some(Pending {
        version: j["version"].as_str()?.to_string(),
        sha256: normalize_sha256(j["sha256"].as_str()?)?,
        path: PathBuf::from(j["path"].as_str()?),
        attempts: j["attempts"].as_u64().unwrap_or(0),
    })
}

fn clear_pending() {
    let _ = std::fs::remove_dir_all(update_dir());
}

/// Seconds since the last keyboard or mouse input anywhere in the Windows session.
#[cfg(windows)]
fn idle_secs() -> u32 {
    use windows::Win32::System::SystemInformation::GetTickCount;
    use windows::Win32::UI::Input::KeyboardAndMouse::{GetLastInputInfo, LASTINPUTINFO};
    unsafe {
        let mut li = LASTINPUTINFO { cbSize: std::mem::size_of::<LASTINPUTINFO>() as u32, dwTime: 0 };
        if GetLastInputInfo(&mut li).as_bool() {
            GetTickCount().wrapping_sub(li.dwTime) / 1000
        } else {
            0
        }
    }
}

#[cfg(not(windows))]
fn idle_secs() -> u32 {
    0
}

fn main_visible(app: &AppHandle) -> bool {
    app.get_webview_window("main").map(|w| w.is_visible().unwrap_or(false)).unwrap_or(false)
}

/// About 10 s after start, then every 6 hours (by the wall clock, so sleep or hibernation does not delay it).
/// Every 30 s it looks for a quiet moment to install a downloaded update.
fn start_updater(app: AppHandle) {
    std::thread::spawn(move || {
        std::thread::sleep(Duration::from_secs(10));
        let mut last_check: Option<SystemTime> = None;
        loop {
            let due = last_check.map(|t| t.elapsed().map(|d| d >= CHECK_EVERY).unwrap_or(true)).unwrap_or(true);
            if due {
                last_check = Some(SystemTime::now());
                if let Err(e) = check_for_update(&app) {
                    eprintln!("update check failed: {e}");
                }
            }
            let has_update = app.state::<Updater>().pending.lock().unwrap().is_some();
            if has_update && (!main_visible(&app) || idle_secs() >= IDLE_SECS) {
                install_update(&app, true);
            }
            std::thread::sleep(Duration::from_secs(30));
        }
    });
}

fn check_for_update(app: &AppHandle) -> Result<(), String> {
    let agent = http();
    let now = SystemTime::now().duration_since(UNIX_EPOCH).map(|d| d.as_secs()).unwrap_or(0);
    let text = agent
        .get(&format!("{VERSION_URL}?t={now}"))
        .call()
        .map_err(|e| e.to_string())?
        .body_mut()
        .read_to_string()
        .map_err(|e| e.to_string())?;
    let j: serde_json::Value = serde_json::from_str(&text).map_err(|e| e.to_string())?;
    let latest = j["windows"].as_str().unwrap_or("").trim().to_string();
    if !is_newer(&latest, VERSION) {
        return Ok(());
    }
    let url = Url::parse(j["windowsSetup"].as_str().unwrap_or("")).map_err(|e| e.to_string())?;
    if url.scheme() != "https" {
        return Err("setup URL is not https".into());
    }
    let sha = normalize_sha256(j["windowsSha256"].as_str().unwrap_or("")).ok_or("no valid windowsSha256")?;

    let state = app.state::<Updater>();
    if let Some(p) = state.pending.lock().unwrap().clone() {
        if p.version == latest && p.sha256 == sha && file_hash_matches(&p.path, &sha) {
            return Ok(()); // already downloaded
        }
    }

    let safe_ver: String = latest.chars().filter(|c| c.is_ascii_alphanumeric() || *c == '.').collect();
    let dir = update_dir();
    let _ = std::fs::remove_dir_all(&dir);
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    let part = dir.join(format!("GetToolNest-{safe_ver}-setup.exe.part"));
    let path = dir.join(format!("GetToolNest-{safe_ver}-setup.exe"));
    download(&agent, url.as_str(), &part, &sha)?;
    std::fs::rename(&part, &path).map_err(|e| e.to_string())?;
    if !file_hash_matches(&path, &sha) {
        let _ = std::fs::remove_file(&path);
        return Err("downloaded file does not match windowsSha256".into());
    }
    let p = Pending { version: latest, sha256: sha, path, attempts: 0 };
    save_pending(&p);
    *state.pending.lock().unwrap() = Some(p);
    Ok(())
}

/// Streams the download to `part` while hashing it; removes the file unless the SHA-256 matches.
fn download(agent: &ureq::Agent, url: &str, part: &Path, sha: &str) -> Result<(), String> {
    use sha2::{Digest, Sha256};
    use std::io::{Read, Write};
    let mut resp = agent.get(url).call().map_err(|e| e.to_string())?;
    let mut reader = resp.body_mut().with_config().limit(500 * 1024 * 1024).reader();
    let result = (|| -> Result<String, String> {
        let mut file = std::fs::File::create(part).map_err(|e| e.to_string())?;
        let mut h = Sha256::new();
        let mut buf = vec![0u8; 64 * 1024];
        loop {
            let n = reader.read(&mut buf).map_err(|e| e.to_string())?;
            if n == 0 {
                break;
            }
            h.update(&buf[..n]);
            file.write_all(&buf[..n]).map_err(|e| e.to_string())?;
        }
        file.sync_all().map_err(|e| e.to_string())?;
        Ok(to_hex(&h.finalize()))
    })();
    match result {
        Ok(actual) if update_logic::hash_matches(&actual, sha) => Ok(()),
        Ok(actual) => {
            let _ = std::fs::remove_file(part);
            Err(format!("SHA-256 mismatch: got {actual}, expected {sha}"))
        }
        Err(e) => {
            let _ = std::fs::remove_file(part);
            Err(e)
        }
    }
}

/// Starts the verified installer silently: /S silent, /UPDATE keeps the user's shortcuts and skips WebView2,
/// and with `relaunch`, /R starts the app again when done, passing /ARGS to it.
/// The hash is checked again right before: a file that does not match is never run.
fn spawn_installer(p: &Pending, relaunch: Option<&str>) -> bool {
    if !file_hash_matches(&p.path, &p.sha256) {
        clear_pending();
        return false;
    }
    let mut cmd = std::process::Command::new(&p.path);
    cmd.args(["/S", "/UPDATE"]);
    if let Some(arg) = relaunch {
        cmd.args(["/R", "/ARGS", arg]);
    }
    #[cfg(windows)]
    {
        use std::os::windows::process::CommandExt;
        cmd.creation_flags(0x0000_0008); // DETACHED_PROCESS: it outlives this app
    }
    cmd.spawn().is_ok()
}

/// Installs the downloaded update and exits so the files can be replaced (the installer would close the app anyway).
fn install_update(app: &AppHandle, relaunch: bool) -> bool {
    let state = app.state::<Updater>();
    if state.installing.swap(true, Ordering::SeqCst) {
        return false;
    }
    let Some(mut p) = state.pending.lock().unwrap().clone() else {
        state.installing.store(false, Ordering::SeqCst);
        return false;
    };
    p.attempts += 1;
    save_pending(&p);
    let arg = if main_visible(app) { ARG_UPDATED } else { ARG_UPDATED_TRAY };
    if spawn_installer(&p, relaunch.then_some(arg)) {
        app.exit(0);
        true
    } else {
        *state.pending.lock().unwrap() = None;
        state.installing.store(false, Ordering::SeqCst);
        false
    }
}

/// At start, before the window shows: a downloaded update from an earlier run is installed now.
/// Returns true when the installer started and this process must end.
fn install_pending_at_start() -> bool {
    let Some(mut p) = load_pending() else { return false };
    if !is_newer(&p.version, VERSION) || p.attempts >= MAX_ATTEMPTS {
        clear_pending(); // installed already, or it keeps failing: download again later
        return false;
    }
    p.attempts += 1;
    save_pending(&p);
    spawn_installer(&p, Some(ARG_UPDATED))
}

fn main() {
    tauri::Builder::default()
        // must be the first plugin: a second launch only shows and focuses the running app
        .plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| show_main(app)))
        .plugin(tauri_plugin_opener::init())
        .plugin(
            tauri_plugin_window_state::Builder::default()
                // the window may be hidden in the tray when the state is saved: never restore it hidden
                .with_state_flags(tauri_plugin_window_state::StateFlags::all() & !tauri_plugin_window_state::StateFlags::VISIBLE)
                .build(),
        )
        .plugin(tauri_plugin_notification::init())
        .manage(Updater::default())
        // the X button hides the window to the tray; "Quit" in the tray menu ends the app
        .on_window_event(|window, event| {
            if let WindowEvent::CloseRequested { api, .. } = event {
                if window.label() == "main" {
                    api.prevent_close();
                    let _ = window.hide();
                    first_hide_notice(window.app_handle());
                }
            }
        })
        .setup(|app| {
            if install_pending_at_start() {
                std::process::exit(0);
            }
            let args: Vec<String> = std::env::args().collect();
            let updated = args.iter().any(|a| a == ARG_UPDATED || a == ARG_UPDATED_TRAY);
            let start_in_tray = args.iter().any(|a| a == ARG_UPDATED_TRAY);
            if updated {
                clear_pending();
                let _ = app
                    .notification()
                    .builder()
                    .title("GetToolNest")
                    .body(format!("GetToolNest updated to {VERSION}"))
                    .show();
            }
            let handle = app.handle().clone();
            let window = WebviewWindowBuilder::new(
                app,
                "main",
                WebviewUrl::External(Url::parse(HOME).unwrap()),
            )
            .title("GetToolNest")
            .inner_size(1280.0, 800.0)
            .min_inner_size(400.0, 500.0)
            .resizable(true)
            .center()
            .visible(!start_in_tray)
            // Links inside the app window: keep site pages, send everything else to the browser.
            // Sign-in pages stay too: Google sign-in falls back to a redirect when a popup cannot open.
            .on_navigation(|url| {
                if is_site(url) || is_local(url) || is_sign_in_popup(url) || matches!(url.scheme(), "about" | "blob" | "data") {
                    true
                } else {
                    open_in_browser(url);
                    false
                }
            })
            // target="_blank" and window.open().
            .on_new_window(move |url, _features| {
                if is_site(&url) {
                    // a page of the site: open it as a tab of the app shell
                    if let Some(w) = handle.get_webview_window("main") {
                        let target = if url.path().starts_with("/appshell/") {
                            url
                        } else {
                            let mut u = Url::parse(HOME).unwrap();
                            let mut path = url.path().to_string();
                            if let Some(q) = url.query() { path.push('?'); path.push_str(q); }
                            u.query_pairs_mut().append_pair("open", &path);
                            u
                        };
                        let _ = w.navigate(target);
                    }
                    NewWindowResponse::Deny
                } else if is_sign_in_popup(&url) || matches!(url.scheme(), "about" | "blob") {
                    NewWindowResponse::Allow
                } else {
                    open_in_browser(&url);
                    NewWindowResponse::Deny
                }
            })
            .build()?;

            #[cfg(windows)]
            setup_webview2(&window, app.path().download_dir().ok());
            #[cfg(not(windows))]
            let _ = window;

            build_tray(app.handle())?;
            start_updater(app.handle().clone());
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running GetToolNest");
}
