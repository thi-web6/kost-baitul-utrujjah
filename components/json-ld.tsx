import { PHONE } from "@/lib/data";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kost Muslimah Baitul Utrujjah",
    url: "https://kost-baitul-utrujjah.vercel.app",
    logo: "https://placehold.co/800x600/FFF8F0/8FA87A?text=Baitul+Utrujjah",
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
    name: "Kost Muslimah Baitul Utrujjah",
    url: "https://kost-baitul-utrujjah.vercel.app",
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
