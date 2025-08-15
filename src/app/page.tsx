import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Why from '@/components/Why';
import What from '@/components/What';
import Who from '@/components/Who';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Anthrapi - Creating Legacies | AI Services, Creative Services, Software Solutions',
  description:
    'Anthrapi delivers cutting-edge AI services, creative branding solutions, and custom software development. We build legacies through innovative technology and creative excellence.',
  keywords:
    'AI services, creative services, software solutions, branding, digital agency, custom development, machine learning, design, marketing',
  openGraph: {
    title:
      'Anthrapi - Creating Legacies | AI Services, Creative Services, Software Solutions',
    description:
      'Anthrapi delivers cutting-edge AI services, creative branding solutions, and custom software development. We build legacies through innovative technology and creative excellence.',
    url: 'https://anthrapi.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Anthrapi',
            url: 'https://anthrapi.com',
            description:
              'Anthrapi delivers cutting-edge AI services, creative branding solutions, and custom software development.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://anthrapi.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
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
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Anthrapi Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'AI Services',
                    description:
                      'Cutting-edge artificial intelligence solutions and machine learning services',
                    url: 'https://anthrapi.com/men-at-work',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Creative Services',
                    description:
                      'Branding, design, and creative marketing solutions',
                    url: 'https://anthrapi.com/men-at-work',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Software Solutions',
                    description:
                      'Custom software development and technical solutions',
                    url: 'https://anthrapi.com/men-at-work',
                  },
                },
              ],
            },
          }),
        }}
      />
      <section id="hero" className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <Hero />
        <div className="h-24 w-full md:h-32"></div>
        {/* <TrustedBy /> */}
      </section>

      <section id="who" className="flex min-h-screen flex-col justify-between">
        <Who />
      </section>

      <section id="why" className="flex min-h-screen flex-col justify-between">
        <Why />
      </section>

      <section id="what" className="flex min-h-screen flex-col justify-between">
        <What />
      </section>

      <Footer />
    </main>
  );
}
