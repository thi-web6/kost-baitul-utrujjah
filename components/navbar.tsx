"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MoonStar } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Bekasi", href: "/kost-bekasi" },
  { label: "Jogja", href: "/kost-jogja" },
  { label: "Semarang", href: "/kost-semarang" },
  { label: "Kontak", href: "/#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <MoonStar className="h-5 w-5 text-sage" />
          <span
            className={`font-heading text-lg font-semibold tracking-tight ${
              scrolled ? "text-foreground" : "text-warm-white"
            }`}
          >
            Baitul Utrujjah
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-sage/10 ${
                  scrolled
                    ? "text-foreground/80 hover:text-sage-dark"
                    : "text-warm-white/90 hover:text-warm-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                scrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-warm-white hover:bg-warm-white/10"
              }`}
            >
              <Menu className="h-5 w-5" />
            </div>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-warm-white p-6">
            <div className="mb-8 mt-8 flex items-center gap-2">
              <MoonStar className="h-5 w-5 text-sage" />
              <span className="font-heading text-lg font-semibold">
                Baitul Utrujjah
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-foreground/70 transition-colors hover:bg-sage/10 hover:text-sage-dark"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
