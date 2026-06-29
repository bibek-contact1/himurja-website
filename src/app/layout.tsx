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
    "skincare",
    "botanical oil",
    "natural skincare",
    "Himalayan skincare",
    "overnight recovery",
    "organic face oil",
    "Nepal skincare",
    "clean beauty",
    "minimalist skincare",
  ],
  openGraph: {
    title: "HIMURJA | Premium Transparent Botanical Recovery Care",
    description:
      "Support your skin naturally with HIMURJA No. 01 – a premium overnight botanical recovery oil.",
    url: "https://himurja.com",
    siteName: "HIMURJA",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-full flex flex-col bg-white text-charcoal antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}