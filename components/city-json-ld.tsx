import type { CityData } from "@/lib/data";
import { SITE_URL, PHONE } from "@/lib/data";

export default function CityJsonLd({ city }: { city: CityData }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/${city.slug}/#branch`,
    name: `Kost Muslimah Baitul Utrujjah ${city.name}`,
    description: city.description,
    url: `${SITE_URL}/${city.slug}`,
    telephone: `+${PHONE}`,
    image: city.gallery[0]?.src,
    priceRange: `Rp ${city.price.toLocaleString("id-ID")}`,
    parentOrganization: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: city.address,
      addressLocality: city.name,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    offers: {
      "@type": "Offer",
      price: city.price.toString(),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/${city.slug}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Kost ${city.name}`,
        item: `${SITE_URL}/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
