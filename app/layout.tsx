import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AL BAHTH Electromechanical Equipment Installation & Maintenance LLC",
  description:
    "Professional electromechanical installation and maintenance services in Dubai, UAE. Reliable electrical, HVAC, mechanical, and facility maintenance solutions.",
  keywords: [
    "AL BAHTH",
    "electromechanical services Dubai",
    "electrical installation UAE",
    "HVAC maintenance Dubai",
    "facility maintenance UAE",
    "mechanical works Dubai"
  ],
  metadataBase: new URL("https://albahth.ae"),
  openGraph: {
    title: "AL BAHTH Electromechanical Equipment Installation & Maintenance LLC",
    description:
      "Reliable electrical, HVAC, mechanical, and facility maintenance solutions in Dubai, UAE.",
    type: "website",
    locale: "en_AE"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: company.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gala Building, 3rd Floor, Muhaisnah 4, Al Qusais",
                addressLocality: "Dubai",
                addressCountry: "AE"
              },
              areaServed: "United Arab Emirates",
              email: company.email,
              telephone: company.phone,
              serviceType: "Electromechanical installation and maintenance"
            })
          }}
        />
      </body>
    </html>
  );
}
