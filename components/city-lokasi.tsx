"use client";

import { motion } from "motion/react";
import { MapPin, Phone, ExternalLink, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CityData } from "@/lib/data";
import { WA_URL } from "@/lib/data";

export default function CityLokasi({ city }: { city: CityData }) {
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
            {city.name}
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Lokasi {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            {city.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <Card className="overflow-hidden border-none bg-warm-white shadow-md">
            <div className="aspect-video w-full">
              <iframe
                src={city.mapEmbedUrl}
                title={`Map ${city.name}`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) sepia(0.2)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                <div>
                  <p className="font-heading text-lg font-semibold">
                    {city.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {city.address}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={city.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sage/30 px-5 py-2.5 text-sm font-medium text-sage-dark transition-colors hover:bg-sage/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Buka di Google Maps
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-dark"
                >
                  <Phone className="h-4 w-4" />
                  Tanya via WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
