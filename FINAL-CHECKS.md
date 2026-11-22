# AZRYON package verification report

## Local checks performed for this package

- ZIP integrity checked after packaging.
- Original supplied logo files and existing website assets retained from the previously prepared logo/SEO package.
- Homepage embeds exactly one JSON-LD script in the `<head>`.
- Embedded JSON-LD and `organization-schema.jsonld` parse as JSON and contain the same graph.
- Founder Person node is connected to the parent Organization through `founder` and `worksFor` references.
- Four subsidiary Organization nodes reference the parent through `parentOrganization`.
- Schema URLs use the public Azryon and Hirun Heshatha domains supplied by the owner.
- The Organization logo points to `/azryon-logo.png` (1254 × 1254 PNG in this package).
- The package retains the existing favicon, PWA, Open Graph, canonical, robots, sitemap and CNAME assets.

## Accuracy notes

- `legalName` is omitted because a registered legal name (for example, an LLC/Inc. suffix) has not been confirmed.
- Only the country code `US` is included in the postal address because no street, city, state or postal code was supplied.
- No telephone number or unverified service-area claim is included.
- Founder biography claims beyond the supplied name, profile URL and Founder & CEO title are omitted.

## Not verified by local package checks

- Live deployment status and HTTP responses after the user uploads this package.
- Whether all social profile URLs resolve to the intended accounts.
- Googlebot access to image assets after deployment, Google Search Console live validation, or the logo/favicon currently displayed in Search.
- Google controls recrawl timing and does not guarantee a particular search appearance.
