import Image from 'next/image';
import { Award, Star } from 'lucide-react';
import styles from './AwardsSection.module.css';

export default function AwardsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={`eyebrow ${styles.eyebrow}`}>
              <span>Distinctions</span>
            </div>
            <h2 className={styles.title}>
              Notre engagement envers <span className="text-gold">l&apos;excellence</span> récompensé
            </h2>
            <p className={styles.text}>
              Grâce à notre passion pour l&apos;innovation et la qualité de nos services, Empire Communication s&apos;est imposée 
              comme un leader du digital dans la sous-région. Ces prix témoignent du dynamisme de nos équipes et de la confiance 
              de nos clients.
            </p>
            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.badge}>
                  <Award size={22} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemYear}>2024 · Excellence Awards</span>
                  <h3 className={styles.itemTitle}>Meilleure entreprise innovante de la sous-région</h3>
                  <p className={styles.itemDesc}>
                    Distinction majeure célébrant notre impact, notre vision d&apos;avant-garde et nos solutions 
                    technologiques innovantes pour nos partenaires ouest-africains.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.badge}>
                  <Star size={22} />
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemYear}>2022 · Tech Awards (Togo)</span>
                  <h3 className={styles.itemTitle}>Meilleure agence de communication digitale</h3>
                  <p className={styles.itemDesc}>
                    Prix récompensant l&apos;excellence créative de nos productions visuelles, graphiques 
                    et nos campagnes de community management.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.trophyCard}>
              <Image
                src="/images/image 219.png"
                alt="Mr DINE MOUSTAPHA, Lauréat de la meilleure entreprise innovante"
                fill
                sizes="(max-width: 1024px) 320px, 360px"
                priority
                className={styles.trophyImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
