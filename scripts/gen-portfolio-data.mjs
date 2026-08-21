import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync('./portfolio_manifest.txt', 'utf-8');
const lines = raw.split('\n').filter(Boolean);

const clients = { CAO: [], FSS: [], TCA: [] };

for (const line of lines) {
  const [client, subfolder, outname] = line.split('\t');
  clients[client].push({ subfolder: subfolder || '', file: outname });
}

const clientInfo = {
  CAO: { id: 'cao', title: 'CAO Consulting', category: 'Design', location: 'Bénin · Gabon' },
  FSS: { id: 'fss', title: 'Freedom and Serenity Solutions', category: 'Campagne', location: 'États-Unis' },
  TCA: { id: 'tca', title: 'Travel Consulting Agency', category: 'Campagne', location: 'Cotonou, Bénin' },
};

function buildArray(client) {
  const folder = clientInfo[client].id;
  return clients[client].map((item) => `'/images/portfolio/${folder}/${item.file}'`).join(',\n      ');
}

const out = `// Auto-généré à partir de public/images/Projet — ne pas éditer à la main.
export const portfolioProjects = [
  {
    id: 'cao',
    title: 'CAO Consulting',
    category: 'Design',
    client: 'CAO Consulting',
    location: 'Bénin · Gabon',
    tags: ['Identité visuelle', 'Cartes de visite', 'Community Management'],
    description:
      "Accompagnement complet de ce cabinet de conseil stratégique : identité de marque, supports imprimés (cartes de visite, packaging) et animation des réseaux sociaux.",
    gallery: [
      ${buildArray('CAO')}
    ],
  },
  {
    id: 'fss',
    title: 'Freedom and Serenity Solutions',
    category: 'Campagne',
    client: 'Freedom and Serenity Solutions',
    location: 'États-Unis',
    tags: ['Community Management', 'Design graphique'],
    description:
      "Création de contenus et animation des réseaux sociaux pour ce cabinet de conseil en prévoyance et assurance-vie basé aux États-Unis.",
    gallery: [
      ${buildArray('FSS')}
    ],
  },
  {
    id: 'tca',
    title: 'Travel Consulting Agency',
    category: 'Campagne',
    client: 'Travel Consulting Agency',
    location: 'Cotonou, Bénin',
    tags: ['Community Management', 'Design graphique'],
    description:
      "Stratégie de contenu et animation des réseaux sociaux pour cette agence spécialisée dans l'accompagnement aux démarches de voyage et de visa.",
    gallery: [
      ${buildArray('TCA')}
    ],
  },
];

export const portfolioCategories = ['Tout', 'Design', 'Campagne'];
`;

writeFileSync('./src/lib/portfolio-projects.ts', out);
console.log('Wrote src/lib/portfolio-projects.ts');
console.log('CAO:', clients.CAO.length, 'FSS:', clients.FSS.length, 'TCA:', clients.TCA.length);
