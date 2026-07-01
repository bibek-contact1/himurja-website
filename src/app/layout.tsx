import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HIMURJA | Premium Transparent Botanical Recovery Care",
    template: "%s | HIMURJA",
  },
  description:
    "Premium overnight botanical recovery oil. Simplify your skincare with transparent, natural ingredients from the Himalayas. Support your skin. Let it recover. Prepare tonight. Face tomorrow.",
  keywords: [
    "HIMURJA",
    "skincare",
    "botanical oil",
    "natural skincare",
    "Himalayan skincare",
    "overnight recovery",
    "organic face oil",
    "Nepal skincare",
    "clean beauty",
    "minimalist skincare",
    "HIMURJA No. 01",
    "recovery oil",
  ],
  openGraph: {
    title: "HIMURJA | Premium Transparent Botanical Recovery Care",
    description:
      "Support your skin naturally with HIMURJA No. 01 – a premium overnight botanical recovery oil.",
    url: "https://himurja.com",
    siteName: "HIMURJA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://himurja.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIMURJA Premium Botanical Recovery Oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIMURJA | Premium Transparent Botanical Recovery Care",
    description:
      "Support your skin naturally with HIMURJA No. 01 – a premium overnight botanical recovery oil.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://himurja.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HIMURJA",
              url: "https://himurja.com",
              logo: "https://himurja.com/logo.png",
              description:
                "Premium overnight botanical recovery oil with transparent ingredients from the Himalayas",
              sameAs: [
                "https://www.facebook.com/himurja",
                "https://www.instagram.com/himurja",
                "https://www.twitter.com/himurja",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                url: "https://himurja.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "HIMURJA",
              image: "https://himurja.com/hero-himurja-product.jpg",
              description:
                "Premium overnight botanical recovery oil for skincare",
              url: "https://himurja.com",
              telephone: "",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NP",
              },
              areaServed: "Worldwide",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
