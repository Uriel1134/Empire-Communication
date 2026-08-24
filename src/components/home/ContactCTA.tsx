import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock } from 'lucide-react';
import styles from './ContactCTA.module.css';

export default function ContactCTA() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left */}
          <div className={styles.left}>
            <div className={`eyebrow ${styles.eyebrow}`}>Travaillons ensemble</div>
            <h2 className={styles.title}>
              Un projet en tête ?<br />
              <span className={styles.goldText}>Parlez-nous-en.</span>
            </h2>
            <p className={styles.desc}>
              Obtenez une proposition personnalisée sous 24h. Nos équipes de Libreville 
              et Cotonou sont prêtes à vous accompagner.
            </p>

            <div className={styles.contacts}>
              <a href="tel:+241074829240" className={styles.contactItem}>
                <div className={styles.contactIcon}><Phone size={18} /></div>
                <div>
                  <div className={styles.contactLbl}>🇬🇦 Gabon</div>
                  <div className={styles.contactVal}>+241 074 829 240</div>
                </div>
              </a>
              <a href="tel:+2290151783329" className={styles.contactItem}>
                <div className={styles.contactIcon}><Phone size={18} /></div>
                <div>
                  <div className={styles.contactLbl}>🇧🇯 Bénin</div>
                  <div className={styles.contactVal}>+229 01 51 78 33 29</div>
                </div>
              </a>
              <a href="mailto:direction@empirecommunications.org" className={styles.contactItem}>
                <div className={styles.contactIcon}><Mail size={18} /></div>
                <div>
                  <div className={styles.contactLbl}>Email</div>
                  <div className={styles.contactVal}>direction@empirecommunications.org</div>
                </div>
              </a>
            </div>

            <div className={styles.hours}>
              <Clock size={13} />
              Lun – Sam · 8h – 18h (GMT+1)
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaBoxTop}>
                <div className={styles.ctaBoxLabel}>Démarrez maintenant</div>
                <h3 className={styles.ctaBoxTitle}>
                  Votre première consultation est gratuite.
                </h3>
                <p className={styles.ctaBoxDesc}>
                  Décrivez votre besoin et nous revenons vers vous avec une stratégie adaptée à votre budget.
                </p>
              </div>
              <div className={styles.ctaBoxActions}>
                <Link href="/contact" className="btn btn-gold btn-lg">
                  Envoyer une demande
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/2290151783329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold btn-lg"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
