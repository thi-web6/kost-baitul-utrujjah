"use client";

import { motion } from "motion/react";
import { MapPin, Building2, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const branches = [
  {
    city: "Bekasi",
    badge: "Jabodetabek",
    address:
      "Taman Harapan Baru, Medan Satria, Bekasi",
    mapUrl:
      "https://maps.google.com/maps?q=Taman+Harapan+Baru+Medan+Satria+Bekasi&output=embed",
    mapsLink:
      "https://maps.google.com/maps?q=Taman+Harapan+Baru+Medan+Satria+Bekasi",
    description:
      "Lingkungan asri dekat dengan pusat perbelanjaan, kampus, dan akses tol.",
  },
  {
    city: "Yogyakarta",
    badge: "Jogja",
    address:
      "Jl. Popongan 3, Popongan, Sinduadi, Mlati, Sleman, Yogyakarta",
    mapUrl:
      "https://maps.google.com/maps?q=Jl+Popongan+3+Sinduadi+Mlati+Sleman&output=embed",
    mapsLink:
      "https://maps.google.com/maps?q=Jl+Popongan+3+Sinduadi+Mlati+Sleman",
    description:
      "Dekat dengan kawasan UGM, UNY, dan pusat kota Jogja. Suasana tenang dan nyaman.",
  },
  {
    city: "Semarang",
    badge: "Jawa Tengah",
    address:
      "Perum Griya Borobudur Meteseh Blok F, Semarang",
    mapUrl:
      "https://maps.google.com/maps?q=Griya+Borobudur+Meteseh+Semarang&output=embed",
    mapsLink:
      "https://maps.google.com/maps?q=Griya+Borobudur+Meteseh+Semarang",
    description:
      "Kawasan perumahan yang tenang, dekat dengan kampus dan pusat bisnis Semarang.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Lokasi() {
  return (
    <section id="lokasi" className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <Badge className="mb-4 border-sage/30 bg-sage/10 px-4 py-1.5 text-sm text-sage-dark">
            <MapPin className="mr-1.5 h-3.5 w-3.5" />
            3 Cabang Kota
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Lokasi Strategis
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tersedia di tiga kota besar dengan akses mudah ke kampus, kantor,
            dan fasilitas umum.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {branches.map((branch) => (
            <motion.div key={branch.city} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-none bg-warm-white shadow-md transition-shadow duration-300 hover:shadow-xl">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    src={branch.mapUrl}
                    title={`Map ${branch.city}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.3) sepia(0.2)" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading text-xl">
                      {branch.city}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="border-sage/30 text-xs text-sage-dark"
                    >
                      {branch.badge}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-start gap-1.5 pt-1">
                    <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage" />
                    <span>{branch.address}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {branch.description}
                  </p>
                  <a
                    href={branch.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark transition-colors hover:text-sage"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Buka di Google Maps
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
