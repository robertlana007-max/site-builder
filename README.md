# GetToolNest

A static site of 12 free browser tools (image compressor, image resizer, QR code generator, password generator, word counter, case converter, JSON formatter, and age, percentage, loan, BMI and unit calculators). Everything runs client-side, so it can be hosted free on GitHub Pages.

## Editing

The HTML in the repository root is generated. Edit the sources, then rebuild:

```
node build.js
```

- `config.json`: site name, URL, contact email, AdSense and Analytics ids
- `src/tools.js`: title, description, how-to steps and FAQ for each tool
- `src/tools/<slug>.html`: the interactive part of each tool
- `assets/`: shared CSS and JavaScript

## Turning on ads

1. Publish the site (Settings → Pages → deploy from the branch root).
2. If you use a custom domain, set `siteUrl` in `config.json` and rebuild.
3. Apply at Google AdSense. Once approved, put your publisher id (`ca-pub-...`) in `adsenseClient` and your ad unit ids in `adSlotTop` and `adSlotBottom`, then rebuild. This adds the ad code to every page, creates `ads.txt` and updates the privacy policy.
4. Add the site to Google Search Console and submit `sitemap.xml`. Put the verification code in `googleSiteVerification` if you use the meta-tag method.
