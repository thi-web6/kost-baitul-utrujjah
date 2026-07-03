"use client";

import { motion } from "motion/react";
import { Phone, Check } from "lucide-react";
import type { CityData } from "@/lib/data";
import { WA_URL } from "@/lib/data";

export default function CityHarga({ city }: { city: CityData }) {
  return (
    <section id="harga" className="bg-warm-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage-dark">
            Harga Terjangkau
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Harga {city.name}
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mx-auto max-w-md"
        >
          <div className="rounded-2xl border-2 border-sage bg-warm-white p-8 text-center shadow-lg">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Mulai dari
            </p>
            <p className="font-heading text-5xl font-bold tracking-tight text-sage-dark">
              Rp {city.price.toLocaleString("id-ID")}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{city.priceLabel}</p>

            <div className="my-8 border-t border-sage/10" />

            <ul className="space-y-3 text-left">
              {city.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/10 text-sage-dark">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-sage-dark"
            >
              <Phone className="h-4 w-4" />
              Tanya via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
