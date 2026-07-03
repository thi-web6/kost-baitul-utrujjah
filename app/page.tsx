import { CITIES } from "@/lib/data";
import Hero from "@/components/hero";
import MainLokasi from "@/components/main-lokasi";

export default function Home() {
  return (
    <>
      <Hero />
      <MainLokasi cities={CITIES} />
    </>
  );
}
