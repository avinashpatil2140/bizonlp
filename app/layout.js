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

export const metadata = {
  title: "E-Commerce Website Development Pune | Online Store Solutions | BizOn Digital",
  description: "BizOn Digital - Expert e-commerce website development Pune. Build high-converting online stores with secure payments, SEO optimization, and sales-focused design. Free consultation. 4.9★ from 120+ stores.",
  keywords: "ecommerce website development Pune, online store development Pune, e-commerce website design, payment gateway integration, e-commerce SEO Pune",
  viewport: "width=device-width, initial-scale=1",
  authors: [{ name: "BizOn Digital", url: "https://bizondigital.com" }],
  openGraph: {
    title: "E-Commerce Website Development Pune | BizOn Digital",
    description: "Expert e-commerce store development and online sales optimization in Pune",
    url: "https://bizondigital.com",
    siteName: "BizOn Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F97316" />
        <link rel="icon" href="/favicon.ico" />
        {/* Prevent MetaMask and other extension errors */}
        <script>
          {`if (typeof window !== 'undefined' && !window.ethereum) { window.ethereum = undefined; }`}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
