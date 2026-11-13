# AZRYON package verification report

Checks run locally on the final package before delivery:

- ZIP archive integrity: passed (`ZipFile.testzip()` returned no errors).
- Homepage JSON-LD: valid JSON; one embedded `application/ld+json` block.
- Standalone `organization-schema.jsonld`: valid JSON and exactly matches the embedded JSON-LD graph.
- Organization graph: one parent organization, four subsidiary organizations, one `WebSite`, and one `WebPage`; parent/child links are reciprocal.
- Subsidiary URLs: the four user-supplied website URLs are present in the respective child `url` properties.
- Social profiles: six user-supplied profile URLs are present in the parent `sameAs` array.
- Canonical URL: `https://azryon.com/`.
- Logo source: bundled source image matches the uploaded logo pixel-for-pixel.
- Existing header/footer wordmark data images: unchanged.
- Existing CSS: unchanged.
- HTML-relative asset references, PWA manifest icons and Windows tile icons: all local files exist.
- PNG dimensions/formats, ICO sizes, SVG XML, browser configuration XML and sitemap XML: passed.
- GitHub Pages branch-publishing `CNAME`: present and contains `azryon.com`.

## Not verified by this local build

- Live DNS/HTTP availability of `azryon.com` or the four subsidiary domains. Network access to those hosts was unavailable in the build environment. The subsidiary domains are included exactly as supplied by AZRYON.
- The deployed GitHub Pages site, Google Search Console ownership, Google Rich Results Test, Google's live URL Inspection, indexing, or Knowledge Panel display. These checks can only be completed after the package is uploaded and published.
- No structured-data markup can guarantee a Google Knowledge Panel. See Google's current Organization documentation: https://developers.google.com/search/docs/appearance/structured-data/organization


## WhatsApp preview deployment correction

- Added a root-level `og-image.png` copy (1200×630 PNG).
- Updated `og:image`, `og:image:secure_url`, and `twitter:image` to `https://azryon.com/og-image.png`.
- Retained `icons/azryon-social-preview.png` as a duplicate path for the icon asset collection.
- Repacked the ZIP with all site files at the archive root (no enclosing project directory), to reduce the chance of uploading the website one folder too deep.
- After deployment, verify both image URLs return HTTP 200 before testing WhatsApp again.
