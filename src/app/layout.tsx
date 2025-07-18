import type { Metadata } from 'next';
import { Nunito_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Background from '@/components/Background';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'latin-ext'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Anthrapi - Creating Legacies',
  description: "We don't just create brands; we build legacies",
  metadataBase: new URL('https://anthrapi.com'),
  openGraph: {
    title: 'Anthrapi - Creating Legacies',
    description: "We don't just create brands; we build legacies",
    url: 'https://anthrapi.com',
    siteName: 'Anthrapi',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Anthrapi Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthrapi - Creating Legacies',
    description: "We don't just create brands; we build legacies",
    site: '@anthrapi',
    creator: '@anthrapi',
    images: ['/logo.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
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
        <link rel="canonical" href="https://anthrapi.com/" />
      </head>
      <body
        className={`relative ${nunitoSans.variable} ${geistMono.variable} antialiased`}
      >
        <Background />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
