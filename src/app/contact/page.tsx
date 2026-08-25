'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

const agencies = [
  {
    id: 'libreville',
    city: 'Libreville',
    country: 'Gabon',
    flag: '🇬🇦',
    address: 'Carrefour Béninois, Libreville',
    phone: '+241 074 829 240',
    whatsapp: '241074829240',
    email: 'libreville@empirecommunication.org',
    hours: 'Lun–Sam : 8h–18h (GMT+1)',
    mapsUrl: 'https://maps.google.com/?q=Carrefour+Beninois+Libreville+Gabon',
  },
  {
    id: 'cotonou',
    city: 'Cotonou',
    country: 'Bénin',
    flag: '🇧🇯',
    address: 'Centre-ville, Cotonou',
    phone: '+229 01 51 78 33 29',
    whatsapp: '2290151783329',
    email: 'cotonou@empirecommunication.org',
    hours: 'Lun–Sam : 8h–18h (GMT+1)',
    mapsUrl: 'https://maps.google.com/?q=Cotonou+Centre+Benin',
  },
];

const services = [
  'Community Management', 'Marketing Digital', 'Graphisme & Design',
  'Montage Vidéo', 'Développement Web', 'Stratégie & Conseil', 'Formation', 'Autre',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className="section-label">Contactez-Nous</div>
            <h1 className={styles.heroTitle}>
              Parlons de <span className="text-gold">Votre Projet</span>
            </h1>
            <div className="gold-line" />
            <p className={styles.heroDesc}>
              Devis gratuit en 24h • Réponse garantie • Sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Contact Info */}
            <div className={styles.infoCol}>
              <h2 className={styles.infoTitle}>Nos Agences</h2>
              <div className={styles.agencies}>
                {agencies.map((a) => (
                  <div key={a.id} className={`card ${styles.agencyCard}`}>
                    <div className={styles.agencyHeader}>
                      <span className={styles.flag}>{a.flag}</span>
                      <div>
                        <h3 className={styles.agencyCity}>{a.city}</h3>
                        <span className={styles.agencyCountry}>{a.country}</span>
                      </div>
                    </div>
                    <div className={styles.contactList}>
                      <div className={styles.contactItem}>
                        <MapPin size={16} className={styles.contactIcon} />
                        <span>{a.address}</span>
                      </div>
                      <div className={styles.contactItem}>
                        <Phone size={16} className={styles.contactIcon} />
                        <a href={`tel:${a.phone.replace(/\s/g, '')}`}>{a.phone}</a>
                      </div>
                      <div className={styles.contactItem}>
                        <Mail size={16} className={styles.contactIcon} />
                        <a href={`mailto:${a.email}`}>{a.email}</a>
                      </div>
                      <div className={styles.contactItem}>
                        <Clock size={16} className={styles.contactIcon} />
                        <span>{a.hours}</span>
                      </div>
                    </div>
                    <div className={styles.agencyActions}>
                      <a
                        href={a.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <ExternalLink size={14} />
                        Google Maps
                      </a>
                      <a
                        href={`https://wa.me/${a.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <MessageCircle size={14} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email général */}
              <div className={`card ${styles.emailCard}`}>
                <Mail size={24} className={styles.emailIcon} />
                <div>
                  <div className={styles.emailLabel}>Email général</div>
                  <a href="mailto:direction@empirecommunication.org" className={styles.emailValue}>
                    direction@empirecommunication.org
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Envoyer un Message</h2>
                <p className={styles.formSubtitle}>Réponse garantie sous 24h ouvrées.</p>

                {submitted ? (
                  <div className={styles.success}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>Message envoyé !</h3>
                    <p className={styles.successDesc}>
                      Merci pour votre message. Notre équipe vous répondra dans les 24 heures.
                    </p>
                  </div>
                ) : (
                  <form className={styles.form} onSubmit={handleSubmit}>
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
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" placeholder="votre@email.com" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Téléphone *</label>
                        <input className="form-input" type="tel" placeholder="+241 / +229..." required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Votre entreprise</label>
                      <input className="form-input" type="text" placeholder="Nom de votre entreprise" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Service souhaité *</label>
                      <select className="form-input" required>
                        <option value="">Choisir un service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Budget estimé</label>
                      <select className="form-input">
                        <option value="">Sélectionner...</option>
                        <option>Moins de 100 000 FCFA</option>
                        <option>100 000 – 500 000 FCFA</option>
                        <option>500 000 – 1 000 000 FCFA</option>
                        <option>Plus de 1 000 000 FCFA</option>
                        <option>À définir ensemble</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Décrivez votre projet *</label>
                      <textarea
                        className="form-input"
                        rows={5}
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos délais..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                      disabled={loading}
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                      {!loading && <Send size={16} />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
