import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, CITIES, SITE_URL } from "@/lib/data";
import CityHero from "@/components/city-hero";
import CityGallery from "@/components/city-gallery";
import CityHarga from "@/components/city-harga";
import CityLokasi from "@/components/city-lokasi";
import CityJsonLd from "@/components/city-json-ld";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};

  const canonical = `${SITE_URL}/${data.slug}`;
  const siteName = "Kost Muslimah Baitul Utrujjah";
  const title = `Kost Muslimah Baitul Utrujjah ${data.name} | ${data.address}`;
  const description = `Kost Muslimah Baitul Utrujjah cabang ${data.name}. ${data.description} Harga mulai Rp ${data.price.toLocaleString("id-ID")}/bulan. WA ${data.name}: ${SITE_URL}/${data.slug}`;
  const ogImage = data.gallery[0]?.src;

  return {
    title,
    description,
    keywords: data.keywords,
    alternates: { canonical },
    openGraph: {
      title: `${siteName} ${data.name}`,
      description,
      url: canonical,
      siteName,
      locale: "id_ID",
      type: "website",
      images: ogImage
        ? [{ url: ogImage, width: 800, height: 600, alt: `Kost Muslimah Baitul Utrujjah ${data.name}` }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} ${data.name}`,
      description,
      images: ogImage ? [ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  return (
    <>
      <CityJsonLd city={data} />
      <CityHero city={data} />
      <CityGallery city={data} />
      <CityHarga city={data} />
      <CityLokasi city={data} />
    </>
  );
}
