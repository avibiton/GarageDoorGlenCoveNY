import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Garage Door Repair Glen Cove NY | Same Day Service | 516-629-7162";
const description =
  "Professional garage door repair in Glen Cove, NY. Spring repair, opener installation, emergency service, and new door installation. Call 516-629-7162 for same-day service.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BUSINESS.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BUSINESS.siteUrl,
    title,
    description,
    siteName: BUSINESS.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    description,
    serviceType: [
      "Garage Door Repair",
      "Garage Door Spring Repair",
      "Garage Door Opener Installation",
      "Garage Door Installation",
      "Emergency Garage Door Service",
    ],
    areaServed: {
      "@type": "Place",
      name: "Glen Cove, NY",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
