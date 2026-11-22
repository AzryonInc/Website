# AZRYON package verification report

## Local package checks

- ZIP integrity: passed.
- Original uploaded logo retained byte-for-byte in `azryon-logo.png` and `brand-source/azryon-original-logo.png` (1254 × 1254 PNG).
- Header and footer each reference `/azryon-logo.png`; visible page layout and text were otherwise retained.
- Exactly one homepage `rel="icon"` declaration is present, pointing to `/favicon-96x96.png` (96 × 96 PNG).
- Root `favicon.ico` is a valid multi-resolution ICO with ten square sizes: 16, 32, 48, 64, 96, 128, 144, 192, 240 and 256 px.
- Apple touch icon: 180 × 180 PNG.
- Manifest: valid JSON; all four referenced Android/PWA icons exist and match their declared dimensions.
- Organization structured-data logo points to `/azryon-logo.png`, is 1254 × 1254, and meets Google's documented 112 × 112 minimum dimension.
- Embedded and standalone JSON-LD graphs parse and match.
- Open Graph and X/Twitter metadata point to `/og-image.png`; actual image is 1200 × 630 and matches the metadata dimensions.
- `robots.txt` allows crawling and declares `https://azryon.com/sitemap.xml`.
- Obsolete Windows tiles, unused SVG favicon/mark copies and duplicate favicon/social-square images removed.

## Not verified from this local build

- Live HTTP status, MIME type, redirects, caching and crawlability of the deployed assets. This execution environment could read the public homepage in web search but could not directly retrieve the binary favicon endpoints to verify their live response.
- Googlebot/Googlebot-Image access after deployment, Search Console live test, the next Google recrawl, or the displayed favicon/logo in actual Search results.
- Google may take time to refresh a favicon and does not guarantee a particular favicon or organization logo display, even when requirements are met.
