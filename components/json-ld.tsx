export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Kost Muslimah Baitul Utrujjah",
    description:
      "Hunian kos muslimah nyaman, aman, dan islami. Tersedia 3 cabang: Bekasi, Jogja, Semarang.",
    url: "https://kost-baitul-utrujjah.vercel.app",
    brand: {
      "@type": "Brand",
      name: "Baitul Utrujjah",
    },
    offers: {
      "@type": "Offer",
      price: "500000",
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kost Muslimah Baitul Utrujjah",
    image:
      "https://placehold.co/800x600/FFF8F0/8FA87A?text=Baitul+Utrujjah",
    telephone: "+6281234567890",
    email: "info@baitulutrujjah.com",
    url: "https://kost-baitul-utrujjah.vercel.app",
    description:
      "Kost Muslimah dengan 3 cabang di Bekasi, Yogyakarta, dan Semarang.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bekasi",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Taman Harapan Baru, Medan Satria",
          addressLocality: "Bekasi",
          addressCountry: "ID",
        },
      },
      {
        "@type": "City",
        name: "Yogyakarta",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Popongan 3, Sinduadi, Mlati",
          addressLocality: "Sleman",
          addressRegion: "Yogyakarta",
          addressCountry: "ID",
        },
      },
      {
        "@type": "City",
        name: "Semarang",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Perum Griya Borobudur Meteseh Blok F",
          addressLocality: "Semarang",
          addressCountry: "ID",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
}
