import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eightytwo.studio'),

  title: "82 Studio",
  description: "Crafting digital experiences that leave lasting impressions.",
  icons: {
    icon: '/icon-logo.svg',
  },

  openGraph: {
    title: "Eighty Two Studio",
    description: "Crafting digital experiences that leave lasting impressions.",
    images: [
      {
        url: '/screenshot.png?v=1',
        width: 1200,
        height: 630,
        alt: 'Screenshot of 82 Studio website',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Eighty Two Studio",
    description: "Crafting digital experiences that leave lasting impressions.",
    images: ['/screenshot.png?v=1'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
