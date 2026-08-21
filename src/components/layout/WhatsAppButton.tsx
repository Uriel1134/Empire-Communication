'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2290151783329?text=Bonjour%20Empire%20Communication%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
      aria-label="Contacter sur WhatsApp"
      id="whatsapp-floating-btn"
    >
      <MessageCircle size={28} />
      <span className={styles.tooltip}>Discutons sur WhatsApp !</span>
    </a>
  );
}
