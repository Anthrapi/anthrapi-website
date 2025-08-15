import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import VideoBackground from '@/components/VideoBackground';

export const metadata: Metadata = {
  title: 'Anthrapi - Creating Legacies',
  description: "We don't just create brands; we build legacies",
  keywords:
    'branding, creative services, AI services, software solutions, digital agency, marketing, design, development',
  authors: [{ name: 'Anthrapi Team' }],
  creator: 'Anthrapi',
  publisher: 'Anthrapi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  verification: {
    google: '03uN74BReFe9kqhNx6f89dEoOk_7MnpYeQ1_ZL9_-mU',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Anthrapi',
              url: 'https://anthrapi.com',
              logo: 'https://anthrapi.com/logo.webp',
              description: "We don't just create brands; we build legacies",
              sameAs: ['https://twitter.com/anthrapi'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <VideoBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
