import type { Metadata } from 'next';
import { Fraunces, Source_Serif_4, Courgette } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { restaurant } from '@/data/restaurant';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const body = Source_Serif_4({ subsets: ['latin'], variable: '--font-body' });
const script = Courgette({ subsets: ['latin'], weight: '400', variable: '--font-script' });

export const metadata: Metadata = {
  metadataBase: new URL('https://elmariachiprattville.com'),
  title: {
    default: 'El Mariachi — Family Owned Mexican Restaurant in Prattville, AL',
    template: '%s · El Mariachi Prattville',
  },
  description: restaurant.description,
  openGraph: {
    title: 'El Mariachi · Prattville, AL',
    description: restaurant.description,
    images: ['/images/cover-art.webp'],
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'El Mariachi',
  description: restaurant.description,
  telephone: restaurant.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1675 Hwy 31 N',
    addressLocality: 'Prattville',
    addressRegion: 'AL',
    postalCode: '36067',
    addressCountry: 'US',
  },
  servesCuisine: 'Mexican',
  priceRange: '$$',
  openingHoursSpecification: restaurant.hours
    .filter(h => !h.closed)
    .map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: '11:00',
      closes: h.day === 'Monday' ? '20:00' : '21:00',
    })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
