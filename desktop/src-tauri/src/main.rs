// GetToolNest desktop app: a native window that shows https://gettoolnest.xyz/.
// The site's own service worker gives offline support after the first visit.
// When the site cannot load at all, a bundled offline page (dist/offline.html) is shown.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::webview::{NewWindowResponse, WebviewWindowBuilder};
use tauri::{Manager, Url, WebviewUrl};

const HOME: &str = "https://gettoolnest.xyz/";

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

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .setup(|app| {
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
            // Links inside the app window: keep site pages, send everything else to the browser.
            .on_navigation(|url| {
                if is_site(url) || is_local(url) || matches!(url.scheme(), "about" | "blob" | "data") {
                    true
                } else {
                    open_in_browser(url);
                    false
                }
            })
            // target="_blank" and window.open().
            .on_new_window(move |url, _features| {
                if is_site(&url) {
                    if let Some(w) = handle.get_webview_window("main") {
                        let _ = w.navigate(url);
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
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running GetToolNest");
}
