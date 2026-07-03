import { SITE_URL, PHONE } from "@/lib/data";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Kost Muslimah Baitul Utrujjah",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    telephone: `+${PHONE}`,
    email: "info@baitulutrujjah.com",
    description:
      "Kost Muslimah dengan 3 cabang di Bekasi, Yogyakarta, dan Semarang.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Kost Muslimah Baitul Utrujjah",
    url: SITE_URL,
    inLanguage: "id",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
