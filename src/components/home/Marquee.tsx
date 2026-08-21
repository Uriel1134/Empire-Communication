import styles from './Marquee.module.css';

const items = [
  'Community Management',
  'Marketing Digital',
  'Graphisme & Design',
  'Production Vidéo',
  'Développement Web',
  'Conseil & Stratégie',
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div className={`marquee ${styles.marquee}`}>
        <div className={`marquee-track ${styles.track}`}>
          {track.map((item, i) => (
            <span key={i} className={`marquee-item ${styles.item}`}>
              {item}
              <span className={styles.dot} aria-hidden>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
