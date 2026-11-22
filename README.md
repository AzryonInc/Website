# AZRYON — GitHub Pages website

This repository contains the static AZRYON company website and the image, favicon, and web-app assets used by the homepage.

## Project files

- `index.html` — homepage, SEO metadata, and the single JSON-LD graph for AZRYON, its founder, subsidiaries, website, and homepage.
- `CNAME` — custom domain file for `azryon.com`. Keep it in the publishing root.
- `azryon-logo.png` — official square AZRYON mark used by the homepage and Organization structured data.
- `favicon-96x96.png` and `favicon.ico` — website favicon assets.
- `og-image.png` — Open Graph and X/Twitter sharing image.
- `site.webmanifest` — web-app metadata and icon declarations.
- `icons/` — Apple Touch Icon and Android/PWA icons.
- `robots.txt` — crawler instructions. This is **not** an access-control or privacy mechanism.
- `sitemap.xml` — sitemap for the public homepage.
- `README.md` — project, deployment, and security notes for maintainers. It is not required for the website to render, but is useful to keep in the repository.

The Organization, Person, subsidiary, WebSite, and WebPage structured data is maintained in one JSON-LD block in `index.html`. A separate `organization-schema.jsonld` copy is intentionally not used by the site, to avoid maintaining two competing copies.

## Publish on GitHub Pages

1. Extract the website ZIP.
2. Upload the **contents** of the extracted folder into the repository's publishing root. Do not upload the ZIP itself or place the files inside an extra nested folder.
3. Replace files with matching names.
4. In **Settings → Pages**, confirm the intended publishing branch and `/ (root)` folder (or the actual configured source) are selected.
5. Confirm the custom domain is `azryon.com` and **Enforce HTTPS** is enabled after the certificate is ready.
6. After deployment, check the homepage and asset URLs listed below.

**Important:** Uploading a ZIP's contents through GitHub's web interface does not automatically delete old files that are absent from the ZIP. Review and manually remove obsolete files listed below if they remain in the repository.

## Obsolete files from earlier packages

Remove these if they are still present and are not referenced by the current homepage or manifest:

- `FINAL-CHECKS.md`
- `SUBSIDIARY-URL-STATUS.txt`
- `GOOGLE-SEARCH-LOGO-SETUP.md`
- `organization-schema.jsonld` (the live schema is already embedded in `index.html`)
- `brand-source/` (duplicate source-logo copy)
- `icons/android-chrome-maskable-192x192.png`
- `icons/android-chrome-maskable-512x512.png`

If assets from the much older logo package remain, remove these obsolete files after confirming no current HTML or manifest reference points to them. Keep the root-level `favicon-96x96.png`:

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

## Security and privacy notes

### What is public

This is a static website. Visitors' browsers receive the HTML, CSS, JavaScript, images, and other assets needed to display it. Those front-end files can be inspected or downloaded by visitors. If this GitHub repository is public, anyone can also browse, clone, and fork the repository and view its commit history.

Making the source repository private does **not** make a normally published GitHub Pages website private. GitHub documents that published Pages sites are publicly available on the internet, even when the source repository is private, subject to the account/plan's Pages features.

Treat everything placed in the published website as public. Do not commit or publish:

- passwords, API secret keys, access tokens, private keys, or database credentials;
- private customer details, personal documents, or non-public company information;
- secrets in HTML, CSS, JavaScript, JSON, image metadata, or GitHub Actions logs.

Anything placed in browser-side JavaScript is visible to visitors. A public identifier such as the Google Tag Manager container ID is not the same as a private credential, but the account that controls that container should be protected.

### Notes from the current static package review

The reviewed package is a small static HTML site. Its page JavaScript handles the mobile navigation, scroll behavior, and reveal animations. The reviewed files do not contain a login system, database connection, server-side application, contact form endpoint, or obvious hard-coded API key/password/token pattern. This is a limited file review, not a penetration test or a guarantee that the live deployment, GitHub account, DNS provider, Google Tag Manager account, or every previous Git commit is free of risk.

The homepage loads one third-party script from Google Tag Manager (`googletagmanager.com`). Keep it only if AZRYON controls and uses that GTM container. Review the tags and users who can publish changes to the container; protect the associated Google account with two-factor authentication and grant access only to trusted people. Remove the GTM snippet if it is not being used.

### Recommended protections

1. Enable two-factor authentication or a passkey on the GitHub account and the domain registrar account.
2. Keep repository write access limited to trusted maintainers. Review collaborators and connected applications periodically.
3. Protect the publishing branch (`main`) against direct pushes or force pushes where practical; review changes before publishing.
4. Keep **Enforce HTTPS** enabled in GitHub Pages.
5. Verify `azryon.com` as a custom domain in GitHub Pages and keep DNS records limited to the records required for the site. Avoid wildcard DNS records. Domain verification helps prevent another GitHub user from attaching your domain to a different Pages site.
6. Never rely on `robots.txt` to hide confidential content. It is a crawler hint, not access control.
7. If a real secret is ever committed, revoke/rotate it immediately. Deleting the file in a later commit does not remove the exposed value from the earlier Git history.
8. Use GitHub secret scanning and push protection when available, but do not treat automated scanning as a substitute for checking changes before upload.

## Post-deployment checks

Open these URLs and confirm they return the expected content:

- `https://azryon.com/`
- `https://azryon.com/azryon-logo.png`
- `https://azryon.com/favicon-96x96.png`
- `https://azryon.com/favicon.ico`
- `https://azryon.com/og-image.png`
- `https://azryon.com/site.webmanifest`
- `https://azryon.com/robots.txt`
- `https://azryon.com/sitemap.xml`

Then inspect the homepage in Google Search Console and request indexing if appropriate. Google decides when and how a favicon or Organization logo appears in Search; structured data does not guarantee a particular display.
