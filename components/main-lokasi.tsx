"use client";

import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CityData } from "@/lib/data";

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

export default function MainLokasi({ cities }: { cities: CityData[] }) {
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
            Pilih Cabang Kost
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tersedia di tiga kota besar. Klik untuk lihat detail lengkap
            masing-masing cabang.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {cities.map((city) => (
            <motion.div key={city.slug} variants={itemVariants}>
              <a href={`/${city.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden border-none bg-warm-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-video w-full overflow-hidden">
                    <iframe
                      src={city.mapEmbedUrl}
                      title={`Map ${city.name}`}
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
                        {city.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-sage/30 text-xs text-sage-dark"
                      >
                        {city.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {city.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-dark transition-colors group-hover:text-sage">
                      Lihat Detail {city.name}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
