import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import AwardsSection from '@/components/home/AwardsSection';
import ServicesSection from '@/components/home/ServicesSection';
import CTABanner from '@/components/home/CTABanner';
import ProcessSection from '@/components/home/ProcessSection';
import StatsBand from '@/components/home/StatsBand';
import PartnersSection from '@/components/home/PartnersSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import Marquee from '@/components/home/Marquee';
import FormationsBanner from '@/components/home/FormationsBanner';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BlogSection from '@/components/home/BlogSection';
import ContactCTA from '@/components/home/ContactCTA';

export const metadata: Metadata = {
  title: 'Empire Communications — Agence de Communication Digitale | Libreville · Cotonou',
  description:
    "Empire Communications est une agence de communication digitale et marketing implantée au Gabon et au Bénin. Community Management, Graphisme, Vidéo, Développement Web & Stratégie Digitale.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <ServicesSection />
      <CTABanner />
      <ProcessSection />
      <StatsBand />
      <PartnersSection />
      <PortfolioSection />
      <Marquee />
      <FormationsBanner />
      <TestimonialsSection />
      <BlogSection />
      <ContactCTA />
    </>
  );
}
