import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, MapPin, Images } from 'lucide-react';
import { portfolioProjects } from '@/lib/portfolio-projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Toutes les réalisations d'Empire Communications pour CAO Consulting, Freedom and Serenity Solutions et Travel Consulting Agency.",
};

export default function PortfolioPage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Portfolio</div>
            <h1 className={styles.heroTitle}>
              Nos Réalisations, <span className="text-gold">Nos Clients</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Chaque projet est une histoire. Découvrez l&apos;intégralité des visuels
              produits pour chacun de nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className={styles.portfolioSection}>
        <div className="container">
          <div className={styles.grid}>
            {portfolioProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className={styles.card}>
                {/* Visual */}
                <div className={styles.cardVisual}>
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 45vw, 380px"
                    className={styles.cardVisualImg}
                  />
                  <div className={styles.cardOverlay}>
                    <ExternalLink size={24} />
                    <span>Voir toutes les réalisations</span>
                  </div>
                </div>
                {/* Info */}
                <div className={styles.cardInfo}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <span className={styles.cardYear}>
                      <MapPin size={12} /> {project.location}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.cardTags}>
                    {project.tags.map((t) => (
                      <span key={t} className={styles.cardTag}>{t}</span>
                    ))}
                    <span className={`${styles.cardTag} ${styles.cardTagCount}`}>
                      <Images size={12} /> {project.gallery.length} visuels
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
