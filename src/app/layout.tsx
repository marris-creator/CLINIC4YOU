import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CLINIC } from "@/lib/data";

const baseUrl = "https://clinic4u.ie";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${CLINIC.name} — Dublin Dental & Beauty Clinic`,
    template: `%s | ${CLINIC.name} Dublin`,
  },
  description:
    "Clinic4U — Dublin's premier dental and aesthetic clinic in Phibsborough, D7. Specialist-led dental implants, orthodontics, teeth whitening, lip fillers, anti-wrinkle and Profhilo. Open 6 days a week.",
  keywords: [
    "dentist dublin",
    "dental clinic dublin 7",
    "emergency dentist dublin",
    "dental implants dublin",
    "orthodontics dublin",
    "teeth whitening dublin",
    "lip fillers dublin",
    "anti wrinkle injections dublin",
    "profhilo dublin",
    "clinic4u",
    "phibsborough dentist",
  ],
  openGraph: {
    title: `${CLINIC.name} — Dublin Dental & Beauty Clinic`,
    description:
      "Specialist-led dental and aesthetic care in the heart of Dublin 7. Walk-in welcome, open late 6 days a week.",
    url: baseUrl,
    siteName: CLINIC.name,
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC.name} — Dublin Dental & Beauty Clinic`,
    description:
      "Specialist-led dental and aesthetic care in the heart of Dublin 7.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#1ea7b5",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name: CLINIC.name,
    description: CLINIC.description,
    url: baseUrl,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.area,
      addressRegion: "Dublin",
      postalCode: CLINIC.address.postcode,
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3637,
      longitude: -6.2779,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC.rating,
      reviewCount: CLINIC.reviewCount,
    },
    priceRange: "\u20ac\u20ac",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Humm Finance",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
