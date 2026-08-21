'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => {
    setIndex((i) => (i === null ? null : (i === 0 ? images.length - 1 : i - 1)));
  }, [images.length]);
  const next = useCallback(() => {
    setIndex((i) => (i === null ? null : (i === images.length - 1 ? 0 : i + 1)));
  }, [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={src}
            className={styles.cell}
            onClick={() => setIndex(i)}
            aria-label={`Ouvrir le visuel ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} — visuel ${i + 1}`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
              className={styles.thumb}
              loading={i < 8 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div className={styles.lightbox} onClick={close}>
          <button className={styles.close} onClick={close} aria-label="Fermer">
            <X size={20} />
          </button>

          <div className={styles.counter}>{index + 1} / {images.length}</div>

          <button
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Précédent"
          >
            <ChevronLeft size={26} />
          </button>

          <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index]}
              alt={`${title} — visuel ${index + 1}`}
              fill
              sizes="92vw"
              className={styles.stageImg}
              priority
            />
          </div>

          <button
            className={`${styles.nav} ${styles.navNext}`}
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Suivant"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}
