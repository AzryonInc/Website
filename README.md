# Azryon website

Static website for [Azryon](https://azryon.com), hosted with GitHub Pages.

## Repository contents

- `index.html` — homepage, styles, scripts, SEO metadata, and structured data. The transparent wordmark used in the header and footer is embedded in the HTML, so it does not rely on a separate image path.
- `CNAME` — custom domain (`azryon.com`). Keep this file in the publishing root.
- `azryon-header-wordmark.png` and `azryon-logo.png` — standalone logo assets.
- `favicon.ico`, `favicon-96x96.png`, `og-image.png`, and `icons/` — browser, sharing, and app icons.
- `site.webmanifest`, `robots.txt`, and `sitemap.xml` — web-app and search-engine metadata.
- `FONT-LICENSES.md` — licensing information for the D-DIN fonts.

The site uses D-DIN Regular and D-DIN Bold. The font files load from jsDelivr, so an internet connection is needed to display D-DIN; otherwise, the page uses its fallback fonts.

## Publish with GitHub Pages

1. Upload the **contents** of the website folder to the repository's publishing root. Do not upload the ZIP file or put the files inside an extra nested folder.
2. Keep `CNAME` in the publishing root.
3. In **Settings → Pages**, select the branch and `/ (root)` folder used to publish the site.
4. Confirm that `azryon.com` is set as the custom domain and enable **Enforce HTTPS** when it becomes available.
5. Commit and push the changes, then open [https://azryon.com](https://azryon.com) to check the published site.

When uploading through GitHub's web interface, replacing files does not remove older files that are no longer in the package. Delete obsolete files from the repository separately after confirming they are not used by the current site.

## Preview locally

Open `index.html` in a browser. The header and footer wordmark is embedded in the page. An internet connection is required for the D-DIN fonts; fallback fonts are used when they cannot be loaded.

## Security

This is a static public website. Do not commit passwords, API keys, access tokens, private documents, or other confidential information. Anything included in the website's HTML, CSS, JavaScript, or public assets can be viewed by visitors.
