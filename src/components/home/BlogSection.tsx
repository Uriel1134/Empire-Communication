import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { posts } from '@/lib/blog-posts';
import styles from './BlogSection.module.css';

export default function BlogSection() {
  const featured = posts.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={`eyebrow ${styles.eyebrow}`}>Actualités</div>
            <h2 className={styles.title}>
              Conseils &amp; <span className={styles.goldText}>ressources.</span>
            </h2>
          </div>
          <Link href="/blog" className="btn btn-outline-gold">
            Voir tous les articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((post) => (
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
                <h3 className={styles.cardTitle}>{post.title}</h3>
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
  );
}
