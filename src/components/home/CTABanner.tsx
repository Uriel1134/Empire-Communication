import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.banner}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <Phone size={22} />
          </div>
          <div>
            <div className={styles.label}>Restez connectés</div>
            <div className={styles.value}>+229 01 51 78 33 29</div>
          </div>
        </div>
        <div className={styles.text}>
          Restez à la pointe du digital avec Empire Communications.
        </div>
        <Link href="/contact" className={styles.cta}>
          Demander un devis
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
