# AZRYON — Google Search favicon and company logo setup

## What each image is for

- `favicon-96x96.png`: the one favicon declared in the homepage for Google Search and modern browsers. It is a square 96 × 96 PNG derived from the complete supplied logo artwork.
- `favicon.ico`: multi-resolution legacy browser fallback, including 16, 32, 48, 64, 96, 128, 144, 192, 240 and 256 pixel square images.
- `azryon-logo.png`: the original 1254 × 1254 supplied logo, preserved byte-for-byte. The Organization structured-data `logo` points here.
- `icons/apple-touch-icon.png`: iPhone/iPad home-screen icon (180 × 180).
- `icons/android-chrome-192x192.png` and `icons/android-chrome-512x512.png`: Android/PWA icons.
- `icons/android-chrome-maskable-192x192.png` and `icons/android-chrome-maskable-512x512.png`: maskable PWA icon variants.
- `og-image.png`: 1200 × 630 social-sharing preview used by Open Graph and X/Twitter metadata; it is not used as the Organization logo.

## What was simplified

The homepage declares one `rel="icon"` PNG resource instead of competing SVG, several PNG sizes and an additional shortcut-icon declaration. Duplicate/unused favicon variants, the obsolete Windows tile icon set, and the duplicate social-square/mark assets were removed. The `favicon.ico` file remains at the website root as a legacy fallback.

## Publish steps

1. Extract this ZIP and upload **all files and folders at the top level of the extracted ZIP** to the root of the GitHub Pages repository, replacing the old files. Do not upload the ZIP file itself or create an extra nested folder.
2. After GitHub Pages deploys, check these public URLs in a browser:
   - `https://azryon.com/`
   - `https://azryon.com/favicon-96x96.png`
   - `https://azryon.com/favicon.ico`
   - `https://azryon.com/azryon-logo.png`
   - `https://azryon.com/og-image.png`
   - `https://azryon.com/site.webmanifest`
   - `https://azryon.com/robots.txt`
3. In Google Search Console, open URL Inspection for `https://azryon.com/`, run a live test, and choose **Request indexing** after the deployment is live.
4. In Search Console, submit or re-submit `https://azryon.com/sitemap.xml`.
5. After Google recrawls the homepage and favicon, search results may update. Google controls when the icon is refreshed and does not guarantee that every eligible site will show its favicon immediately.

## Important distinction

The small icon beside a normal Google Search result is the **site favicon**. The larger company logo Google may use for Organization-related search features/knowledge panels comes from the Organization structured-data `logo` property. This package configures both separately. A valid setup makes the site eligible; it cannot force Google to display a particular icon or logo.

## Google documentation

- Favicon requirements: https://developers.google.com/search/docs/appearance/favicon-in-search
- Organization structured data and logo requirements: https://developers.google.com/search/docs/appearance/structured-data/organization
- Site names: https://developers.google.com/search/docs/appearance/site-names
