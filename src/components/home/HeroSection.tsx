import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import styles from './HeroSection.module.css';

const stats = [
  { value: '200', suffix: '+', label: 'Clients' },
  { value: '500', suffix: '+', label: 'Projets' },
  { value: '2',   suffix: '',  label: 'Pays' },
  { value: '5',   suffix: '',  label: 'Expertises' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* ── Left content ── */}
        <div className={styles.content}>
          <div className={`${styles.eyebrow} eyebrow`}>
            <span>Agence Digitale &amp; Marketing</span>
          </div>

          <h1 className={styles.headline}>
            Votre stratégie digitale, pensée comme une entreprise tech.
          </h1>

          {/* ── Mobile : blob photo panel ── */}
          <div className={`${styles.visual} ${styles.mobileVisual}`}>
            <div className={`${styles.blobShape} blob photo`}>
              <Image
                src="/images/image.png"
                alt="Empire Communications — croissance digitale"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
                className={styles.blobImg}
              />
            </div>
            <div className={`${styles.floatCard} float-card`}>
              <div className={styles.floatIcon}>
                <TrendingUp size={20} />
              </div>
              <div>
                <div className={styles.floatValue}>200+</div>
                <div className={styles.floatLabel}>Clients accompagnés</div>
              </div>
            </div>
          </div>

          <p className={styles.lead}>
            Empire Communications accompagne marques, entreprises et institutions
            dans leur croissance digitale. <strong>Libreville · Cotonou.</strong>
          </p>

          <div className={styles.ctas}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              Démarrer un projet
              <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-outline-white btn-lg">
              Découvrir nos services
            </Link>
          </div>

          <div className={styles.locations}>
            <div className={styles.locationItem}>
              <MapPin size={13} />
              <span>Libreville, Gabon</span>
            </div>
            <div className={styles.locationDot} />
            <div className={styles.locationItem}>
              <MapPin size={13} />
              <span>Cotonou, Bénin</span>
            </div>
          </div>
        </div>

        {/* ── Desktop : blob photo panel ── */}
        <div className={`${styles.visual} ${styles.desktopVisual}`}>
          <div className={`${styles.blobShape} blob photo`}>
            <Image
              src="/images/image.png"
              alt="Empire Communications — croissance digitale"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              priority
              className={styles.blobImg}
            />
          </div>
          <div className={`${styles.floatCard} float-card`}>
            <div className={styles.floatIcon}>
              <TrendingUp size={20} />
            </div>
            <div>
              <div className={styles.floatValue}>200+</div>
              <div className={styles.floatLabel}>Clients accompagnés</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>
                  {s.value}<span className={styles.statSuffix}>{s.suffix}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
