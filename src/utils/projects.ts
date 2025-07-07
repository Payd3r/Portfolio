export interface ProjectType {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repo?: string
}

export const projects: ProjectType[] = [
  {
    id: 'gestionale-calcio',
    title: 'Gestionale Calcio',
    description:
      'Una piattaforma completa per la gestione di squadre e tornei di calcio, realizzata in PHP.',
    tags: ['PHP', 'Backend', 'Fullstack'],
    imageUrl: 'https://placehold.co/400x300/0D0221/39FF14?text=Gestionale',
    repo: 'Payd3r/gestionale-calcio',
  },
  {
    id: 'react-pwa',
    title: 'React PWA',
    description:
      "Un'applicazione web progressiva per la gestione delle attività, costruita con React.",
    tags: ['React', 'Frontend', 'PWA'],
    imageUrl: 'https://placehold.co/400x300/0D0221/00FFFF?text=PWA',
    repo: 'Payd3r/react-pwa-todo',
  },
  {
    id: 'gestionale-ecommerce',
    title: 'Gestionale Ecommerce',
    description:
      'Sistema di gestione per un negozio online, con backend in Django e frontend in React.',
    tags: ['Django', 'React', 'Fullstack'],
    imageUrl: 'https://placehold.co/400x300/0D0221/BC00FF?text=Ecommerce',
    repo: 'Payd3r/ecommerce-drf-react',
  },
  {
    id: 'galleria-iphone',
    title: 'Galleria iPhone (WIP)',
    description:
      'Una galleria 3D interattiva per visualizzare modelli di iPhone, in fase di sviluppo.',
    tags: ['Three.js', 'Frontend', '3D'],
    imageUrl: 'https://placehold.co/400x300/221C35/FFFFFF?text=WIP',
  },
]
