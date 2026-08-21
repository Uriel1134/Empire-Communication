import { Users, Award, Building2, Clock } from 'lucide-react';
import styles from './StatsBand.module.css';

const stats = [
  { icon: <Users size={22} />,     value: '200', suffix: '+', label: 'Clients accompagnés' },
  { icon: <Award size={22} />,     value: '11',  suffix: '+', label: "Années d'expérience" },
  { icon: <Building2 size={22} />, value: '2',   suffix: '',  label: 'Agences (Libreville, Cotonou)' },
  { icon: <Clock size={22} />,     value: '24',  suffix: 'h', label: 'Délai de réponse' },
];

export default function StatsBand() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={`eyebrow ${styles.eyebrow}`}>
            <span>Notre impact</span>
          </div>
          <h2 className={styles.title}>Une croissance qui s&apos;accélère.</h2>
        </div>

        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <div className={styles.value}>{s.value}<span className={styles.suffix}>{s.suffix}</span></div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
