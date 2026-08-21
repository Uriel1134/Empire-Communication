import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Empire Communications — Agence Digitale & Marketing | Libreville · Cotonou',
    template: '%s | Empire Communications',
  },
  description:
    "Empire Communications, agence de communication digitale et marketing implantée au Gabon et au Bénin. Community Management, Graphisme, Vidéo, Développement Web & Marketing Stratégique. Libreville (Gabon) et Cotonou (Bénin).",
  keywords: [
    'agence communication digitale',
    'marketing digital Gabon',
    'marketing digital Bénin',
    'community management Libreville',
    'graphisme Cotonou',
    'formation marketing',
    'Empire Communications',
  ],
  authors: [{ name: 'Empire Communications' }],
  creator: 'Empire Communications',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Empire Communications',
    title: 'Empire Communications — Stratégie | Innovation | Croissance',
    description: "Agence de communication digitale et marketing — Libreville & Cotonou.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
