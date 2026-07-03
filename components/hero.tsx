"use client";

import { motion } from "motion/react";
import { ArrowDown, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sage via-sage-dark to-sage" />
      <div className="islamic-pattern absolute inset-0 opacity-20" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-soft-pink/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cream/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-4 inline-block rounded-full bg-warm-white/15 px-4 py-1.5 text-sm font-medium tracking-wide text-warm-white/90 backdrop-blur-sm">
            Kost Khusus Muslimah
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-warm-white md:text-6xl lg:text-7xl"
        >
          Kost Muslimah
          <br />
          <span className="text-soft-pink-light">Baitul Utrujjah</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-white/80 md:text-xl"
        >
          Cari kost muslimah yang nyaman dan aman? Baitul Utrujjah ada di
          Bekasi, Jogja, dan Semarang, siap jadi rumah kedua buat kamu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#lokasi"
            className="inline-flex h-12 items-center justify-center rounded-full bg-warm-white px-8 text-sm font-medium text-sage-dark shadow-lg transition-all hover:bg-cream"
          >
            Lihat Lokasi
          </a>
          <a
            href="#harga"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-warm-white/30 bg-transparent px-8 text-sm font-medium text-warm-white shadow-lg transition-all hover:bg-warm-white/10"
          >
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#lokasi"
            className="animate-bounce text-warm-white/60 transition-colors hover:text-warm-white"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
