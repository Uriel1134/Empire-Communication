'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Users, TrendingUp, Palette, Video, Code, Megaphone, ArrowRight } from 'lucide-react';
import styles from './ServicesSection.module.css';

const services = [
  { id: 'cm',        icon: <Users size={22} />,      title: 'Community Management',  desc: 'Animation stratégique de vos réseaux sociaux et croissance de communauté.', image: '/images/portfolio-kemaf.jpg' },
  { id: 'marketing', icon: <TrendingUp size={22} />,  title: 'Marketing Digital',     desc: 'Campagnes Meta & Google, SEO, email marketing. Des résultats mesurables.', image: '/images/formation-marketing.jpg' },
  { id: 'graphisme', icon: <Palette size={22} />,     title: 'Graphisme & Design',    desc: 'Identité visuelle, logo, supports print et digitaux qui marquent les esprits.', image: '/images/formation-graphisme.jpg' },
  { id: 'video',     icon: <Video size={22} />,       title: 'Production Vidéo',      desc: 'Spots publicitaires, montage professionnel et motion design en 4K.', image: '/images/portfolio-spottv.jpg' },
  { id: 'web',       icon: <Code size={22} />,        title: 'Développement Web',     desc: 'Sites vitrine, e-commerce et applications web modernes et optimisés SEO.', image: '/images/portfolio-cotonou.jpg' },
  { id: 'strategie', icon: <Megaphone size={22} />,   title: 'Conseil & Stratégie',   desc: 'Audit digital, plan de communication sur mesure et accompagnement.', image: '/images/formations-hero.jpg' },
];

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={`eyebrow ${styles.eyebrow}`}>Nos expertises</div>
            <h2 className={styles.title}>
              Ce que nous <span className={styles.goldText}>faisons.</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              Six pôles d&apos;excellence complémentaires pour couvrir l&apos;intégralité
              de vos besoins digitaux avec un seul partenaire de confiance.
            </p>
            <Link href="/services" className="btn btn-gold">
              Voir tous les services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.id} href={`/services#${s.id}`} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <div className={`${styles.cardImgInner} photo`}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardIcon}>{s.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.cardLink}>
                  Voir plus <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
