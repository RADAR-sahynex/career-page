import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Careers at Sahynex",
  description: "Discover amazing career opportunities at Sahynex. Join our innovative team and build the future of technology together.",
  keywords: ["careers", "jobs", "sahynex", "technology", "innovation", "employment"],
  authors: [{ name: "Sahynex" }],
  creator: "Sahynex",
  publisher: "Sahynex",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Careers at Sahynex | Find Your Dream Job",
    description: "Discover amazing career opportunities at Sahynex. Join our innovative team and build the future of technology together.",
    siteName: "Sahynex Careers",
    images: [
      {
        url: "/sahynex_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Sahynex Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Sahynex | Find Your Dream Job",
    description: "Discover amazing career opportunities at Sahynex. Join our innovative team and build the future of technology together.",
    images: ["/sahynex_logo.jpeg"],
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
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
