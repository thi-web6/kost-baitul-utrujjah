import type { MetadataRoute } from "next";
import { CITIES } from "@/lib/data";

const baseUrl = "https://kost-baitul-utrujjah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = CITIES.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityPages,
  ];
}
