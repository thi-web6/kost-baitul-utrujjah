import type { CityData } from "@/lib/data";
import { PHONE } from "@/lib/data";

export default function CityJsonLd({ city }: { city: CityData }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Kost Muslimah Baitul Utrujjah ${city.name}`,
    description: `Kost Muslimah Baitul Utrujjah cabang ${city.name}. ${city.address}. ${city.description}`,
    url: `https://kost-baitul-utrujjah.vercel.app/${city.slug}`,
    telephone: `+${PHONE}`,
    email: "info@baitulutrujjah.com",
    image: city.gallery[0]?.src,
    address: {
      "@type": "PostalAddress",
      streetAddress: city.address,
      addressLocality: city.name,
      addressCountry: "ID",
    },
    offers: {
      "@type": "Offer",
      price: city.price.toString(),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c"),
      }}
    />
  );
}
