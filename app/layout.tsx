import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WaButton from "@/components/wa-button";
import JsonLd from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kost Muslimah Baitul Utrujjah | Hunian Islami Nyaman",
    template: "%s | Kost Muslimah Baitul Utrujjah",
  },
  description:
    "Kost Muslimah Baitul Utrujjah, hunian kos aman dan nyaman untuk muslimah. Tersedia 3 cabang: Bekasi, Jogja, Semarang. Harga mulai Rp 500.000.",
  keywords: [
    "kost muslimah",
    "kost putri",
    "kost islami",
    "Baitul Utrujjah",
    "kost bekasi",
    "kost jogja",
    "kost semarang",
    "kost mahasiswi",
    "kost karyawati",
  ],
  authors: [{ name: "Baitul Utrujjah" }],
  creator: "Baitul Utrujjah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kost Muslimah Baitul Utrujjah",
    title: "Kost Muslimah Baitul Utrujjah | Hunian Islami Nyaman",
    description:
      "Kost Muslimah Baitul Utrujjah, hunian kos aman dan nyaman untuk muslimah. Tersedia 3 cabang: Bekasi, Jogja, Semarang.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kost Muslimah Baitul Utrujjah",
    description:
      "Hunian kos islami nyaman untuk muslimah. Cabang Bekasi, Jogja, Semarang.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#8FA87A" />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body className="flex min-h-full flex-col bg-warm-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WaButton />
        <JsonLd />
      </body>
    </html>
  );
}
