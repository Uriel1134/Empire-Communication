import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, GraduationCap, Award } from 'lucide-react';
import styles from './FormationsBanner.module.css';

const formations = [
  {
    id: 'graphisme-video',
    image: '/images/formation-graphisme.jpg',
    label: 'Design & Créativité',
    title: 'Graphisme & Montage Vidéo',
    duration: '1 mois',
    price: '30 000 FCFA',
    tools: ['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'],
    desc: 'Maîtrisez Adobe Creative Suite et construisez un portfolio professionnel.',
  },
  {
    id: 'marketing',
    image: '/images/formation-marketing.jpg',
    label: 'Digital & Social',
    title: 'Community Management',
    duration: '1 mois',
    price: '45 000 FCFA',
    tools: ['Meta Ads', 'Canva Pro', 'Copywriting', 'ChatGPT'],
    desc: 'Gérez et animez des communautés en ligne pour booster leur visibilité.',
  },
];

export default function FormationsBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.academyBadge}>
            <GraduationCap size={16} />
            Empire Académie
          </div>
          <h2 className={styles.title}>
            Formez-vous avec <span className={styles.goldText}>les experts.</span>
          </h2>
          <div className="gold-line gold-line-center" />
          <p className={styles.desc}>
            Des formations courtes, intensives, encadrées par des professionnels du terrain.
            Repartez avec des compétences immédiatement opérationnelles et une certification reconnue.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {formations.map((f) => (
            <Link key={f.id} href={`/formations#${f.id}`} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className={styles.cardImg}
                />
                <span className={styles.priceTag}>{f.price}</span>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>{f.label}</span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
                <div className={styles.tools}>
                  {f.tools.map((t) => (
                    <span key={t} className={styles.tool}>{t}</span>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.metaItem}>
                    <Clock size={13} />
                    {f.duration} intensif
                  </span>
                  <span className={styles.metaItem}>
                    <Award size={13} />
                    Certifiant
                  </span>
                </div>
                <div className={styles.cardAction}>
                  S&apos;inscrire <ArrowRight size={13} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: 'var(--sp-10)' }}>
          <Link href="/formations" className="btn btn-outline-gold btn-lg">
            Voir toutes les formations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
