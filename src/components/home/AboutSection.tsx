import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import styles from './AboutSection.module.css';

const points = [
  'Agences physiques à Libreville et Cotonou',
  'Équipe de professionnels certifiés',
  'Stratégies orientées résultats mesurables',
];

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Desktop Visual */}
          <div className={`${styles.visual} ${styles.desktopVisual}`}>
            <div className={`${styles.blobShape} blob photo photo-framed`}>
              <Image
                src="/images/image 216.png"
                alt="Espace de travail digital chez Empire Communications"
                fill
                sizes="(max-width: 1024px) 90vw, 460px"
                className={styles.blobImg}
              />
            </div>
            <div className={`${styles.floatCard} float-card`}>
              <div className={styles.floatValue}>200<span>+</span></div>
              <div className={styles.floatLabel}>Clients satisfaits</div>
            </div>
          </div>

          {/* Right : Text */}
          <div className={styles.right}>
            <div className={`eyebrow ${styles.eyebrow}`}>À propos</div>
            <h2 className={styles.title}>
              L&apos;agence qui fait <span className={styles.highlight}>rayonner</span> les marques.
            </h2>

            {/* Mobile Visual */}
            <div className={`${styles.visual} ${styles.mobileVisual}`}>
              <div className={`${styles.blobShape} blob photo photo-framed`}>
                <Image
                  src="/images/image 216.png"
                  alt="Espace de travail digital chez Empire Communications"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className={styles.blobImg}
                />
              </div>
              <div className={`${styles.floatCard} float-card`}>
                <div className={styles.floatValue}>200<span>+</span></div>
                <div className={styles.floatLabel}>Clients satisfaits</div>
              </div>
            </div>

            <p className={styles.desc}>
              Empire Communications accompagne entreprises, institutions et marques
              dans leur transformation digitale. Depuis le Gabon et le Bénin, nous
              bâtissons des stratégies de communication qui génèrent des résultats concrets.
            </p>

            <ul className={styles.points}>
              {points.map((p) => (
                <li key={p} className={styles.point}>
                  <CheckCircle size={18} className={styles.pointIcon} />
                  {p}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link href="/a-propos" className="btn btn-gold">
                Découvrir notre histoire
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+2290151783329" className={styles.phone}>
                <span className={styles.phoneIcon}><Phone size={16} /></span>
                <div>
                  <div className={styles.phoneLabel}>Appelez-nous</div>
                  <div className={styles.phoneVal}>+229 01 51 78 33 29</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
