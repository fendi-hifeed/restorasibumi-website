import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Restorasi Bumi | Membangun Masa Depan yang Lebih Hijau",
    template: "%s | Restorasi Bumi",
  },
  description: "Yayasan Restorasi Bumi berdedikasi untuk pemulihan ekosistem, pemberdayaan masyarakat, dan pembangunan masa depan yang berkelanjutan melalui program ReGen Earth, ReGen Humanity, dan ReGen Future.",
  keywords: ["Restorasi Bumi", "Yayasan Lingkungan", "Konservasi Alam", "ReGen Earth", "ReGen Humanity", "ReGen Future", "Donasi Lingkungan", "Pemberdayaan Masyarakat", "Indonesia Hijau"],
  authors: [{ name: "Restorasi Bumi Team" }],
  creator: "Restorasi Bumi",
  publisher: "Yayasan Restorasi Bumi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.restorasibumi.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Restorasi Bumi | Membangun Masa Depan yang Lebih Hijau",
    description: "Bergabunglah bersama kami dalam misi memulihkan bumi dan memberdayakan manusia.",
    url: "https://www.restorasibumi.org",
    siteName: "Restorasi Bumi",
    images: [
      {
        url: "/og-image.jpg", // Assuming we will create or mapping to an existing image
        width: 1200,
        height: 630,
        alt: "Restorasi Bumi - ReGen Series",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restorasi Bumi",
    description: "Membangun Masa Depan yang Lebih Hijau melalui ReGen Earth, Humanity, dan Future.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Restorasi Bumi",
              "url": "https://www.restorasibumi.org",
              "logo": "https://www.restorasibumi.org/logo.png",
              "sameAs": [
                "https://www.instagram.com/restorasibumi",
                "https://www.linkedin.com/company/restorasibumi"
              ],
              "description": "Yayasan Restorasi Bumi berdedikasi untuk pemulihan ekosistem, pemberdayaan masyarakat, dan pembangunan masa depan yang berkelanjutan."
            }),
          }}
        />
      </body>
    </html>
  );
}
