"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const phoneNumber = "6281234567890";
const message = encodeURIComponent(
  "Assalamu'alaikum Kak, saya ingin bertanya tentang Kost Muslimah Baitul Utrujjah."
);
const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export default function WaButton() {
  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-shadow hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Hubungi via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <motion.span
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.a>
  );
}
