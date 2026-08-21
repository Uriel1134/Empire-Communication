import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { posts } from '@/lib/blog-posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: "Conseils et ressources d'Empire Communications en marketing digital, community management, graphisme, vidéo et développement web.",
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Blog</div>
            <h1 className={styles.heroTitle}>
              Conseils &amp; <span className="text-gold">Ressources</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Des repères concrets sur le marketing digital, la création de contenu
              et la stratégie, tirés du terrain par l&apos;équipe Empire.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <div className={`${styles.imgWrap} photo`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 380px"
                    className={styles.img}
                  />
                </div>
                <div className={styles.body}>
                  <span className={styles.category}>{post.category}</span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <Clock size={13} />
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
