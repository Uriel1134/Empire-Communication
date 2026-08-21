import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Images } from 'lucide-react';
import { portfolioProjects } from '@/lib/portfolio-projects';
import Gallery from './Gallery';
import styles from './page.module.css';

export function generateStaticParams() {
  return portfolioProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioProjects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <Link href="/portfolio" className={styles.back}>
            <ArrowLeft size={16} /> Retour au portfolio
          </Link>
          <div className={styles.heroContent}>
            <span className="section-label">{project.category}</span>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>{project.description}</p>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>
                <MapPin size={14} /> {project.location}
              </span>
              <span className={styles.metaItem}>
                <Images size={14} /> {project.gallery.length} visuels
              </span>
            </div>
            <div className={styles.tags}>
              {project.tags.map((t) => (
                <span key={t} className="badge badge-gold">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallerySection}>
        <div className="container">
          <Gallery images={project.gallery} title={project.title} />
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2 className="section-title">
            Un projet similaire ? <span className="text-gold">Parlons-en.</span>
          </h2>
          <div className="gold-line gold-line-center" />
          <Link href="/contact" className="btn btn-gold btn-lg" style={{ marginTop: 'var(--sp-4)', display: 'inline-flex' }}>
            Démarrer votre projet
          </Link>
        </div>
      </section>
    </div>
  );
}
