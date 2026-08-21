'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BookOpen, Clock, Tag, CheckCircle, Users, Award, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

const formations = [
  {
    id: 'graphisme-video',
    title: 'Graphisme & Montage Vidéo',
    image: '/images/formation-graphisme.jpg',
    duration: '1 mois',
    sessions: '3 sessions/semaine',
    priceNormal: '60 000 FCFA',
    pricePromo: '30 000 FCFA',
    discountTag: '-50%',
    registrationFee: '5 000 FCFA',
    level: 'Débutant à Intermédiaire',
    prerequisites: ['Aucun prérequis technique', 'Un ordinateur (PC ou Mac)', 'Motivation et créativité'],
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe After Effects'],
    programme: [
      { week: 'Semaine 1', title: 'Bases du Graphisme', topics: ['Introduction au design', 'Photoshop fondamentaux', 'Retouche photo', 'Composition visuelle'] },
      { week: 'Semaine 2', title: 'Identité visuelle', topics: ['Logo design avec Illustrator', 'Typographie avancée', 'Charte graphique', 'Supports print'] },
      { week: 'Semaine 3', title: 'Vidéo & Montage', topics: ['Introduction à Premiere Pro', 'Cut & transitions', 'Sound design', 'Export et formats'] },
      { week: 'Semaine 4', title: 'Motion Design', topics: ['After Effects bases', 'Animations de texte', 'Projet final', 'Présentation portfolio'] },
    ],
    outcomes: ['Maîtriser la suite Adobe', 'Créer des identités visuelles', 'Monter des vidéos professionnelles', 'Constituer un portfolio'],
  },
  {
    id: 'marketing',
    title: 'Community Management',
    image: '/images/formation-marketing.jpg',
    duration: '1 mois',
    sessions: '3 sessions/semaine',
    priceNormal: '80 000 FCFA',
    pricePromo: '45 000 FCFA',
    discountTag: '-44%',
    registrationFee: '10 000 FCFA',
    level: 'Tous niveaux',
    prerequisites: ['Notion de base en informatique', 'Avoir un compte sur les réseaux sociaux', 'Ambition entrepreneuriale'],
    tools: ['Meta Business Suite', 'Instagram & Facebook Ads', 'Canva Pro', 'Copywriting & ChatGPT', 'Buffer / Hootsuite'],
    programme: [
      { week: 'Semaine 1', title: 'Stratégie Social Media', topics: ['Rôle du Community Manager', 'Positionnement de marque', 'Création de calendrier éditorial', 'Identité visuelle sur les réseaux'] },
      { week: 'Semaine 2', title: 'Création de Contenu', topics: ['Canva Pro avancé', 'Rédaction persuasive (Copywriting)', 'Montage de Reels/Shorts mobiles', 'Outils d\'IA pour la création'] },
      { week: 'Semaine 3', title: 'Publicité & Growth', topics: ['Meta Ads fondamentaux', 'Campagnes de boosts vs Business Manager', 'Ciblage d\'audience qualifiée', 'Optimisation de budget'] },
      { week: 'Semaine 4', title: 'Analyse & Reporting', topics: ['Statistiques et KPI clés', 'Rapports de performance client', 'Gestion de crise & modération', 'Projet final & certification'] },
    ],
    outcomes: ['Gérer de façon professionnelle des réseaux sociaux', 'Concevoir des visuels et vidéos engageants', 'Lancer des campagnes publicitaires Meta', 'Analyser et présenter des bilans de performance'],
  },
];

export default function FormationsPage() {
  const [activeFormation, setActiveFormation] = useState(formations[0].id);
  const [activeWeek, setActiveWeek] = useState(0);

  const formation = formations.find((f) => f.id === activeFormation) || formations[0];

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Empire Académie</div>
            <h1 className={styles.heroTitle}>
              Développez Vos Compétences <br />
              avec les <span className="text-gold">Meilleurs</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Des formations courtes et intensives pour maîtriser les outils du digital. 
              Encadrés par des experts terrain, pour des compétences immédiatement opérationnelles.
            </p>
            <div className={styles.heroBadge}>
              Formations professionnelles certifiées — Début des inscriptions ouvert !
            </div>
          </div>
        </div>
      </section>

      {/* Formation Tabs */}
      <section className={styles.mainSection}>
        <div className="container">
          {/* Tab Selector */}
          <div className={styles.tabs}>
            {formations.map((f) => (
              <button
                key={f.id}
                className={`${styles.tab} ${activeFormation === f.id ? styles.activeTab : ''}`}
                onClick={() => { setActiveFormation(f.id); setActiveWeek(0); }}
              >
                <span>{f.title}</span>
              </button>
            ))}
          </div>

          {/* Formation Details */}
          <div className={styles.formationDetail}>
            {/* Left: Info */}
            <div className={styles.formationInfo}>
              <div className={`${styles.formationImgWrap} photo photo-framed`}>
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className={styles.formationImg}
                />
              </div>
              <h2 className={styles.formationTitle}>{formation.title}</h2>
              <span className={styles.formationLevel}>{formation.level}</span>

              {/* Meta */}
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <Clock size={18} className={styles.metaIcon} />
                  <div>
                    <div className={styles.metaLabel}>Durée</div>
                    <div className={styles.metaValue}>{formation.duration}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <Users size={18} className={styles.metaIcon} />
                  <div>
                    <div className={styles.metaLabel}>Sessions</div>
                    <div className={styles.metaValue}>{formation.sessions}</div>
                  </div>
                </div>
                <div className={styles.metaItem}>
                  <Award size={18} className={styles.metaIcon} />
                  <div>
                    <div className={styles.metaLabel}>Certification</div>
                    <div className={styles.metaValue}>Empire Académie</div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className={styles.priceBox}>
                <div className={styles.priceLabel}>Tarif de lancement :</div>
                <div className={styles.priceRow}>
                  <span className={styles.priceOld}>{formation.priceNormal}</span>
                  <span className={styles.priceNew}>{formation.pricePromo}</span>
                  <span className={styles.promoTag}>{formation.discountTag}</span>
                </div>
                {formation.registrationFee && (
                  <div className={styles.registrationFee}>
                    Frais d'inscription : <strong>{formation.registrationFee}</strong>
                  </div>
                )}
              </div>

              {/* Tools */}
              <div className={styles.toolsSection}>
                <h4 className={styles.sectionLabel}>Outils maîtrisés :</h4>
                <div className={styles.toolsList}>
                  {formation.tools.map((t) => (
                    <span key={t} className={`badge badge-gold ${styles.toolBadge}`}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              <div>
                <h4 className={styles.sectionLabel}>Prérequis :</h4>
                <ul className={styles.prereqList}>
                  {formation.prerequisites.map((p) => (
                    <li key={p} className={styles.prereqItem}>
                      <CheckCircle size={16} className={styles.checkIcon} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className={styles.sectionLabel}>À l'issue de la formation :</h4>
                <ul className={styles.prereqList}>
                  {formation.outcomes.map((o) => (
                    <li key={o} className={styles.prereqItem}>
                      <CheckCircle size={16} className={styles.checkIcon} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Programme + Form */}
            <div className={styles.formationRight}>
              {/* Programme */}
              <div className={styles.programmeBox}>
                <h3 className={styles.programmeTitle}>Programme détaillé</h3>
                <div className={styles.weekTabs}>
                  {formation.programme.map((w, i) => (
                    <button
                      key={i}
                      className={`${styles.weekTab} ${activeWeek === i ? styles.activeWeekTab : ''}`}
                      onClick={() => setActiveWeek(i)}
                    >
                      {w.week}
                    </button>
                  ))}
                </div>
                <div className={styles.weekContent}>
                  <h4 className={styles.weekTitle}>{formation.programme[activeWeek].title}</h4>
                  <ul className={styles.topicList}>
                    {formation.programme[activeWeek].topics.map((topic) => (
                      <li key={topic} className={styles.topicItem}>
                        <span className={styles.topicDot} />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Registration Form */}
              <div className={styles.formBox} id={formation.id}>
                <h3 className={styles.formTitle}>
                  <BookOpen size={20} />
                  Pré-inscription — {formation.title}
                </h3>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.formRow}>
                    <div className="form-group">
                      <label className="form-label">Prénom *</label>
                      <input className="form-input" type="text" placeholder="Votre prénom" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nom *</label>
                      <input className="form-input" type="text" placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone *</label>
                    <input className="form-input" type="tel" placeholder="+241 / +229..." required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" placeholder="votre@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Formation choisie</label>
                    <select className="form-input" value={formation.id} onChange={() => {}}>
                      {formations.map((f) => (
                        <option key={f.id} value={f.id}>{f.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message (optionnel)</label>
                    <textarea className="form-input" rows={3} placeholder="Questions, contraintes horaires..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Envoyer ma pré-inscription
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
