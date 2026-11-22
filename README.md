# AZRYON — GitHub Pages website package

This package contains the AZRYON static website, branding assets, social preview image, and homepage structured data.

## Organization details represented in the schema

- Organization name: **Azryon** (alternate brand spelling: **AZRYON**)
- Organization description: holding company focused on Space, Super Intelligence, Robotics and Investments
- Country provided: **United States (US)**. No street, city, state, or postal address was provided.
- Founding year: **2026**
- Founder: **Hirun Heshatha** — Founder & CEO (`https://hirunheshatha.com/`)
- Public contact email: `contact@azryon.com`
- Company social profile URLs and founder profile URLs: included as supplied
- Subsidiary entities: Azryon Space, Azryon SI, Azryon Robotics, and Azryon Capital, linked to the parent organization using `parentOrganization`

The schema intentionally does not include an unconfirmed legal company name, full postal address, telephone number, or claims about international service coverage.

## Upload to GitHub Pages

1. Download and extract this ZIP.
2. Upload **all files and folders at the top level of the extracted ZIP directly into the root of your GitHub repository**, replacing the existing files. `index.html`, `CNAME`, `azryon-logo.png`, `organization-schema.jsonld`, `icons/`, and the other files should sit together. Do not upload the ZIP itself and do not place the files inside an extra nested folder.
3. In GitHub, open **Settings → Pages** and ensure the publishing branch/folder is the one containing the root `index.html` (commonly `main` / root).
4. Confirm that the custom domain is `azryon.com` and HTTPS is enabled.

## Structured data files

- `index.html` embeds one JSON-LD graph in its `<head>`; this is the markup Google can read when it crawls the homepage.
- `organization-schema.jsonld` is a standalone copy of the same JSON-LD graph for validation and maintenance. It is not separately loaded by the page; keep it synchronized with the inline version if you edit either one.
- The graph contains the parent Organization, Founder Person, four child Organization entities, and linked WebSite/WebPage entities.

## Branding and image references

- `azryon-logo.png` is the supplied 1254 × 1254 px logo; the Organization schema references this image.
- `favicon-96x96.png` is the homepage-declared square favicon.
- `favicon.ico` is retained as a multi-resolution legacy browser fallback.
- Apple Touch, Android and maskable PWA icons are declared in `site.webmanifest`.
- `og-image.png` is the social-sharing preview used by Open Graph and X/Twitter metadata.

## After publishing

Check these URLs in a browser:

- `https://azryon.com/`
- `https://azryon.com/azryon-logo.png`
- `https://azryon.com/favicon-96x96.png`
- `https://azryon.com/favicon.ico`
- `https://azryon.com/og-image.png`
- `https://azryon.com/site.webmanifest`

Then use Google Search Console URL Inspection to test `https://azryon.com/`, request indexing, and submit `https://azryon.com/sitemap.xml` if needed. Google can take time to recrawl the page and does not guarantee a particular logo or favicon display.

Google documentation:
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Favicon in Search: https://developers.google.com/search/docs/appearance/favicon-in-search
