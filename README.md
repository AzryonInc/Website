# AZRYON — GitHub-ready website and structured data

This package contains the AZRYON static website, device/browser branding assets, social-preview image, and matching JSON-LD structured data.

## Company information included

- Organization name: **Azryon** (alternate name: **AZRYON**)
- Legal name: **Azryon LLC** (as supplied)
- Website: `https://azryon.com/`
- Description: Azryon operates across Space, Super Intelligence, Robotics and Investments, developing innovative technologies to build the future.
- Slogan: **Space, AI, Robotics & Investments**
- Founding year: **2026**
- Founder entity: **Hirun Heshatha** — Founder & CEO (`https://hirunheshatha.com/`)
- Contact: `contact@azryon.com`
- Service area: International
- Address country supplied: US (the schema currently contains the country only; add a full public address only if appropriate)
- Subsidiaries: **Azryon SI** (`https://azryon.si/`), **Azryon Robotics** (`https://azryonrobotics.com/`), **Azryon Capital** (`https://azryoncapital.com/`), **Azryon Space** (`https://azryonspace.com/`)
- Official company and founder social profile URLs: the exact URLs supplied in the schema

## Upload to GitHub Pages

1. Download and extract this ZIP.
2. Upload **all extracted files and folders directly into the root of your GitHub repository**. `index.html`, `CNAME`, `og-image.png`, `icons/`, and the other root files should sit together; do not upload the ZIP itself or put the files inside an extra nested folder.
3. In GitHub, open **Settings → Pages** and publish from the branch/folder containing `index.html` (commonly `main` / root).
4. Confirm the custom domain `azryon.com` in **Settings → Pages** and ensure HTTPS is enabled. The included `CNAME` contains `azryon.com` for branch-based publishing.

## Structured data

The homepage embeds one JSON-LD graph containing:

- The parent `Organization` and its logo, legal name, contact details, supplied address country, social profiles and service area.
- The `Person` entity for the supplied founder details.
- Four subsidiary `Organization` entities linked with `subOrganization` and `parentOrganization`.
- Connected `WebSite` and `WebPage` entities.

The standalone `organization-schema.jsonld` contains the same graph as the homepage script, without HTML script tags.

## Branding and image references

- `azryon-logo.png` is the exact original supplied **1254 × 1254 px** logo and is used by the visible site header/footer and Organization structured data.
- `favicon-96x96.png` is the single homepage-declared square favicon for Google Search and modern browsers. The root `favicon.ico` is a multi-resolution legacy fallback.
- `icons/apple-touch-icon.png` supports iPhone/iPad home-screen icons.
- Android/PWA icons (192 px, 512 px and maskable variants) are declared in `site.webmanifest`.
- `og-image.png` is the 1200 × 630 px social-sharing preview used by Open Graph and X/Twitter metadata; it is intentionally separate from the square Organization logo.
- Unused/duplicate SVG and PNG favicon sets, duplicate brand-mark files and legacy Windows tile assets were removed.

See `GOOGLE-SEARCH-LOGO-SETUP.md` for publishing and Google Search Console steps.
## After publishing

1. Verify that `https://azryon.com/`, `https://azryon.com/favicon-96x96.png`, `https://azryon.com/favicon.ico`, `https://azryon.com/azryon-logo.png`, `https://azryon.com/og-image.png`, and `https://azryon.com/site.webmanifest` load successfully.
2. Run a live test for the homepage in Google Search Console; the `GOOGLE-SEARCH-LOGO-SETUP.md` file includes the favicon and logo checks.
3. Submit `https://azryon.com/sitemap.xml` in Search Console and request indexing after the final site is live.

Google's Organization documentation explains that this markup can help Google understand and disambiguate an organization and may influence the logo shown in Search. Structured data does not guarantee a Knowledge Panel or a particular search display.

## Owner-supplied information to confirm

The schema includes the company legal name, contact email, founder details, country code, subsidiary domains and profile URLs exactly as supplied. Please ensure each is accurate, public, and controlled by the company or founder before publishing. The founder's biography and job title should also be represented accurately on the founder's website and, where applicable, visibly on relevant company pages. A country-only postal address is intentionally retained as supplied; add street/locality/region/postal code only when you have verified public address details.
