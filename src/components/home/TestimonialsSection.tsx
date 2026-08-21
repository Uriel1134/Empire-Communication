'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Kouassi Emmanuel',
    role: 'Directeur Marketing, KEMAF',
    initials: 'KE',
    rating: 5,
    text: 'Empire Communications a transformé notre présence digitale. Leur équipe est professionnelle, créative et toujours disponible. Nos réseaux sociaux n\'ont jamais été aussi dynamiques !',
  },
  {
    id: 2,
    name: 'Sylvie Adoye',
    role: 'Fondatrice, Cotonou Accueil',
    initials: 'SA',
    rating: 5,
    text: 'Grâce à Empire, notre site web est moderne et notre visibilité en ligne a explosé. Je recommande vivement leurs services à toute entreprise qui veut se développer digitalement.',
  },
  {
    id: 3,
    name: 'Jean-Pierre Manga',
    role: 'CEO, YAF International',
    initials: 'JP',
    rating: 5,
    text: 'Une agence de calibre international ! La qualité du travail fourni est irréprochable. Ils comprennent parfaitement les enjeux du marché africain.',
  },
  {
    id: 4,
    name: 'Fatima Diallo',
    role: 'Responsable Communication, StartupBJ',
    initials: 'FD',
    rating: 5,
    text: 'La formation Marketing Digital d\'Empire m\'a ouvert de nouvelles perspectives professionnelles. Une équipe pédagogique exceptionnelle et un contenu très pratique.',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <div className="section-label">Témoignages</div>
          <h2 className="section-title">
            Ce Que Disent <span className="text-gold">Nos Clients</span>
          </h2>
          <div className="gold-line gold-line-center" />
        </div>

        {/* Main Testimonial */}
        <div className={styles.featured}>
          <Quote size={48} className={styles.quoteIcon} />

          <div className={styles.stars}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={20} fill="currentColor" className={styles.star} />
            ))}
          </div>

          <p className={styles.text}>{t.text}</p>

          <div className={styles.author}>
            <div className={styles.avatar}>{t.initials}</div>
            <div>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.nav}>
            <button onClick={prev} className={styles.navBtn} aria-label="Précédent">
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.navBtn} aria-label="Suivant">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Side cards */}
        <div className={styles.sideCards}>
          {testimonials.filter((_, i) => i !== current).slice(0, 3).map((t) => (
            <div key={t.id} className={`card ${styles.sideCard}`}>
              <div className={styles.sideStars}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" style={{ color: 'var(--gold)' }} />
                ))}
              </div>
              <p className={styles.sideText}>"{t.text.slice(0, 100)}..."</p>
              <div className={styles.sideAuthor}>
                <div className={styles.sideAvatar}>{t.initials}</div>
                <div>
                  <div className={styles.sideAuthorName}>{t.name}</div>
                  <div className={styles.sideAuthorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
