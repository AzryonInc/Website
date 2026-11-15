# AZRYON package verification report

Local checks completed for this package:

- ZIP archive integrity: passed.
- Homepage: one embedded JSON-LD script; JSON parses successfully.
- Standalone `organization-schema.jsonld`: JSON parses successfully and exactly matches the embedded graph.
- Entity graph: 8 unique nodes (parent Organization, founder Person, four subsidiary Organizations, WebSite, WebPage).
- Founder `worksFor` and parent/subsidiary links: internally consistent.
- Logo image dimensions: verified from the bundled file as 2427 × 2427; schema dimensions match.
- Social preview image dimensions: verified as 1200 × 630; Open Graph metadata references this image and matches its dimensions.
- Local favicon, Apple touch icon, PWA icon and social image files referenced by the package: present.
- Existing website layout and CSS: retained; changes were limited to schema, metadata asset references/descriptions, manifest description, and documentation.

Not verified in this local build:

- Live DNS/HTTP accessibility of `azryon.com` or the subsidiary/founder domains.
- Whether the supplied legal name, mailing country, email address, founder details, and profile URLs are externally verified; these are included as supplied by the site owner.
- Google's live Rich Results Test, Search Console URL Inspection, indexing, or Knowledge Panel display. These require the site to be published.
- A Knowledge Panel or specific search appearance is not guaranteed by structured data.
