import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/lib/config/site";
import GoogleTracking from "@/app/components/analytics/GoogleTracking";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: "Philadelphia Plumbing Services",
    template: "%s | Philadelphia Plumbing Services",
  },

  description:
    "Professional residential and commercial plumbing services throughout Philadelphia, including drain cleaning, water heaters, water service replacement, leak repairs, and plumbing installations.",

  applicationName: "Philadelphia Plumbing Services",

  keywords: [
    "Philadelphia plumber",
    "Philadelphia master plumber",
    "plumbing services Philadelphia",
    "drain cleaning Philadelphia",
    "water heater repair Philadelphia",
    "water service replacement Philadelphia",
    "commercial plumber Philadelphia",
    "residential plumber Philadelphia",
  ],

  category: "Plumbing",

  // Shareable previews, while search-engine indexing is reserved for production.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description:
      "Professional residential and commercial plumbing services throughout Philadelphia.",
    images: [{ url: "/images/og-image.png", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },

  robots: {
    index: publicProduction,
    follow: publicProduction,
    googleBot: {
      index: publicProduction,
      follow: publicProduction,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GoogleTracking />
        {children}
      </body>
    </html>
  );
}
