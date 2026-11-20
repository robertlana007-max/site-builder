package xyz.gettoolnest.app;

import android.app.Activity;
import android.app.DownloadManager;
import android.content.ActivityNotFoundException;
import android.content.ClipData;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.View;
import android.view.Window;
import android.webkit.CookieManager;
import android.webkit.DownloadListener;
import android.webkit.JavascriptInterface;
import android.webkit.URLUtil;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;

/**
 * GetToolNest for Android: the website in a full-screen WebView, plus the three things a
 * browser tab gives for free and a WebView does not: choosing files, saving the files the
 * tools make (they are blob: or data: links), and sharing.
 */
public class MainActivity extends Activity {
    static final String HOME = "https://gettoolnest.xyz/?source=android";
    static final String HOST = "gettoolnest.xyz";
    static final int PICK = 7;

    WebView web;
    ValueCallback<Uri[]> pending;

    // Turns clicks on download links that point at in-page data into a call to save().
    static final String HOOK = "(function(){if(window.__gtnHook)return;window.__gtnHook=1;"
        + "document.addEventListener('click',function(e){var a=e.target&&e.target.closest&&e.target.closest('a[href]');if(!a)return;"
        + "var h=a.href||'';if(!/^(blob|data):/.test(h))return;e.preventDefault();e.stopPropagation();"
        + "var n=a.getAttribute('download')||'download';"
        + "fetch(h).then(function(r){return r.blob();}).then(function(b){var f=new FileReader();"
        + "f.onload=function(){var s=String(f.result);GTNAndroid.save(n,b.type||'application/octet-stream',s.slice(s.indexOf(',')+1));};"
        + "f.readAsDataURL(b);}).catch(function(){GTNAndroid.toast('Could not save this file.');});},true);})();";

    static final String OFFLINE = "<!doctype html><meta name=viewport content='width=device-width,initial-scale=1'>"
        + "<body style='font-family:sans-serif;text-align:center;padding:72px 24px;color:#111827;background:#f6f7f9'>"
        + "<div style='width:64px;height:64px;border-radius:16px;background:#2563eb;margin:0 auto 20px'></div>"
        + "<h2>You are offline</h2><p style='color:#5f6b7a'>Connect to the internet once, and most tools will then work without it.</p>"
        + "<button onclick=\"location.href='" + HOME + "'\" style='margin-top:16px;font-size:16px;padding:12px 22px;border:0;border-radius:10px;background:#2563eb;color:#fff'>Try again</button></body>";

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        Window w = getWindow();
        w.setStatusBarColor(Color.WHITE);
        if (Build.VERSION.SDK_INT >= 23) w.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(246, 247, 249));
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setSupportMultipleWindows(false);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setUserAgentString(s.getUserAgentString() + " GetToolNestApp/1.0 (Android)");
        CookieManager.getInstance().setAcceptCookie(true);
        CookieManager.getInstance().setAcceptThirdPartyCookies(web, true);

        web.addJavascriptInterface(new Bridge(), "GTNAndroid");
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) { return outside(r.getUrl()); }

            @Override
            @SuppressWarnings("deprecation")
            public boolean shouldOverrideUrlLoading(WebView v, String url) { return outside(Uri.parse(url)); }

            @Override
            public void onPageFinished(WebView v, String url) { v.evaluateJavascript(HOOK, null); }

            @Override
            public void onReceivedError(WebView v, WebResourceRequest r, WebResourceError e) {
                if (r.isForMainFrame()) v.loadDataWithBaseURL(null, OFFLINE, "text/html", "utf-8", null);
            }
        });
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (pending != null) pending.onReceiveValue(null);
                pending = cb;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                i.setType("*/*");
                ArrayList<String> types = new ArrayList<String>();
                for (String t : p.getAcceptTypes()) {
                    for (String one : t.split(",")) {
                        one = one.trim();
                        if (one.equals(".pdf")) one = "application/pdf";
                        if (one.equals(".json")) one = "application/json";
                        if (one.contains("/") && !types.contains(one)) types.add(one);
                    }
                }
                if (!types.isEmpty()) i.putExtra(Intent.EXTRA_MIME_TYPES, types.toArray(new String[0]));
                if (p.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE) i.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
                try {
                    startActivityForResult(Intent.createChooser(i, "Choose a file"), PICK);
                } catch (ActivityNotFoundException e) {
                    pending = null;
                    cb.onReceiveValue(null);
                    return false;
                }
                return true;
            }
        });
        web.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String ua, String cd, String mime, long len) {
                if (!url.startsWith("http")) return; // blob: and data: links are handled by HOOK
                try {
                    DownloadManager.Request req = new DownloadManager.Request(Uri.parse(url));
                    req.setMimeType(mime);
                    req.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                    req.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, URLUtil.guessFileName(url, cd, mime));
                    ((DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE)).enqueue(req);
                    Toast.makeText(MainActivity.this, "Downloading…", Toast.LENGTH_SHORT).show();
                } catch (Exception e) {
                    open(Uri.parse(url));
                }
            }
        });

        if (state != null) web.restoreState(state);
        else web.loadUrl(HOME);
    }

    /** Links to other websites, email and phone numbers open outside the app. */
    boolean outside(Uri u) {
        String scheme = u.getScheme() == null ? "" : u.getScheme();
        String host = u.getHost() == null ? "" : u.getHost();
        if ((scheme.equals("https") || scheme.equals("http")) && (host.equals(HOST) || host.endsWith("." + HOST))) return false;
        if (scheme.equals("blob") || scheme.equals("data") || scheme.equals("about")) return false;
        open(u);
        return true;
    }

    void open(Uri u) {
        try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception e) { /* nothing can open it */ }
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req != PICK || pending == null) { super.onActivityResult(req, res, data); return; }
        Uri[] out = null;
        if (res == RESULT_OK && data != null) {
            ClipData clip = data.getClipData();
            if (clip != null) {
                out = new Uri[clip.getItemCount()];
                for (int i = 0; i < out.length; i++) out[i] = clip.getItemAt(i).getUri();
            } else if (data.getData() != null) {
                out = new Uri[] { data.getData() };
            }
        }
        pending.onReceiveValue(out);
        pending = null;
    }

    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onSaveInstanceState(Bundle out) { super.onSaveInstanceState(out); web.saveState(out); }
    @Override
    protected void onPause() { super.onPause(); web.onPause(); }
    @Override
    protected void onResume() { super.onResume(); web.onResume(); }

    /** Called from the page as window.GTNAndroid. */
    class Bridge {
        @JavascriptInterface
        public void save(String name, String mime, String b64) {
            String clean = name.replaceAll("[\\\\/:*?\"<>|]", "_");
            try {
                byte[] bytes = Base64.decode(b64, Base64.DEFAULT);
                String where;
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues cv = new ContentValues();
                    cv.put(MediaStore.MediaColumns.DISPLAY_NAME, clean);
                    cv.put(MediaStore.MediaColumns.MIME_TYPE, mime);
                    cv.put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/GetToolNest");
                    Uri uri = getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
                    OutputStream os = getContentResolver().openOutputStream(uri);
                    os.write(bytes);
                    os.close();
                    where = "Downloads/GetToolNest";
                } else {
                    File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
                    if (dir != null && !dir.exists()) dir.mkdirs();
                    FileOutputStream os = new FileOutputStream(new File(dir, clean));
                    os.write(bytes);
                    os.close();
                    where = "the app's Downloads folder";
                }
                toast("Saved " + clean + " to " + where);
            } catch (Exception e) {
                toast("Could not save " + clean);
            }
        }

        @JavascriptInterface
        public void share(String title, String url) {
            Intent i = new Intent(Intent.ACTION_SEND);
            i.setType("text/plain");
            i.putExtra(Intent.EXTRA_SUBJECT, title);
            i.putExtra(Intent.EXTRA_TEXT, url);
            startActivity(Intent.createChooser(i, "Share"));
        }

        @JavascriptInterface
        public void toast(final String text) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() { Toast.makeText(MainActivity.this, text, Toast.LENGTH_LONG).show(); }
            });
        }

        @JavascriptInterface
        public String version() { return "1.0"; }
    }
}
