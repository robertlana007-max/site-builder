# GetToolNest Android app

A small Android app (about 14 KB) that shows the app shell, https://gettoolnest.xyz/appshell/, full screen
(src/appshell.html in the site: bottom tabs, search, Live Charts, the tools in app mode). Because it loads the
live website, every change to the site reaches the app without a new release. The app opens
`/appshell/?app=android&v=<VERSION>`; the shell requires sign-in inside the app and offers an update when
config.json `androidApkVersion` is newer than the installed version.

What the app adds on top of a browser tab:
- file picking for the PDF and picture tools;
- saving files the tools make (blob: and data: links) to Downloads/GetToolNest;
- the Android share sheet for the Share button;
- external links, email and phone numbers open outside the app;
- an offline page on first launch without internet.

Google sign-in does not work inside Android WebViews (Google blocks it), so the site hides that button in
the app; email sign-in works. The installable web app (Chrome → Install app) supports Google sign-in.

## Build (no Android SDK needed)

    GTN_STOREPASS=<password> python3 build_apk.py <android-all.jar> <dalvik-dx.jar> <apksig.jar> <keystore.p12> out.apk

- android-all.jar: `org.robolectric:android-all:14-robolectric-10818077` (Maven Central), only used to compile against
- dalvik-dx.jar: `com.jakewharton.android.repackaged:dalvik-dx:16.0.1` (Maven Central)
- apksig.jar: `com.android.tools.build:apksig:2.3.0` (Maven Central)
- keystore.p12: the release signing key. It is NOT in this repository. Every update must be signed with the same
  key or Android refuses to install it over the old version. Keep it and its password safe.

Then copy out.apk to `download/GetToolNest.apk`, bump versionCode/versionName in build_apk.py, VERSION in MainActivity.java and `androidApkVersion`
in config.json, and run `node build.js`.
