# AZRYON — GitHub Pages website

This repository contains the static AZRYON website and the assets referenced by its homepage.

## Files kept in this clean package

- `index.html` — homepage, SEO metadata, and the single JSON-LD structured-data graph.
- `CNAME` — custom domain (`azryon.com`). Keep it at the repository root.
- `azryon-logo.png` — official square brand mark used by the page and Organization schema.
- `favicon-96x96.png` and `favicon.ico` — search/browser favicon assets.
- `og-image.png` — Open Graph and X/Twitter sharing image.
- `site.webmanifest` and `icons/` — PWA, Android and Apple touch icons.
- `robots.txt` and `sitemap.xml` — crawler instructions and sitemap.
- `README.md` — repository notes and deployment instructions.

The homepage contains one JSON-LD graph describing Azryon, its founder, four subsidiary organizations, the website and the homepage. A separate `organization-schema.jsonld` copy is intentionally omitted so the schema is maintained in one place only.

## Publish on GitHub Pages

1. Extract the ZIP.
2. Upload the **contents** of the extracted folder directly into the repository root. Do not upload the ZIP itself or put the files inside an additional nested folder.
3. Replace existing files with the same names.
4. In **Settings → Pages**, confirm the correct publishing branch and root folder are selected.
5. Confirm the custom domain is `azryon.com` and HTTPS is enabled.

**Important:** GitHub's web upload does not automatically delete files that are absent from the ZIP. After uploading, manually delete obsolete files listed below if they still exist in the repository.

## Obsolete files to remove if present from earlier uploads

Remove the following documentation/backup files and duplicate assets:

- `FINAL-CHECKS.md`
- `SUBSIDIARY-URL-STATUS.txt`
- `GOOGLE-SEARCH-LOGO-SETUP.md`
- `organization-schema.jsonld` (duplicate of the schema embedded in `index.html`)
- `brand-source/` (duplicate copy of the official logo)
- `icons/android-chrome-maskable-192x192.png`
- `icons/android-chrome-maskable-512x512.png`

If files from the much older logo package remain, remove these obsolete assets too, but **keep the root-level `favicon-96x96.png`**:

- `browserconfig.xml`
- `icons/azryon-mark.png`
- `icons/azryon-mark.svg`
- `icons/azryon-social-preview.png`
- `icons/azryon-social-square.png`
- `icons/favicon.svg`
- `icons/favicon-16x16.png`
- `icons/favicon-32x32.png`
- `icons/favicon-48x48.png`
- `icons/favicon-64x64.png`
- `icons/favicon-96x96.png`
- `icons/favicon-128x128.png`
- `icons/favicon-256x256.png`
- `icons/safari-pinned-tab.svg`
- `icons/mstile-70x70.png`
- `icons/mstile-150x150.png`
- `icons/mstile-310x150.png`
- `icons/mstile-310x310.png`

## After publishing

Check these URLs in a browser:

- `https://azryon.com/`
- `https://azryon.com/azryon-logo.png`
- `https://azryon.com/favicon-96x96.png`
- `https://azryon.com/favicon.ico`
- `https://azryon.com/og-image.png`
- `https://azryon.com/site.webmanifest`

Then inspect the homepage in Google Search Console and request indexing if appropriate. Google controls when and how a favicon or Organization logo appears in Search; the markup does not guarantee a particular display.
