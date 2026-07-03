import type { MetadataRoute } from "next";
import { CITIES, SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages = CITIES.map((city) => ({
    url: `${SITE_URL}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityPages,
  ];
}
