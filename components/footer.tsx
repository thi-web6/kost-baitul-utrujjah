import { MoonStar, MapPin, Phone, Mail } from "lucide-react";
import { CITIES, PHONE_DISPLAY } from "@/lib/data";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Bekasi", href: "/kost-bekasi" },
  { label: "Yogyakarta", href: "/kost-jogja" },
  { label: "Semarang", href: "/kost-semarang" },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-sage-dark text-warm-white">
      <div className="islamic-pattern border-b border-warm-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <MoonStar className="h-5 w-5 text-soft-pink-light" />
                <span className="font-heading text-lg font-semibold">
                  Baitul Utrujjah
                </span>
              </div>
              <p className="text-sm leading-relaxed text-warm-white/70">
                Kost Muslimah yang menyediakan hunian nyaman, aman, dan islami
                untuk muslimah. Tersedia di 3 kota strategis.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-base font-semibold">
                Tersedia di
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-warm-white/70 transition-colors hover:text-warm-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-heading text-base font-semibold">
                Kontak & Lokasi
              </h3>
              <div className="space-y-4 text-sm text-warm-white/70">
                {CITIES.map((city) => (
                  <div key={city.slug} className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-soft-pink-light" />
                    <span>
                      <strong className="text-warm-white/90">
                        {city.name}
                      </strong>
                      : {city.address}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <Phone className="h-4 w-4 shrink-0 text-soft-pink-light" />
                  <a
                    href={`https://wa.me/${PHONE_DISPLAY.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-warm-white"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-soft-pink-light" />
                  <a
                    href="mailto:info@baitulutrujjah.com"
                    className="transition-colors hover:text-warm-white"
                  >
                    info@baitulutrujjah.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-xs text-warm-white/50">
          &copy; {new Date().getFullYear()} Kost Muslimah Baitul Utrujjah. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
