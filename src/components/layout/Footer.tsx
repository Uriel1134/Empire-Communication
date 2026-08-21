'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Share2, Rss, PlayCircle, Briefcase, ArrowRight, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const services = ['Community Management', 'Marketing Digital', 'Graphisme & Design', 'Production Vidéo', 'Développement Web', 'Conseil & Stratégie'];
const company  = [{ href: '/a-propos', label: 'À Propos' }, { href: '/services', label: 'Services' }, { href: '/formations', label: 'Académie' }, { href: '/portfolio', label: 'Portfolio' }, { href: '/contact', label: 'Contact' }];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* CTA Band */}
      <div className={styles.ctaBand}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <div className={styles.ctaTitle}>Prêt à amplifier votre présence digitale ?</div>
              <div className={styles.ctaSub}>Discutons de votre projet dès aujourd'hui.</div>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn btn-gold btn-lg">
                Démarrer un projet <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/2290151783329" target="_blank" rel="noopener noreferrer" className="btn btn-outline-gold btn-lg">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logoWrap}>
                <Image src="/logo.png" alt="Empire" width={52} height={52} className={styles.logoImg} />
                <div>
                  <div className={styles.logoName}>EMPIRE</div>
                  <div className={styles.logoSub}>COMMUNICATION</div>
                </div>
              </Link>
              <p className={styles.tagline}>Stratégie · Innovation · Croissance</p>
              <p className={styles.brandDesc}>
                Agence de communication digitale et marketing implantée au Gabon et au Bénin. 
                Votre partenaire digital de confiance en Afrique Centrale et de l'Ouest.
              </p>
              <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Share2 size={16} /></a>
                <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Rss size={16} /></a>
                <a href="https://youtube.com"   target="_blank" rel="noopener noreferrer" aria-label="YouTube"><PlayCircle size={16} /></a>
                <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Briefcase size={16} /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <div className={styles.colTitle}>Services</div>
              <ul className={styles.linkList}>
                {services.map((s) => (
                  <li key={s}>
                    <Link href="/services" className={styles.link}>{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className={styles.colTitle}>Agence</div>
              <ul className={styles.linkList}>
                {company.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className={styles.link}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className={styles.colTitle}>Contact</div>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <MapPin size={14} className={styles.contactIcon} />
                  <div>
                    <div className={styles.contactLbl}>🇬🇦 Libreville, Gabon</div>
                    <div className={styles.contactVal}>Carrefour Béninois</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={14} className={styles.contactIcon} />
                  <div>
                    <div className={styles.contactLbl}>🇧🇯 Cotonou, Bénin</div>
                    <div className={styles.contactVal}>Centre-ville</div>
                  </div>
                </div>
                <a href="tel:+241074829240" className={styles.contactItem}>
                  <Phone size={14} className={styles.contactIcon} />
                  <span className={styles.contactVal}>🇬🇦 +241 074 829 240</span>
                </a>
                <a href="tel:+2290151783329" className={styles.contactItem}>
                  <Phone size={14} className={styles.contactIcon} />
                  <span className={styles.contactVal}>🇧🇯 +229 01 51 78 33 29</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Empire Communications. Tous droits réservés.
            </p>
            <p className={styles.credits}>
              Libreville · Cotonou
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
