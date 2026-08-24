import Image from 'next/image';
import styles from './PartnersSection.module.css';

const partners = [
  { name: 'Cotonou Accueil',                    file: 'partner-cotonou-accueil.jpg' },
  { name: 'Yélian',                              file: 'partner-yelian.png' },
  { name: 'Travel Consulting Agency',            file: 'partner-travel-consulting-agency.png' },
  { name: 'KEMAF Résidences',                    file: 'partner-kemaf-residences.png' },
  { name: 'Freedom and Serenity Solutions',      file: 'partner-freedom-serenity-solutions.png' },
  { name: "Les Amis de l'Emmanuel — Print & Services", file: 'partner-amis-emmanuel-print-services.png' },
  { name: 'Nourou & Fils Company',               file: 'partner-nourou-fils-company.png' },
  { name: '2KI Afrique',                         file: 'partner-2ki-afrique.png' },
  { name: "Angel's Floor",                       file: 'partner-angels-floor.png' },
  { name: 'Bébé Love',                           file: 'partner-bebe-love.png' },
  { name: 'YAC Service Plus',                    file: 'partner-yac-service-plus.png' },
  { name: 'thinkCreativ',                        file: 'partner-thinkcreativ.png' },
  { name: 'Fondation Gounou',                    file: 'partner-fondation-gounou.png' },
  { name: 'Power Entertainment & Groupe GLA',    file: 'partner-power-entertainment-and-gla-corporate.png' },
  { name: 'Methodic Consulting',                 file: 'partner-methodic-consulting.png' },
  { name: 'LH Corporate',                        file: 'partner-lh-corporate.png' },
  { name: 'IREDE Entertainment',                 file: 'partner-irede-entertainment.png' },
  { name: 'ANSCHIM and Co',                      file: 'partner-anschim-and-co.png' },
  { name: 'SELODIM',                             file: 'partner-selodim.png' },
  { name: 'PlayList',                            file: 'partner-playlist.png' },
  { name: 'Valteo Ingénierie',                   file: 'partner-valteo-ingenierie.png' },
  { name: 'Imprimerie PSC',                     file: 'psc sans fond (1).png' },
  { name: 'Baby Premium',                        file: 'Logo baby premium sans fond.png' },
  { name: 'MAJ Services',                        file: 'Logo MAJ SERVICES SANS FOND (1).png' },
  { name: 'CAO Consulting',                      file: 'Logo fond transparent.png' },
  { name: 'A&S Consulting',                      file: 'partner-as-consulting.svg' },
];

export default function PartnersSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="text-center">
          <div className={`eyebrow ${styles.eyebrow}`} style={{ justifyContent: 'center' }}>
            <span>Ils nous font confiance</span>
          </div>
          <h2 className={styles.title}>Nos partenaires</h2>
        </div>

        <div className={styles.grid}>
          {partners.map((p) => (
            <div key={p.name} className={styles.card} title={p.name}>
              <Image
                src={`/images/partners/${p.file}`}
                alt={p.name}
                width={140}
                height={80}
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
