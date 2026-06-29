"use client";

import { motion } from "motion/react";
import {
  Snowflake,
  Wind,
  Wifi,
  Shield,
  Droplets,
  ArmchairIcon as Chair,
  Bed,
  Refrigerator,
  Tv,
  Bath,
} from "lucide-react";

const facilities = [
  { icon: Snowflake, label: "AC Dingin", category: "ac" },
  { icon: Wind, label: "Kipas Angin", category: "non-ac" },
  { icon: Wifi, label: "WiFi Cepat", category: "all" },
  { icon: Shield, label: "Keamanan 24 Jam", category: "all" },
  { icon: Bed, label: "Spring Bed", category: "all" },
  { icon: Chair, label: "Meja & Kursi Belajar", category: "all" },
  { icon: Tv, label: "TV Digital", category: "all" },
  { icon: Refrigerator, label: "Kulkas", category: "all" },
  { icon: Droplets, label: "Air Panas", category: "all" },
  { icon: Bath, label: "Kamar Mandi Dalam", category: "all" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Fasilitas() {
  return (
    <section id="fasilitas" className="bg-warm-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-sage/10 px-4 py-1.5 text-sm font-medium text-sage-dark">
            Fasilitas Lengkap
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Fasilitas Kamar
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Kami menyediakan pilihan kamar AC dan Non-AC dengan fasilitas
            lengkap untuk kenyamanan Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
        >
          {facilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-cream/60 p-6 text-center transition-all duration-300 hover:bg-sage hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/10 text-sage transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium leading-tight md:text-sm">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-sage/20 bg-cream/40 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage text-white">
                <Snowflake className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">
                Kamar AC
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                AC dingin + kipas angin
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                Kamar mandi dalam
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                Listrik 1300 VA
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-sage" />
                Lemari + spring bed
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-soft-pink/20 bg-soft-pink-light/30 p-6 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-soft-pink text-foreground">
                <Wind className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-semibold">
                Kamar Non-AC
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-soft-pink" />
                Kipas angin plafon
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-soft-pink" />
                Kamar mandi dalam
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-soft-pink" />
                Listrik 1300 VA
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-soft-pink" />
                Lemari + spring bed
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
