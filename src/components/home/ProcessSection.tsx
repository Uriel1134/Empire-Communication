import { Search, ListChecks, CalendarClock, Rocket } from 'lucide-react';
import styles from './ProcessSection.module.css';

const steps = [
  { icon: <Search size={22} />,        title: 'Comprendre vos besoins',   desc: 'Un échange approfondi pour cerner vos objectifs et vos contraintes.' },
  { icon: <ListChecks size={22} />,     title: 'Choisir les bons leviers', desc: 'Sélection des services et de la stratégie adaptés à votre budget.' },
  { icon: <CalendarClock size={22} />,  title: 'Planifier & exécuter',     desc: 'Un calendrier clair et une équipe dédiée pour chaque livrable.' },
  { icon: <Rocket size={22} />,         title: 'Livrer & mesurer',         desc: 'Résultats livrés avec un reporting transparent et mesurable.' },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text-center">
          <div className={`eyebrow ${styles.eyebrow}`} style={{ justifyContent: 'center' }}>
            <span>Notre méthode</span>
          </div>
          <h2 className={styles.title}>Comment nous travaillons</h2>
        </div>

        <div className={styles.track}>
          <div className={styles.line} aria-hidden />
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className="step-num">0{i + 1}</div>
              <div className={styles.stepIcon}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
