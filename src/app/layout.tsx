import type { Metadata } from 'next';
import './globals.css';
import VideoBackground from '@/components/VideoBackground';

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
      <body className="flex min-h-screen flex-col antialiased">
        <VideoBackground />
        {children}
      </body>
    </html>
  );
}
