"use client";

import { motion } from "motion/react";
import { Check, Sparkles, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Kamar Non-AC",
    price: "Rp 450.000",
    period: "/bulan",
    badge: "Ekonomis",
    popular: false,
    features: [
      "Kipas angin plafon",
      "Kamar mandi dalam",
      "WiFi gratis",
      "Listrik 1300 VA",
      "Lemari pakaian",
      "Spring bed nyaman",
    ],
  },
  {
    name: "Kamar AC",
    price: "Rp 650.000",
    period: "/bulan",
    badge: "Terpopuler",
    popular: true,
    features: [
      "AC dingin + kipas",
      "Kamar mandi dalam",
      "WiFi gratis",
      "Listrik 1300 VA",
      "Lemari pakaian",
      "Spring bed nyaman",
      "TV Digital",
    ],
  },
  {
    name: "Kamar AC VIP",
    price: "Rp 850.000",
    period: "/bulan",
    badge: "Premium",
    popular: false,
    features: [
      "AC dingin + kipas",
      "Kamar mandi dalam",
      "WiFi prioritas",
      "Listrik 2200 VA",
      "Lemari + kulkas",
      "Spring bed + TV",
      "Air panas",
      "Akses parkir luas",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
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

export default function Harga() {
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
          <Badge className="mb-4 border-soft-pink/30 bg-soft-pink/20 px-4 py-1.5 text-sm text-rose-700">
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Promo Bulan Ini
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Harga & Promo
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Harga terjangkau dengan fasilitas terbaik. Diskon khusus untuk
            mahasiswi dan pembayaran tahunan.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={`relative h-full border-2 transition-shadow duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-sage bg-warm-white shadow-lg"
                    : "border-transparent bg-cream/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-sage px-4 py-1 text-xs text-white shadow-md">
                      Paling Laris
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4 pt-6 text-center">
                  <CardTitle className="font-heading text-xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {plan.badge}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="font-heading text-4xl font-bold text-sage-dark">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.popular
                              ? "bg-sage/15 text-sage-dark"
                              : "bg-sage/10 text-sage-dark"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Kak%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
                      plan.popular
                        ? "bg-sage text-white shadow-md hover:bg-sage-dark"
                        : "border border-sage/30 bg-transparent text-sage-dark hover:bg-sage/10"
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    Pesan Sekarang
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-sage/30 bg-cream/50 p-6 text-center md:p-8"
        >
          <Sparkles className="mx-auto mb-3 h-6 w-6 text-sage" />
          <h3 className="font-heading text-lg font-semibold">
            Promo Spesial Bulan Ini
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Gratis biaya listrik 3 bulan pertama untuk penyewa baru.
            Diskon 10% untuk pembayaran 6 bulan di muka.
            Free tour kost sebelum booking!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
