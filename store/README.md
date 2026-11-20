# GetToolNest: store listing kit

Everything needed to publish the GetToolNest app on Google Play and the Apple App Store.
The app is the website (https://gettoolnest.xyz) packaged for each store, so every change to the
website reaches both apps without a new release.

## Files in this folder

| File | Use |
|---|---|
| `icon-512.png` | App icon (Play Console: 512 x 512) |
| `feature-graphic-1024x500.png` | Play Console feature graphic |
| `android/1-5 *.png` | Play Console phone screenshots (1080 x 1920) |
| `iphone/1-5 *.png` | App Store screenshots for 6.9" / 6.7" iPhones (1290 x 2796) |

## Links the stores ask for

| Field | Value |
|---|---|
| Website | https://gettoolnest.xyz/ |
| Privacy policy | https://gettoolnest.xyz/privacy/ |
| Terms of use | https://gettoolnest.xyz/terms/ |
| Support / contact | https://gettoolnest.xyz/contact/ (gettoolnest14@gmail.com) |
| Account deletion (Play "Data deletion" URL) | https://gettoolnest.xyz/delete-account/ |
| Start URL for the package | https://gettoolnest.xyz/?source=app |

## Listing text

**App name:** GetToolNest - PDF & Daily Tools

**Short description (Play, max 80):** 50 free tools: edit & merge PDFs, compress photos, calculators. Works offline.

**Subtitle (App Store, max 30):** PDF, photo & money tools

**Full description:**

GetToolNest puts 50 free, fast tools in one small app. No sign-up needed, no watermarks, and your files never leave your phone.

PDF TOOLS
• Edit PDF text: tap a line and retype it, in the document's own font
• Merge, split, compress and rotate PDFs
• Delete pages, add page numbers or a watermark
• Turn photos into a PDF, or PDF pages into pictures
• Copy the text out of any PDF, including scans

PHOTO TOOLS
• Change the writing on a picture: tap the text and type
• Compress, resize and convert JPG, PNG and WebP

MONEY CALCULATORS
• Mortgage, loan, credit card payoff and compound interest
• Salary, sales tax and VAT, discount, tip and profit margin

EVERYDAY TOOLS
• QR code generator, strong password generator
• Age, BMI, calorie, GPA and percentage calculators
• Unit converter, timer, stopwatch, word counter and more

MADE FOR YOU
• Works offline once opened
• Pin your favourite tools; your last numbers are remembered
• Light and dark theme, 8 colours, bigger text and accessibility options
• Use it in 24 languages
• Optional free account keeps your settings on every device

PRIVATE BY DESIGN
Every tool runs on your own device. Your PDFs, photos and numbers are never uploaded.

**Keywords (App Store, max 100):** pdf,editor,merge,compress,photo,qr,calculator,mortgage,converter,scanner,tools

**Category:** Productivity (secondary: Utilities)

**Content rating:** Everyone / 4+ (no user-generated content, no ads at launch, no purchases)

**Data safety (Play) / App Privacy (Apple):**
- Files, photos and text entered in tools: not collected (processed on the device only).
- Optional account: email address and name, used for sign-in and to sync settings. Not shared, not used for tracking. Users can delete it (see the deletion URL).
- No location, contacts or tracking.
- If ads are added later, update both forms before releasing.

## Android package (Google Play)

1. Create a Google Play developer account (one-time USD 25): https://play.google.com/console
2. Go to https://www.pwabuilder.com, enter `https://gettoolnest.xyz`, choose **Package for stores → Android**.
   - Package ID: `xyz.gettoolnest.app`
   - App name: GetToolNest
   - Leave signing as "new key" and **keep the downloaded signing key safe** (losing it means you cannot update the app).
3. In Play Console create the app, upload the `.aab` file, and fill the listing from this file.
4. Send the SHA-256 fingerprint shown by PWABuilder (or Play Console → App integrity → App signing) so the site can publish
   `/.well-known/assetlinks.json`. Without it the app shows a browser bar at the top.
5. When the app is live, put its Play link in `config.json` → `playStoreUrl` and rebuild; the Get the app page shows the real button.

## iPhone package (App Store)

1. Apple Developer Program: USD 99 per year: https://developer.apple.com/programs/
2. On https://www.pwabuilder.com choose **Package for stores → iOS**. Building the downloaded project needs a Mac with Xcode
   (or a cloud Mac service).
3. Apple reviews apps that wrap a website strictly (guideline 4.2, minimum functionality). Point out in the review notes that
   the app works offline, keeps settings, edits PDFs and photos on the device, and has 50 tools.
4. When the app is live, put its App Store link in `config.json` → `appStoreUrl` and rebuild.
