export interface ProjectType {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repo?: string
  demoUrl?: string
}

export const projects: ProjectType[] = [
  {
    id: 'galleria-iphone',
    title: 'Galleria iPhone (WIP)',
    description:
      'Una galleria 3D interattiva per visualizzare modelli di iPhone, in fase di sviluppo.',
    tags: ['Three.js', 'Frontend', '3D', 'WIP'],
    imageUrl: 'https://placehold.co/400x300/221C35/FFFFFF?text=WIP',
    repo: 'Payd3r/galleria-iphone-threejs-react',
  },
  {
    id: 'sore-pwa',
    title: 'Sore',
    description:
      "Un'applicazione web progressiva completa con backend e funzionalità fullstack per la gestione delle attività.",
    tags: ['React', 'Backend', 'Fullstack', 'PWA'],
    imageUrl: 'https://placehold.co/400x300/0D0221/00FFFF?text=Sore',
    repo: 'Payd3r/react-pwa-todo',
    demoUrl: '#',
  },
  {
    id: 'gestionale-ecommerce',
    title: 'Gestionale Ecommerce',
    description:
      'Sistema di gestione completo per un negozio online, con backend robusto e API RESTful.',
    tags: ['Django', 'React', 'Backend', 'Fullstack'],
    imageUrl: 'https://placehold.co/400x300/0D0221/BC00FF?text=Ecommerce',
    repo: 'Payd3r/ecommerce-drf-react',
  },
  {
    id: 'gestionale-calcio',
    title: 'Gestionale Calcio',
    description:
      'Una piattaforma frontend per la gestione di squadre e tornei di calcio con interfaccia utente moderna.',
    tags: ['PHP', 'Frontend', 'Web'],
    imageUrl: 'https://placehold.co/400x300/0D0221/39FF14?text=Gestionale',
    repo: 'Payd3r/gestionale-calcio',
    demoUrl: '#',
  },
]
