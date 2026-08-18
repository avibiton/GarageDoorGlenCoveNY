import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Garage Door Repair Glen Cove NY | Same Day Service | 516-629-7162";
const description =
  "Professional garage door repair in Glen Cove NY 11542 and Glen Head 11545. Spring repair, opener installation, emergency service, and new door installation. Free estimate. Call 516-629-7162.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | Garage Doors Glen Cove NY`,
  },
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
    "@id": `${BUSINESS.siteUrl}/#business`,
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
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      ...(area.zip ? { postalCode: area.zip } : {}),
    })),
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
