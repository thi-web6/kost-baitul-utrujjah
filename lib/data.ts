export const PHONE = "6285813428529";
export const PHONE_DISPLAY = "0858-1342-8529";

export const WA_MESSAGE =
  "Assalamu'alaikum Kak, saya ingin bertanya tentang Kost Muslimah Baitul Utrujjah.";

export const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WA_MESSAGE)}`;

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface CityData {
  slug: string;
  name: string;
  badge: string;
  address: string;
  mapEmbedUrl: string;
  mapsLink: string;
  description: string;
  heroSubtitle: string;
  price: number;
  priceLabel: string;
  features: string[];
  gallery: GalleryImage[];
}

export const CITIES: CityData[] = [
  {
    slug: "kost-bekasi",
    name: "Bekasi",
    badge: "Jabodetabek",
    address:
      "Taman Harapan Baru Blok E1 No.41, Pejuang, Medan Satria, Kota Bekasi",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3807875298514!2d106.9914613!3d-6.1752919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f348899172f%3A0xc0eea761c8dce842!2sLBQ%20Ibadurrohman!5e0!3m2!1sid!2sid!4v1",
    mapsLink:
      "https://www.google.com/maps/place/LBQ+Ibadurrohman/@-6.1752919,106.99365,17z/data=!3m1!4b1!4m6!3m5!1s0x2e698f348899172f:0xc0eea761c8dce842!8m2!3d-6.1752919!4d106.99365!16s%2Fg%2F11zj4ltvcp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
    description:
      "Lingkungan asri di Taman Harapan Baru, dekat dengan pusat perbelanjaan, kampus, dan akses tol. Nyaman untuk aktivitas sehari-hari.",
    heroSubtitle: "Kost Muslimah di Bekasi",
    price: 500000,
    priceLabel: "/bulan",
    features: [
      "Free WiFi",
      "Free listrik",
      "Tempat tidur, kasur, & bantal",
      "Lemari plastik",
      "Kipas angin",
      "Parkiran luas",
    ],
    gallery: [
      {
        src: "https://placehold.co/800x600/FFF8F0/8FA87A?text=Bekasi+Tampak+Depan&font=playfair-display",
        alt: "Tampak depan Kost Baitul Utrujjah Bekasi",
        label: "Tampak Depan",
      },
      {
        src: "https://placehold.co/800x600/F5D6D0/6B805A?text=Bekasi+Kamar+AC&font=playfair-display",
        alt: "Kamar AC Bekasi",
        label: "Kamar AC",
      },
      {
        src: "https://placehold.co/800x600/FEFCF8/8FA87A?text=Bekasi+Ruang+Bersama&font=playfair-display",
        alt: "Ruang bersama Bekasi",
        label: "Ruang Bersama",
      },
      {
        src: "https://placehold.co/800x600/FDE8E3/6B805A?text=Bekasi+Kamar+Non-AC&font=playfair-display",
        alt: "Kamar Non-AC Bekasi",
        label: "Kamar Non-AC",
      },
      {
        src: "https://placehold.co/800x600/FFF8F0/8FA87A?text=Bekasi+Dapur&font=playfair-display",
        alt: "Dapur umum Bekasi",
        label: "Dapur Umum",
      },
      {
        src: "https://placehold.co/800x600/F5D6D0/6B805A?text=Bekasi+Tempat+Wudhu&font=playfair-display",
        alt: "Tempat wudhu Bekasi",
        label: "Tempat Wudhu",
      },
    ],
  },
  {
    slug: "kost-jogja",
    name: "Yogyakarta",
    badge: "Jogja",
    address: "Jl. Popongan 3, Sinduadi, Mlati, Sleman, Yogyakarta",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.135711804944!2d110.3645205!3d-7.7604138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a585a0751f857%3A0x20faad24a43247a2!2sBaitull%20Utrujjah!5e0!3m2!1sid!2sid!4v1",
    mapsLink:
      "https://www.google.com/maps/place/Baitull+Utrujjah/@-7.7604138,110.3667093,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a585a0751f857:0x20faad24a43247a2!8m2!3d-7.7604138!4d110.3667093!16s%2Fg%2F11f54zmtl_?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
    description:
      "Dekat dengan kawasan UGM, UNY, dan pusat kota Jogja. Suasana tenang dan nyaman untuk kost muslimah.",
    heroSubtitle: "Kost Muslimah di Yogyakarta",
    price: 500000,
    priceLabel: "/bulan",
    features: [
      "Kamar kosong (hanya kasur)",
      "Dapur & perlengkapan masak",
      "2 kamar mandi",
      "Mesin cuci & tempat jemuran",
      "Ruang utama luas",
      "Parkir motor",
      "Free WiFi",
      "Listrik iuran bersama",
    ],
    gallery: [
      {
        src: "https://placehold.co/800x600/FEFCF8/8FA87A?text=Jogja+Tampak+Depan&font=playfair-display",
        alt: "Tampak depan Kost Baitul Utrujjah Yogyakarta",
        label: "Tampak Depan",
      },
      {
        src: "https://placehold.co/800x600/FDE8E3/6B805A?text=Jogja+Kamar+AC&font=playfair-display",
        alt: "Kamar AC Yogyakarta",
        label: "Kamar AC",
      },
      {
        src: "https://placehold.co/800x600/FFF8F0/8FA87A?text=Jogja+Ruang+Bersama&font=playfair-display",
        alt: "Ruang bersama Yogyakarta",
        label: "Ruang Bersama",
      },
      {
        src: "https://placehold.co/800x600/F5D6D0/6B805A?text=Jogja+Kamar+Non-AC&font=playfair-display",
        alt: "Kamar Non-AC Yogyakarta",
        label: "Kamar Non-AC",
      },
      {
        src: "https://placehold.co/800x600/FEFCF8/8FA87A?text=Jogja+Dapur&font=playfair-display",
        alt: "Dapur umum Yogyakarta",
        label: "Dapur Umum",
      },
      {
        src: "https://placehold.co/800x600/FDE8E3/6B805A?text=Jogja+Tempat+Wudhu&font=playfair-display",
        alt: "Tempat wudhu Yogyakarta",
        label: "Tempat Wudhu",
      },
    ],
  },
  {
    slug: "kost-semarang",
    name: "Semarang",
    badge: "Jawa Tengah",
    address: "Perum Griya Borobudur Meteseh Blok F, Semarang",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d110.408045!3d-7.005145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56d94805257069ad!2sKost%20Muslimah%20Murah%2C%20Semarang!5e0!3m2!1sid!2sid!4v1",
    mapsLink:
      "https://www.google.com/maps/place/Kost+Muslimah+Murah,+Semarang/data=!4m2!3m1!1s0x0:0x56d94805257069ad?sa=X&ved=1t:2428&ictx=111",
    description:
      "Kawasan perumahan yang tenang di Meteseh, dekat dengan kampus dan pusat bisnis Semarang. Lingkungan Islami yang nyaman.",
    heroSubtitle: "Kost Muslimah di Semarang",
    price: 500000,
    priceLabel: "/bulan",
    features: [
      "3 kamar tidur",
      "Kasur & bantal",
      "1 kamar mandi",
      "Dapur",
      "Ruang utama luas",
    ],
    gallery: [
      {
        src: "https://placehold.co/800x600/F5D6D0/8FA87A?text=Semarang+Tampak+Depan&font=playfair-display",
        alt: "Tampak depan Kost Baitul Utrujjah Semarang",
        label: "Tampak Depan",
      },
      {
        src: "https://placehold.co/800x600/FFF8F0/6B805A?text=Semarang+Kamar+AC&font=playfair-display",
        alt: "Kamar AC Semarang",
        label: "Kamar AC",
      },
      {
        src: "https://placehold.co/800x600/FDE8E3/8FA87A?text=Semarang+Ruang+Bersama&font=playfair-display",
        alt: "Ruang bersama Semarang",
        label: "Ruang Bersama",
      },
      {
        src: "https://placehold.co/800x600/FEFCF8/6B805A?text=Semarang+Kamar+Non-AC&font=playfair-display",
        alt: "Kamar Non-AC Semarang",
        label: "Kamar Non-AC",
      },
      {
        src: "https://placehold.co/800x600/F5D6D0/8FA87A?text=Semarang+Dapur&font=playfair-display",
        alt: "Dapur umum Semarang",
        label: "Dapur Umum",
      },
      {
        src: "https://placehold.co/800x600/FFF8F0/6B805A?text=Semarang+Tempat+Wudhu&font=playfair-display",
        alt: "Tempat wudhu Semarang",
        label: "Tempat Wudhu",
      },
    ],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}


