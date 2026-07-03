import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, CITIES } from "@/lib/data";
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

  const title = `Kost Muslimah Baitul Utrujjah ${data.name} | Hunian Islami Nyaman`;
  const description = `Kost Muslimah Baitul Utrujjah cabang ${data.name} — ${data.address}. ${data.description} Harga mulai Rp ${data.price.toLocaleString("id-ID")}/bulan.`;

  return {
    title,
    description,
    alternates: { canonical: `https://kost-baitul-utrujjah.vercel.app/${data.slug}` },
    openGraph: {
      title: `Kost Muslimah Baitul Utrujjah ${data.name}`,
      description,
      url: `https://kost-baitul-utrujjah.vercel.app/${data.slug}`,
      locale: "id_ID",
      siteName: "Kost Muslimah Baitul Utrujjah",
    },
    twitter: {
      card: "summary_large_image",
      title: `Kost Muslimah Baitul Utrujjah ${data.name}`,
      description,
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
