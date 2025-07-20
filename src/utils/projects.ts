export interface ProjectType {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repo?: string
  demoUrl?: string
  // Nuovi campi per presentazione dettagliata
  longDescription?: string
  problem?: string
  solution?: string
  features?: string[]
  techStack?: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    apis?: string[]
  }
  architecture?: {
    type: string
    description: string
    diagram?: string
  }
  screenshots?: {
    title: string
    description: string
    imageUrl: string
  }[]
  timeline?: {
    phase: string
    duration: string
    status: 'completed' | 'in-progress' | 'planned'
    achievements: string[]
  }[]
  metrics?: {
    category: string
    metrics: {
      name: string
      value: string
      unit?: string
      change?: string
      trend?: 'up' | 'down' | 'stable'
    }[]
  }[]
  challenges?: string[]
  learnings?: string[]
  workflow?: {
    step: number
    title: string
    description: string
    icon: string
  }[]
}

export const projects: ProjectType[] = [
  {
    id: 'sore-pwa',
    title: 'SORE',
    description:
      "Un'applicazione web progressiva completa con backend e funzionalità fullstack per la gestione delle attività.",
    tags: ['React', 'Backend', 'Fullstack', 'PWA'],
    imageUrl: 'https://placehold.co/400x300/0D0221/00FFFF?text=Sore',
    repo: 'Payd3r/SORE',
    demoUrl: '#',
    longDescription: 'SORE è un album fotografico digitale intelligente progettato specificamente per le coppie, che combina tecnologie AI moderne con un\'esperienza utente straordinaria per organizzare e condividere i momenti più preziosi.',
    problem: 'Frammentazione dei ricordi digitali tra diversi dispositivi e mancanza di un sistema che potesse organizzare automaticamente le foto in base al contenuto e al contesto.',
    solution: 'Piattaforma PWA completa con classificazione AI automatica, integrazione musicale Spotify, mappe interattive e sistema di notifiche push per un\'esperienza condivisa tra coppie.',
    features: [
      'Upload multiplo con drag & drop e ottimizzazione automatica WebP',
      'Classificazione AI automatica (paesaggio/coppia/singolo/cibo)',
      'Integrazione Spotify per associare musica ai ricordi',
      'Mappe interattive con clustering geografico',
      'Sistema notifiche push real-time',
      'PWA nativa con funzionalità offline complete',
      'Estrazione automatica metadati EXIF',
      'Organizzazione cronologica e per categoria'
    ],
    techStack: {
      frontend: ['React 19.0.0', 'TypeScript 5.7.2', 'Vite 6.2.0', 'Tailwind CSS 3.4.1', 'React Router DOM 7.4.0', 'TanStack React Query 5.71.1', 'React Leaflet 5.0.0', 'Framer Motion 12.6.0'],
      backend: ['Node.js 18', 'Express.js 4.18.2', 'TypeScript 5.3.3', 'Bull 4.16.5', 'Sharp 0.33.5'],
      database: ['MySQL 8.0'],
      devops: ['Docker & Docker Compose', 'Nginx', 'PM2'],
      apis: ['Google Cloud Vision API', 'TensorFlow.js 4.22.0', 'Spotify Web API', 'Web Push API']
    },
    architecture: {
      type: 'Microservices con separazione frontend/backend',
      description: 'Architettura moderna con SPA React, API RESTful, database MySQL ottimizzato, sistema di code asincrone per elaborazione immagini e storage locale con ottimizzazione WebP.',
      diagram: 'https://placehold.co/800x400/0D0221/00FFFF?text=Architecture+Diagram'
    },
    screenshots: [
      {
        title: 'Dashboard Principale',
        description: 'Interfaccia principale con galleria di ricordi organizzati cronologicamente',
        imageUrl: 'https://placehold.co/600x400/0D0221/00FFFF?text=Dashboard'
      },
      {
        title: 'Upload e Classificazione AI',
        description: 'Processo di upload multiplo con classificazione automatica in tempo reale',
        imageUrl: 'https://placehold.co/600x400/0D0221/00FFFF?text=AI+Classification'
      },
      {
        title: 'Mappe Interattive',
        description: 'Visualizzazione geografica dei ricordi con clustering automatico',
        imageUrl: 'https://placehold.co/600x400/0D0221/00FFFF?text=Interactive+Maps'
      },
      {
        title: 'Integrazione Spotify',
        description: 'Associazione di brani musicali ai ricordi tramite Spotify API',
        imageUrl: 'https://placehold.co/600x400/0D0221/00FFFF?text=Spotify+Integration'
      },
      {
        title: 'PWA Mobile',
        description: 'Esperienza nativa su dispositivi mobili con funzionalità offline',
        imageUrl: 'https://placehold.co/600x400/0D0221/00FFFF?text=Mobile+PWA'
      }
    ],
    timeline: [
      {
        phase: 'Setup Architettura',
        duration: 'Settimane 1-4',
        status: 'completed',
        achievements: ['Docker e ambiente di sviluppo', 'Schema database e API REST', 'Autenticazione JWT']
      },
      {
        phase: 'Core Functionality',
        duration: 'Settimane 5-8',
        status: 'completed',
        achievements: ['Sistema upload immagini', 'Google Vision API', 'Classificazione AI']
      },
      {
        phase: 'Frontend e UX',
        duration: 'Settimane 9-12',
        status: 'completed',
        achievements: ['Interfaccia React', 'PWA implementation', 'Performance mobile']
      },
      {
        phase: 'Integrazioni Avanzate',
        duration: 'Settimane 13-16',
        status: 'completed',
        achievements: ['Spotify API', 'Notifiche push', 'Testing completo']
      }
    ],
    metrics: [
      {
        category: 'Performance',
        metrics: [
          {
            name: 'Lighthouse Score',
            value: '95',
            unit: '/100',
            trend: 'up'
          },
          {
            name: 'Bundle Size',
            value: '450',
            unit: 'KB',
            trend: 'down'
          },
          {
            name: 'Load Time',
            value: '1.2',
            unit: 's',
            trend: 'down'
          }
        ]
      },
      {
        category: 'User Satisfaction',
        metrics: [
          {
            name: 'Rating',
            value: '4.8',
            unit: '/5',
            trend: 'up'
          },
          {
            name: 'Success Rate',
            value: '95',
            unit: '%',
            trend: 'up'
          },
          {
            name: 'Mobile Satisfaction',
            value: '90',
            unit: '%',
            trend: 'up'
          }
        ]
      },
      {
        category: 'Technical',
        metrics: [
          {
            name: 'Uptime',
            value: '99.9',
            unit: '%',
            trend: 'stable'
          },
          {
            name: 'Response Time',
            value: '180',
            unit: 'ms',
            trend: 'down'
          },
          {
            name: 'Error Rate',
            value: '0.1',
            unit: '%',
            trend: 'down'
          }
        ]
      }
    ],
    challenges: [
      'Elaborazione immagini multiple con timeout',
      'Classificazione AI accurata su dispositivi mobili',
      'Sincronizzazione real-time tra dispositivi',
      'Ottimizzazione performance per PWA',
      'Gestione cache intelligente per funzionalità offline'
    ],
    learnings: [
      'Importanza dell\'elaborazione asincrona con code',
      'Strategie multiple di cache per esperienza offline',
      'Approccio incrementale all\'ottimizzazione',
      'Design mobile-first per PWA native',
      'Robustezza nelle integrazioni API esterne'
    ],
    workflow: [
      {
        step: 1,
        title: 'Upload',
        description: 'Selezione multipla → Ottimizzazione client-side → Upload → Elaborazione asincrona',
        icon: 'upload'
      },
      {
        step: 2,
        title: 'Classificazione',
        description: 'Analisi AI → Categorizzazione → Tagging automatico',
        icon: 'check'
      },
      {
        step: 3,
        title: 'Organizzazione',
        description: 'Creazione memoria → Associazione immagini → Aggiunta metadati',
        icon: 'settings'
      },
      {
        step: 4,
        title: 'Condivisione',
        description: 'Notifiche automatiche → Sincronizzazione real-time',
        icon: 'eye'
      },
      {
        step: 5,
        title: 'Esplorazione',
        description: 'Navigazione per categoria → Ricerca geografica → Filtri temporali',
        icon: 'download'
      }
    ]
  },
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
