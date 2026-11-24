import type { Metadata, Viewport } from "next";
import { Archivo, Gloock } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import { hours, shop } from "@/lib/shop";
import "./globals.css";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(shop.siteUrl),
  title: {
    default: "Del Mar Barber Shop | Haircuts, Fades & Shaves in Laredo, TX",
    template: "%s | Del Mar Barber Shop",
  },
  description:
    "Barbershop on E Del Mar Blvd in North Laredo. Men’s haircuts, fades, beard trims, straight-razor shaves and kids’ cuts. Book online or call 956-602-0074.",
  // Preview images come from app/opengraph-image.png and app/twitter-image.png.
  openGraph: {
    title: "Del Mar Barber Shop | Laredo, TX",
    description: "Haircuts, fades and straight-razor shaves in North Laredo. Book online or call 956-602-0074.",
    url: "/",
    siteName: "Del Mar Barber Shop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Del Mar Barber Shop | Laredo, TX",
    description: "Haircuts, fades and straight-razor shaves in North Laredo. Book online or call 956-602-0074.",
  },
};

export const viewport: Viewport = {
  themeColor: "#232122",
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: shop.name,
  image: `${shop.siteUrl}/images/storefront.jpg`,
  telephone: "+1-956-602-0074",
  email: shop.email,
  priceRange: "$$",
  url: shop.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1713 E Del Mar Blvd, Suite 3",
    addressLocality: "Laredo",
    addressRegion: "TX",
    postalCode: "78041",
    addressCountry: "US",
  },
  openingHoursSpecification: hours
    .map((h, i) =>
      h.open ? { "@type": "OpeningHoursSpecification", dayOfWeek: days[i], opens: h.open, closes: h.close } : null,
    )
    .filter(Boolean),
  sameAs: [shop.instagram, shop.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gloock.variable} ${archivo.variable} antialiased`}>
      <body className="min-h-dvh">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
