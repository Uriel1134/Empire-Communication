import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Users, TrendingUp, Palette, Video, Code, Megaphone, ArrowRight, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Découvrez tous nos services : Community Management, Marketing Digital, Graphisme, Montage Vidéo, Développement Web et Stratégie.',
};

const services = [
  {
    id: 'cm',
    icon: <Users size={22} />,
    image: '/images/portfolio-kemaf.jpg',
    title: 'Community Management',
    subtitle: 'Animez & engagez votre communauté',
    desc: 'Confiez-nous la gestion de vos réseaux sociaux (Facebook, Instagram, LinkedIn, TikTok) et transformez votre audience en communauté fidèle et engagée. Notre équipe crée des contenus percutants, optimisés pour chaque plateforme.',
    features: [
      'Stratégie éditoriale mensuelle', 'Création de contenus (posts, stories, reels)',
      'Modération et gestion des commentaires', 'Reporting et analytics mensuels',
      'Planification et calendrier éditorial', 'Veille concurrentielle',
    ],
    deliverables: '4 à 7 publications/semaine',
  },
  {
    id: 'marketing',
    icon: <TrendingUp size={22} />,
    image: '/images/formation-marketing.jpg',
    title: 'Marketing Digital',
    subtitle: 'Campagnes qui convertissent',
    desc: 'Maximisez votre retour sur investissement avec des campagnes publicitaires ciblées sur Meta (Facebook/Instagram) et Google Ads. Nous analysons, optimisons et scalons vos campagnes pour des résultats mesurables.',
    features: [
      'Setup et optimisation Meta Ads', 'Campagnes Google Ads (Search, Display)',
      'Stratégie SEO & positionnement', 'Email Marketing & automation',
      'Analyse et reporting des KPIs', 'A/B Testing continu',
    ],
    deliverables: 'Rapport de performance hebdomadaire',
  },
  {
    id: 'graphisme',
    icon: <Palette size={22} />,
    image: '/images/formation-graphisme.jpg',
    title: 'Graphisme & Design',
    subtitle: 'Une identité visuelle qui marque',
    desc: 'Du logo à la charte graphique complète, en passant par les supports print et digitaux, notre équipe de designers crée des visuels qui reflètent l\'essence de votre marque et captivent votre audience.',
    features: [
      'Création de logo & identité visuelle', 'Charte graphique complète',
      'Flyers, affiches et bannières', 'Visuels pour réseaux sociaux',
      'Packaging & supports print', 'Motion Design & animations',
    ],
    deliverables: 'Fichiers sources fournis (AI, PSD)',
  },
  {
    id: 'video',
    icon: <Video size={22} />,
    image: '/images/portfolio-spottv.jpg',
    title: 'Montage Vidéo',
    subtitle: 'Des vidéos qui captivent',
    desc: 'La vidéo est le format le plus engageant du digital. Notre équipe de monteurs professionnels crée des vidéos impactantes : spots publicitaires, vidéos réseaux sociaux, aftermovies, tutoriels et bien plus.',
    features: [
      'Montage professionnel (Premiere Pro)', 'Color grading & étalonnage',
      'Motion Design & animations (After Effects)', 'Spots publicitaires TV & Web',
      'Vidéos réseaux sociaux (Reels, TikTok)', 'Sous-titrage & localisation',
    ],
    deliverables: 'Livraison en HD/4K selon besoin',
  },
  {
    id: 'web',
    icon: <Code size={22} />,
    image: '/images/portfolio-cotonou.jpg',
    title: 'Développement Web',
    subtitle: 'Votre vitrine digitale de rêve',
    desc: 'Nous concevons et développons des sites web modernes, rapides et optimisés SEO qui convertissent vos visiteurs en clients. Du site vitrine à la plateforme e-commerce, nous gérons tout votre projet web.',
    features: [
      'Sites vitrine & institutionnels', 'E-commerce & boutiques en ligne',
      'Applications web sur mesure', 'Optimisation SEO technique',
      'Responsive Design (mobile-first)', 'Maintenance & hébergement',
    ],
    deliverables: 'Livraison en 2 à 6 semaines',
  },
  {
    id: 'strategie',
    icon: <Megaphone size={22} />,
    image: '/images/formations-hero.jpg',
    title: 'Stratégie & Conseil',
    subtitle: 'Votre cap digital clarifié',
    desc: 'Avant d\'agir, il faut planifier. Nos consultants analysent votre situation actuelle, identifient les opportunités et élaborent une stratégie digitale sur mesure pour atteindre vos objectifs de croissance.',
    features: [
      'Audit digital complet', 'Analyse concurrentielle',
      'Définition des KPIs et objectifs', 'Élaboration du plan de communication',
      'Accompagnement à l\'exécution', 'Formations & coaching',
    ],
    deliverables: 'Plan d\'action détaillé livré',
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Nos Services</div>
            <h1 className={styles.heroTitle}>
              Tout Ce Dont Votre Marque a Besoin <br />
              pour <span className="text-gold">Rayonner</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              6 pôles d&apos;expertise complémentaires pour couvrir l&apos;intégralité de vos besoins
              en communication digitale, avec un seul interlocuteur.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className={styles.servicesSection}>
        <div className="container">
          {services.map((service, i) => (
            <div key={service.id} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.reversed : ''}`} id={service.id}>
              {/* Visual */}
              <div className={styles.serviceVisual}>
                <div className={`${styles.serviceImgWrap} photo`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className={styles.serviceImg}
                  />
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                </div>
                <div className={styles.serviceDeliverable}>
                  <CheckCircle size={16} />
                  {service.deliverables}
                </div>
              </div>

              {/* Content */}
              <div className={styles.serviceContent}>
                <div className={styles.serviceNum}>0{i + 1}</div>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <div className="gold-line" />
                <p className={styles.serviceDesc}>{service.desc}</p>
                <ul className={styles.featureGrid}>
                  {service.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <CheckCircle size={16} className={styles.featureCheck} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${service.id}`}
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                >
                  Demander un devis personnalisé
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className={styles.whySection}>
        <div className="container text-center">
          <div className="section-label">Pourquoi Nous Choisir ?</div>
          <h2 className="section-title">
            L'Excellence <span className="text-gold">Empire</span>
          </h2>
          <div className="gold-line gold-line-center" />
          <div className={styles.whyGrid}>
            {[
              { num: '11+', label: 'Années d\'expérience', desc: 'Une décennie d\'expertise au service de vos ambitions.' },
              { num: '200+', label: 'Clients satisfaits', desc: 'Gabon, Bénin et à l\'international.' },
              { num: '2', label: 'Agences physiques', desc: 'Libreville et Cotonou pour vous servir.' },
              { num: '24h', label: 'Délai de réponse', desc: 'Réactivité et disponibilité garanties.' },
            ].map((item) => (
              <div key={item.num} className={`card ${styles.whyCard}`}>
                <div className={styles.whyNum}>{item.num}</div>
                <div className={styles.whyLabel}>{item.label}</div>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
