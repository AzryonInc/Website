# Azryon Website

The official Azryon website: <https://azryon.com>.

This repository contains the static website published with GitHub Pages.

## Project files

- `index.html` — homepage, styles, scripts, metadata, and structured data. The transparent wordmark shown in the header and footer is embedded directly in this file.
- `CNAME` — custom domain configuration for `azryon.com`.
- `azryon-logo.png` — square organization logo used by the structured data.
- `favicon.ico` and `favicon-96x96.png` — browser favicon assets.
- `icons/` — Apple Touch Icon and Android web-app icons referenced by the page and web manifest.
- `og-image.png` — social sharing image.
- `site.webmanifest` — web-app name, display settings, and icon declarations.
- `robots.txt` and `sitemap.xml` — search crawler instructions and the public homepage sitemap.
- `FONT-LICENSES.md` — D-DIN font source and license information.

## Local preview

Open `index.html` in a web browser. An internet connection is needed to load the D-DIN fonts and other configured third-party resources. The page uses fallback fonts if the font CDN is unavailable.

## Deploy with GitHub Pages

1. Upload the **contents** of the `Azryon` folder to the repository's publishing root. Do not upload the ZIP file or add an extra nested folder.
2. Keep `CNAME` in the publishing root.
3. In **Settings → Pages**, select the publishing branch and `/ (root)` folder, or the folder configured for the site.
4. Confirm that `azryon.com` is the custom domain and enable **Enforce HTTPS** when it becomes available.
5. Visit <https://azryon.com> after deployment and check the homepage, icons, and social sharing preview.

When uploading through GitHub's web interface, files that are not included in the upload are not automatically deleted. Remove obsolete files separately from the repository when appropriate.

## Security

This is a public static website. Do not publish passwords, API keys, access tokens, private documents, or other confidential information. Anything included in the website or a public repository can be viewed by others.
