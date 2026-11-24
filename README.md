# GetToolNest

A static site of free browser tools: PDF tools (merge, split, compress, convert), image tools, finance and everyday calculators, generators, and text and developer utilities. Everything runs client-side, so it can be hosted free on GitHub Pages.

## Editing

The HTML in the repository root is generated. Edit the sources, then rebuild:

```
node build.js
```

- `config.json`: site name, URL, contact email, AdSense and Analytics ids, optional Firebase config
- `src/tools.js`: title, description, how-to steps and FAQ for each tool
- `src/tools/<slug>.html`: the interactive part of each tool
- `assets/`: shared CSS and JavaScript (`site.js` for search, pins and saved settings; `cloud.js` for optional sign-in)

## Turning on ads

1. Publish the site (Settings → Pages → deploy from the branch root).
2. If you use a custom domain, set `siteUrl` in `config.json` and rebuild.
3. Apply at Google AdSense. Once approved, put your publisher id (`ca-pub-...`) in `adsenseClient` and your ad unit ids in `adSlotTop` and `adSlotBottom`, then rebuild. This adds the ad code to every page, creates `ads.txt` and updates the privacy policy.
4. Add the site to Google Search Console and submit `sitemap.xml`. Put the verification code in `googleSiteVerification` if you use the meta-tag method.

## Saved state and Google sign-in

Pinned tools, recently used tools and what was entered into a tool's short fields (numbers, dates, menus, one-line text) are kept in the visitor's `localStorage`, so a calculation is still there on the next visit. Textareas, files and generated passwords are never stored.

The language menu translates the page in place with Google Translate. Its script is only loaded after a visitor picks a language other than English.

Accounts are off until `firebase` in `config.json` holds a Firebase web config (`apiKey`, `authDomain`, `projectId`, `appId`). Until then the Sign in menu and forms are shown but say accounts are not ready. When set, visitors can sign in or create an account with Google or with email and password (enable both providers under Authentication > Sign-in method), and the same saved state is synced to one Firestore document per user (`users/{uid}`). In Firebase: enable the Google provider under Authentication, add the site domain to the authorised domains, create a Firestore database, and use these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

## Live Charts

`/charts/` is a separate full-screen page, not one of the tools. Its whole source is `src/charts.html`; `build.js` copies it to `charts/index.html` and fills in the site URL and the Firebase config.

- Data: Binance (crypto) and Kraken (12 forex pairs and gold) need no key. A visitor can paste their own Twelve Data key in the chart settings to add spot gold (XAU/USD), silver, more forex and US stocks. The key is never put in this repository: it stays in the visitor's browser and their account.
- Relay (optional): `server/charts-relay/` is a Cloudflare Worker that shares one Twelve Data key with every visitor. Put its address in `config.json` → `chartsApi` to turn it on. See its README.
- Saving: everything a visitor draws or sets up is saved in `localStorage`. When they are signed in it is also saved to the `charts` field of their `users/{uid}` document, so it appears on any device where they sign in. `assets/cloud.js` only writes its own fields, so the tools' sync and the charts' sync do not overwrite each other.
