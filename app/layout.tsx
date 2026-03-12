import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: siteConfig.metadata.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.metadata.titleDefault,
    template: siteConfig.metadata.titleTemplate,
  },
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  robots: siteConfig.metadata.robots,
  openGraph: {
    type: 'website',
    locale: siteConfig.metadata.locale,
    url: siteConfig.company.url,
    siteName: siteConfig.metadata.siteName,
    title: siteConfig.metadata.titleDefault,
    description: siteConfig.metadata.ogDescription,
  },
  alternates: {
    canonical: siteConfig.company.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.company.name,
    "image": `${siteConfig.company.url}/logo.png`,
    "@id": siteConfig.company.url,
    "url": siteConfig.company.url,
    "telephone": `+${siteConfig.company.phone}`,
    "priceRange": siteConfig.company.priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.company.address.locality,
      "addressRegion": siteConfig.company.address.region,
      "addressCountry": siteConfig.company.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html lang="tr" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-900 bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
