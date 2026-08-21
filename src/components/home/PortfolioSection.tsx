import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Images } from 'lucide-react';
import { portfolioProjects } from '@/lib/portfolio-projects';
import styles from './PortfolioSection.module.css';

export default function PortfolioSection() {
  return (
    <section className={`section ${styles.portfolio}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Nos <span className="text-gold">Réalisations</span>
          </h2>
          <div className="gold-line gold-line-center" />
          <p className="section-subtitle">
            Des projets qui témoignent de notre expertise et de notre engagement envers l&apos;excellence.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {portfolioProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`} className={styles.projectCard}>
              <div className={styles.visual}>
                <Image
                  src={project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className={styles.visualImg}
                />
                <div className={styles.overlay}>
                  <ExternalLink size={20} />
                  <span>{project.gallery.length} visuels</span>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.count}>
                  <Images size={13} /> {project.gallery.length} réalisations
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/portfolio" className="btn btn-gold btn-lg">
            Voir tout le portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
