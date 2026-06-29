import { MoonStar, MapPin, Phone, Mail } from "lucide-react";

const branches = [
  {
    city: "Bekasi",
    address: "Taman Harapan Baru, Medan Satria, Bekasi",
  },
  {
    city: "Yogyakarta",
    address: "Jl. Popongan 3, Sinduadi, Mlati, Sleman",
  },
  {
    city: "Semarang",
    address: "Perum Griya Borobudur Meteseh Blok F",
  },
];

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Lokasi", href: "#lokasi" },

  { label: "Gallery", href: "#gallery" },
  { label: "Harga", href: "#harga" },
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
                Tautan Cepat
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
                {branches.map((branch) => (
                  <div key={branch.city} className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-soft-pink-light" />
                    <span>
                      <strong className="text-warm-white/90">
                        {branch.city}
                      </strong>
                      : {branch.address}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <Phone className="h-4 w-4 shrink-0 text-soft-pink-light" />
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-warm-white"
                  >
                    0812-3456-7890
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
