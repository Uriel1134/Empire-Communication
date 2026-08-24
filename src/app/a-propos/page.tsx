import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Ear, Zap, Sparkles, Gem, Lightbulb, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'À Propos',
  description: "Empire Communication, entreprise de communication globale 360° basée à Cotonou, Bénin. Spécialiste gestion des médias sociaux et publicité Ads, présente au Bénin, au Gabon, au Sénégal et au Togo.",
};

const values = [
  { icon: <Ear size={24} />,      title: 'Écoute',     desc: 'Comprendre vos besoins, vos envies et vos motivations.' },
  { icon: <Zap size={24} />,      title: 'Réactivité',  desc: "Notre équipe experte passe très rapidement à l'action après une écoute minutieuse de votre projet." },
  { icon: <Sparkles size={24} />, title: 'Créativité',  desc: "Être créatif n'est pas un métier, mais un talent inné. Chaque détail compte chez nous." },
  { icon: <Gem size={24} />,      title: 'Qualité',     desc: 'Des solutions innovantes et modernes, adaptées à vos attentes, avec les dernières technologies.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: "Nous cultivons la liberté d'entreprendre qui stimule notre créativité et notre capacité à innover. L'esprit de progrès est le réel moteur de notre dynamisme." },
];

const coverage = [
  { flag: '🇧🇯', country: 'Bénin',        note: 'Siège social — Cotonou' },
  { flag: '🇬🇦', country: 'Gabon',        note: "Zone d'intervention" },
  { flag: '🇸🇳', country: 'Sénégal',      note: "Zone d'intervention" },
  { flag: '🇹🇬', country: 'Togo',         note: "Zone d'intervention" },
  { flag: '🇨🇮', country: "Côte d'Ivoire", note: 'Perspective de développement' },
  { flag: '🇫🇷', country: 'France',       note: 'Perspective de développement' },
];

export default function AProposPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Notre Histoire</div>
            <h1 className={styles.heroTitle}>
              L'Agence qui Fait<br />
              Rayonner Votre <span className="text-gold">Marque</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Empire Communication est une entreprise de communication globale 360°,
              spécialisée en gestion des médias sociaux et publicité Ads. Basée et
              enregistrée à Cotonou, Bénin, elle est l&apos;un des leaders de ce
              domaine au Bénin et dans la sous-région ouest-africaine.
            </p>
          </div>
        </div>
      </section>

      {/* Structure légale */}
      <section className={`section ${styles.founder}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderVisual}>
              <div className={styles.founderCard}>
                <div className={styles.founderPhotoWrap}>
                  <Image
                    src="/images/founder-dine-moustapha-ceo.png"
                    alt="Mr DINE MOUSTAPHA, Président Directeur Général d'Empire Communication"
                    fill
                    sizes="280px"
                    className={styles.founderPhoto}
                  />
                </div>
                <div className={styles.founderInfo}>
                  <div className={styles.founderName}>Mr DINE MOUSTAPHA</div>
                  <div className={styles.founderRole}>Président Directeur Général</div>
                  <div className={styles.founderTagline}>Expert en Communication digitale et consultant en SEO</div>
                </div>
              </div>
            </div>
            <div>
              <div className="section-label">Notre structure</div>
              <h2 className="section-title">
                Une entreprise <span className="text-gold">légalement reconnue</span>
              </h2>
              <div className="gold-line" />
              <p className={styles.founderDesc}>
                Empire Communication pilote de A à Z tout type de projet à caractère
                professionnel, légalement reconnu par la loi et par le code du numérique.
                Forte de plus de <strong>11 ans d&apos;existence</strong>, l&apos;entreprise
                intervient au Bénin, au Gabon, au Sénégal et au Togo, avec des perspectives
                de développement en Côte d&apos;Ivoire et en France.
              </p>
              <p className={styles.founderDesc}>
                Notre sigle, <strong>FER</strong>, résume notre promesse :
                <strong> Fiabilité</strong>, <strong>Efficacité</strong> &amp; <strong>Rapidité</strong> —
                des solutions adéquates et sur mesure pour améliorer votre communication digitale.
              </p>
              <blockquote className={styles.quote}>
                Désormais sous la tutelle de la société <strong>NOUROU &amp; FILS COMPANY SARL</strong>,
                au capital de cinq (5) millions de francs CFA, immatriculée au Registre du
                Commerce et des Sociétés (RCCM) sous le numéro <strong>RB/PNO/23B4721</strong>.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label">Nos Valeurs &amp; Engagements</div>
            <h2 className="section-title">Ce Qui Nous Guide</h2>
            <div className="gold-line gold-line-center" />
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.commitmentStrip}>
            <span>Chez Empire Communication, nous nous engageons à une bonne :</span>
            <div className={styles.commitmentTags}>
              <span className="badge badge-gold">Éthique</span>
              <span className="badge badge-gold">Qualité</span>
              <span className="badge badge-gold">Rapidité</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className={`section ${styles.agenciesSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label">Où Nous Intervenons</div>
            <h2 className="section-title">
              Un Leader en <span className="text-gold">Expansion</span>
            </h2>
            <div className="gold-line gold-line-center" />
            <p className={styles.ctaDesc} style={{ marginBottom: 0 }}>
              Siège à Cotonou, opérations actives au Bénin, au Gabon, au Sénégal et au
              Togo — avec des perspectives de développement en Côte d&apos;Ivoire et en France.
            </p>
          </div>
          <div className={styles.agenciesGrid}>
            {coverage.map((c) => (
              <div key={c.country} className={`card ${styles.agencyCard}`}>
                <div className={styles.agencyHeader}>
                  <span className={styles.agencyFlag}>{c.flag}</span>
                  <div>
                    <h3 className={styles.agencyCity}>{c.country}</h3>
                    <p className={styles.agencyCountry}>{c.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container text-center">
          <h2 className="section-title">
            Rejoignez la Famille <span className="text-gold">Empire</span>
          </h2>
          <div className="gold-line gold-line-center" />
          <p className={styles.ctaDesc}>
            200+ entreprises font déjà confiance à Empire Communications. C'est votre tour.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Démarrer notre collaboration
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
