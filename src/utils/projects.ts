import { ProjectType } from '@/types/project'

// Helper per ottenere progetti per categoria
export const getProjectsByCategory = () => {
  const mainProjects = projects.filter(p => p.category === 'main')
  const universityProjects = projects.filter(p => p.context?.type === 'university')
  const workProjects = projects.filter(p => p.context?.type === 'work')
  const personalProjects = projects.filter(p => p.context?.type === 'personal')

  return {
    main: mainProjects,
    university: universityProjects,
    work: workProjects,
    personal: personalProjects
  }
}

// Helper per ottenere un progetto specifico
export const getProjectById = (id: string): ProjectType | undefined => {
  return projects.find(p => p.id === id)
}

export const projects: ProjectType[] = [
  {
    id: 'sore',
    title: 'SORE',
    description: 'Applicazione per coppie per condividere i propri ricordi digitali',
    longDescription: 'Applicazione completa per coppie con possibilità di creare ricordi con immagini e canzoni, posizione, timeline del ricordo e ricordi di vario tipo. Integrazione PWA con notifiche e upload in background, possibilità di creare idee, applicazione con statistiche e moderna.',
    category: 'main',
    imageUrl: '/src/assets/projects/sore-main.jpg',
    githubUrl: 'https://github.com/Payd3r/SORE',
    demoUrl: 'https://sore.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'PWA', 'Firebase', 'Notifications'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'personal',
      year: '2024'
    },
    problem: 'Condivisione di ricordi digitali tra coppie con integrazione multimediale',
    solution: 'App PWA moderna con timeline interattiva e notifiche push',
    features: [
      'Timeline ricordi',
      'Integrazione immagini e musica',
      'Geolocalizzazione',
      'Notifiche push',
      'Upload background',
      'Statistiche condivise'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'PWA'],
      backend: ['Firebase'],
      storage: ['Firebase Storage'],
      notifications: ['Push API']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/sore-screenshot-1.jpg', caption: 'Timeline ricordi' },
      { imageUrl: '/src/assets/projects/sore-screenshot-2.jpg', caption: 'Creazione ricordo' },
      { imageUrl: '/src/assets/projects/sore-screenshot-3.jpg', caption: 'Statistiche' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-03',
      duration: '3 mesi'
    },
    metrics: {
      users: '100+',
      memories: '500+',
      satisfaction: '4.8/5'
    },
    challenges: [
      'Sincronizzazione real-time',
      'Gestione file multimediali',
      'PWA offline functionality'
    ],
    learnings: [
      'PWA best practices',
      'Firebase real-time database',
      'Push notifications'
    ],
    workflow: 'Design → Sviluppo PWA → Testing → Deploy'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Portfolio moderno per presentarmi e far vedere i miei progetti',
    longDescription: 'Portfolio personale moderno sviluppato con React e TypeScript, featuring animazioni fluide e design moderno per presentare i progetti e le competenze.',
    category: 'main',
    imageUrl: '/src/assets/projects/portfolio-main.jpg',
    githubUrl: 'https://github.com/Payd3r/Portfolio',
    demoUrl: 'https://portfolio.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'personal',
      year: '2024'
    },
    problem: 'Necessità di un portfolio professionale per mostrare competenze e progetti',
    solution: 'Sito web moderno con animazioni fluide e design responsive',
    features: [
      'Design responsive',
      'Animazioni fluide',
      'Galleria progetti',
      'Sezione contatti',
      'Dark/Light mode'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      animations: ['Framer Motion', 'GSAP'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/portfolio-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/portfolio-screenshot-2.jpg', caption: 'Galleria progetti' },
      { imageUrl: '/src/assets/projects/portfolio-screenshot-3.jpg', caption: 'Dettaglio progetto' }
    ],
    timeline: {
      startDate: '2024-02',
      endDate: '2024-03',
      duration: '1 mese'
    },
    metrics: {
      visitors: '1000+',
      projects: '10+',
      performance: '95/100'
    },
    challenges: [
      'Ottimizzazione animazioni',
      'SEO e performance',
      'Design system coerente'
    ],
    learnings: [
      'Pattern di animazione avanzati',
      'Ottimizzazione bundle size',
      'Best practices SEO'
    ],
    workflow: 'Design → Sviluppo → Ottimizzazione → Deploy'
  },
  {
    id: 'gestionale',
    title: 'E-commerce Gestionale',
    description: 'Applicazione web per gestire un magazzino locale, un negozio fisico e vari store online',
    longDescription: 'Sistema gestionale completo sviluppato per Abbamoda, utilizzato in produzione per la gestione del negozio fisico e online. Gestione di due negozi Shopify, uno eBay e uno Amazon con sincronizzazioni settimanali, cassa per negozio tramite webapp, editing di immagini e gestione delle info sui vari canali.',
    category: 'main',
    imageUrl: '/src/assets/projects/gestionale-main.jpg',
    githubUrl: 'https://github.com/lucacatt/gestionale',
    demoUrl: 'https://gestionale-abbamoda.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Docker', 'Nginx', 'Shopify', 'Amazon', 'eBay'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'work',
      company: 'Abbamoda',
      duration: '6+ mesi',
      thesis: '/src/assets/documents/tesi-abbamoda.pdf',
      year: '2023'
    },
    problem: 'Gestione complessa di inventario, vendite e clienti per negozio fisico e online',
    solution: 'Sistema integrato per gestione completa del business multi-canale',
    features: [
      'Gestione inventario',
      'Sistema vendite',
      'Gestione clienti',
      'Report analytics',
      'Integrazione POS',
      'Sincronizzazione multi-canale',
      'Cassa webapp',
      'Editing immagini'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MySQL'],
      ecommerce: ['Shopify', 'Amazon API', 'eBay API'],
      deployment: ['Docker', 'Nginx', 'PM2']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/gestionale-screenshot-1.jpg', caption: 'Dashboard vendite' },
      { imageUrl: '/src/assets/projects/gestionale-screenshot-2.jpg', caption: 'Gestione inventario' },
      { imageUrl: '/src/assets/projects/gestionale-screenshot-3.jpg', caption: 'Report analytics' }
    ],
    timeline: {
      startDate: '2023-06',
      endDate: '2024-01',
      duration: '7 mesi'
    },
    metrics: {
      transactions: '1000+',
      products: '500+',
      revenue: '€50k+'
    },
    challenges: [
      'Integrazione sistemi legacy',
      'Gestione concorrenza database',
      'Sicurezza dati sensibili',
      'Sincronizzazione multi-canale'
    ],
    learnings: [
      'Architettura microservizi',
      'Ottimizzazione database',
      'Sicurezza applicazioni',
      'API integration'
    ],
    workflow: 'Analisi → Sviluppo → Testing → Deploy → Manutenzione'
  },
  {
    id: 'pane-salame',
    title: 'E-commerce Pane & Salame',
    description: 'E-commerce completo per la gestione di vari negozi locali',
    longDescription: 'E-commerce completo per la gestione di vari negozi locali con possibilità di utenti, artigiani e admin. Gestione di ordini, approvazione e spedizione con varie dashboard diverse per artigiani e admin. Prodotti, ordini, segnalazioni e categorie. Pagina di monitoring e dashboard per il sito principale su un altro IP.',
    category: 'main',
    imageUrl: '/src/assets/projects/pane-salame-main.jpg',
    githubUrl: 'https://github.com/Payd3r/ecommerce',
    demoUrl: 'https://panesalame.andrea-mauri.duckdns.org/',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'university',
      course: 'Tecnologie innovative per lo sviluppo web',
      year: '2023'
    },
    problem: 'Creazione di un e-commerce per prodotti alimentari con gestione ordini',
    solution: 'Piattaforma completa con sistema di pagamento integrato e dashboard multi-ruolo',
    features: [
      'Catalogo prodotti',
      'Carrello acquisti',
      'Sistema pagamenti',
      'Gestione ordini',
      'Area amministratore',
      'Dashboard artigiani',
      'Sistema approvazioni',
      'Monitoring separato'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      payments: ['Stripe']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-2.jpg', caption: 'Catalogo prodotti' },
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-3.jpg', caption: 'Checkout' }
    ],
    timeline: {
      startDate: '2023-10',
      endDate: '2023-12',
      duration: '3 mesi'
    },
    metrics: {
      products: '100+',
      orders: '50+',
      revenue: '€5k+'
    },
    challenges: [
      'Integrazione pagamenti',
      'Gestione inventario',
      'UX mobile',
      'Dashboard multi-ruolo'
    ],
    learnings: [
      'API Stripe',
      'Gestione stato complesso',
      'Design e-commerce',
      'Role-based access'
    ],
    workflow: 'Design → Sviluppo → Testing → Deploy'
  },
  {
    id: 'fitness-bodybuilding',
    title: 'Fitness & Bodybuilding',
    description: 'Applicazione in Kotlin per smartphone per tener traccia dell\'allenamento',
    longDescription: 'Applicazione in Kotlin per smartphone per tener traccia dell\'allenamento con schede, utenti e allenamenti custom. Possibilità di far partire l\'attività e tener traccia dei progressi.',
    category: 'main',
    imageUrl: '/src/assets/projects/fitness-main.jpg',
    githubUrl: 'https://github.com/lucacatt/Fitness_and_Bodybuilding',
    demoUrl: 'https://fitness-app.vercel.app',
    tags: ['Kotlin', 'Android', 'SQLite', 'Material Design'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'university',
      year: '2023'
    },
    problem: 'Tracking complesso di allenamenti e progressi fitness',
    solution: 'App mobile nativa con interfaccia intuitiva e statistiche avanzate',
    features: [
      'Tracking allenamenti',
      'Statistiche progressi',
      'Obiettivi personalizzati',
      'Sincronizzazione cloud',
      'Social features',
      'Schede personalizzate'
    ],
    techStack: {
      mobile: ['Kotlin', 'Android SDK'],
      database: ['SQLite'],
      ui: ['Material Design'],
      deployment: ['Google Play Store']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/fitness-screenshot-1.jpg', caption: 'Dashboard allenamenti' },
      { imageUrl: '/src/assets/projects/fitness-screenshot-2.jpg', caption: 'Tracking esercizi' },
      { imageUrl: '/src/assets/projects/fitness-screenshot-3.jpg', caption: 'Statistiche progressi' }
    ],
    timeline: {
      startDate: '2023-09',
      endDate: '2023-11',
      duration: '3 mesi'
    },
    metrics: {
      users: '200+',
      workouts: '1000+',
      ratings: '4.5/5'
    },
    challenges: [
      'Sincronizzazione offline',
      'Performance mobile',
      'UX intuitiva'
    ],
    learnings: [
      'Kotlin best practices',
      'Android development',
      'Mobile UX design'
    ],
    workflow: 'Design → Sviluppo Mobile → Testing → Deploy'
  },
  {
    id: 'tracking-spese',
    title: 'Tracking Spese',
    description: 'Applicazione web con PWA e integrazione per iPhone per il controllo spese',
    longDescription: 'Applicazione web con PWA e integrazione per iPhone per il controllo spese con gestione di conti, categorie. Possibilità di tener traccia delle spese giornaliere con statistiche sui lunghi periodi con design futuristico e minimale.',
    category: 'main',
    imageUrl: '/src/assets/projects/tracking-spese-main.jpg',
    githubUrl: 'https://github.com/Payd3r/Tracking_Spese',
    demoUrl: 'https://spese.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'PWA', 'Firebase', 'Chart.js'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'personal',
      year: '2023'
    },
    problem: 'Gestione e analisi delle spese personali',
    solution: 'App PWA con dashboard interattiva e report dettagliati',
    features: [
      'Tracking spese',
      'Categorizzazione',
      'Budget mensili',
      'Report grafici',
      'Esportazione dati',
      'Design futuristico'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Firebase'],
      charts: ['Chart.js'],
      pwa: ['Service Workers'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/tracking-spese-screenshot-1.jpg', caption: 'Dashboard spese' },
      { imageUrl: '/src/assets/projects/tracking-spese-screenshot-2.jpg', caption: 'Aggiunta spesa' },
      { imageUrl: '/src/assets/projects/tracking-spese-screenshot-3.jpg', caption: 'Report mensili' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-02',
      duration: '2 mesi'
    },
    metrics: {
      transactions: '500+',
      categories: '15+',
      savings: '€2000+'
    },
    challenges: [
      'Gestione dati real-time',
      'Ottimizzazione grafici',
      'UX mobile',
      'PWA offline'
    ],
    learnings: [
      'Firebase real-time database',
      'Chart.js integration',
      'State management',
      'PWA development'
    ],
    workflow: 'Design → Sviluppo → Testing → Deploy'
  },
  {
    id: 'gestionale-calcio',
    title: 'Gestionale Calcio',
    description: 'Sito completamente realizzato in PHP per gestire una società calcistica',
    longDescription: 'Sito completamente realizzato in PHP per gestire una società calcistica con possibilità di creare squadre, giocatori e gestire il materiale e organizzare il calendario degli eventi con una galleria e la possibilità di creare locandine.',
    category: 'main',
    imageUrl: '/src/assets/projects/gestionale-calcio-main.jpg',
    githubUrl: 'https://github.com/GerosaSimone/GestioneProgetto',
    demoUrl: 'https://gestionale-calcio.vercel.app',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'university',
      year: '2023'
    },
    problem: 'Gestione complessa di squadre, giocatori e partite',
    solution: 'Sistema integrato per gestione completa del team calcistico',
    features: [
      'Gestione giocatori',
      'Pianificazione allenamenti',
      'Tracking partite',
      'Statistiche squadra',
      'Area amministratore',
      'Galleria foto',
      'Creazione locandine'
    ],
    techStack: {
      backend: ['PHP'],
      database: ['MySQL'],
      frontend: ['HTML', 'CSS', 'JavaScript'],
      deployment: ['Apache']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/gestionale-calcio-screenshot-1.jpg', caption: 'Dashboard squadra' },
      { imageUrl: '/src/assets/projects/gestionale-calcio-screenshot-2.jpg', caption: 'Gestione giocatori' },
      { imageUrl: '/src/assets/projects/gestionale-calcio-screenshot-3.jpg', caption: 'Statistiche partite' }
    ],
    timeline: {
      startDate: '2023-03',
      endDate: '2023-06',
      duration: '4 mesi'
    },
    metrics: {
      players: '25+',
      matches: '30+',
      teams: '3+'
    },
    challenges: [
      'Gestione ruoli utenti',
      'Sincronizzazione dati',
      'UX per mobile'
    ],
    learnings: [
      'Role-based access control',
      'Real-time updates',
      'Mobile-first design'
    ],
    workflow: 'Analisi → Sviluppo → Testing → Deploy'
  },
  {
    id: 'car-to-auction',
    title: 'CAR to Auction',
    description: 'Sito per aste auto online',
    longDescription: 'Partecipazione in un team Fiverr per un\'app di aste auto. Gestione di problemi di pagamento e grafici sulla homepage.',
    category: 'main',
    imageUrl: '/src/assets/projects/car-to-auction-main.jpg',
    githubUrl: 'https://github.com/teamicon/car-to-auction',
    demoUrl: 'https://car-to-auction.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'WebSocket'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'work',
      year: '2024'
    },
    problem: 'Piattaforma per aste auto con gestione pagamenti e garage utenti',
    solution: 'App completa con sistema di aste real-time e pagamenti sicuri',
    features: [
      'Sistema aste real-time',
      'Gestione garage utenti',
      'Sistema pagamenti',
      'Chat integrata',
      'Dashboard venditore'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB'],
      payments: ['Stripe'],
      realtime: ['WebSocket']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/car-to-auction-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/car-to-auction-screenshot-2.jpg', caption: 'Asta in corso' },
      { imageUrl: '/src/assets/projects/car-to-auction-screenshot-3.jpg', caption: 'Gestione garage' }
    ],
    timeline: {
      startDate: '2024-02',
      endDate: '2024-04',
      duration: '3 mesi'
    },
    metrics: {
      users: '500+',
      auctions: '100+',
      revenue: '€25k+'
    },
    challenges: [
      'Sistema aste real-time',
      'Integrazione pagamenti',
      'Gestione concorrenza'
    ],
    learnings: [
      'WebSocket implementation',
      'Payment gateway integration',
      'Real-time bidding system'
    ],
    workflow: 'Analisi → Sviluppo → Testing → Deploy'
  },
  {
    id: 'revai',
    title: 'REVAI',
    description: 'Sito vetrina per presentare i progetti landing page a negozi e ristoranti',
    longDescription: 'Sito vetrina per presentare i progetti landing page a negozi e ristoranti con showcase dei lavori realizzati.',
    category: 'landing',
    imageUrl: '/src/assets/projects/revai-main.jpg',
    githubUrl: 'https://github.com/Payd3r/Landingpage',
    demoUrl: 'https://revai.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'work',
      year: '2024'
    },
    beforeAfter: {
      before: '/src/assets/projects/revai-before.jpg',
      after: '/src/assets/projects/revai-after.jpg',
      description: 'Trasformazione completa del design con focus su conversione e UX moderna'
    },
    clientReview: {
      name: 'Marco Rossi',
      role: 'CEO REVAI',
      review: 'La nuova landing page ha aumentato le conversioni del 150% e migliorato significativamente l\'esperienza utente.',
      rating: 5
    },
    problem: 'Landing page obsoleta con bassa conversione',
    solution: 'Design moderno con focus su UX e conversione',
    features: [
      'Hero section animata',
      'Sezioni interattive',
      'Call-to-action ottimizzate',
      'Design responsive',
      'Analytics integrato'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      animations: ['Framer Motion'],
      analytics: ['Google Analytics'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/revai-screenshot-1.jpg', caption: 'Hero section' },
      { imageUrl: '/src/assets/projects/revai-screenshot-2.jpg', caption: 'Sezione servizi' },
      { imageUrl: '/src/assets/projects/revai-screenshot-3.jpg', caption: 'Call-to-action' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-02',
      duration: '1 mese'
    },
    metrics: {
      conversion: '+150%',
      bounceRate: '-40%',
      loadTime: '1.2s'
    },
    challenges: [
      'Ottimizzazione conversione',
      'Performance animazioni',
      'SEO avanzato'
    ],
    learnings: [
      'Conversion rate optimization',
      'Performance optimization',
      'A/B testing'
    ],
    workflow: 'Analisi → Design → Sviluppo → Testing → Deploy'
  },
  {
    id: 'gladiatori',
    title: 'I Gladiatori',
    description: 'Landing page per ristorante pizzeria con 5 pagine e design moderno',
    longDescription: 'Landing page per ristorante pizzeria con 5 pagine e design moderno. Sviluppata per presentare il ristorante in modo professionale e accattivante.',
    category: 'landing',
    imageUrl: '/src/assets/projects/gladiatori-main.jpg',
    githubUrl: 'https://github.com/Payd3r/I-Gladiatori',
    demoUrl: 'https://gladiatori.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'work',
      year: '2024'
    },
    beforeAfter: {
      before: '/src/assets/projects/gladiatori-before.jpg',
      after: '/src/assets/projects/gladiatori-after.jpg',
      description: 'Trasformazione del sito ristorante con design moderno e UX ottimizzata'
    },
    clientReview: {
      name: 'Giuseppe Bianchi',
      role: 'Proprietario I Gladiatori',
      review: 'Il nuovo sito ha aumentato le prenotazioni del 80% e migliorato l\'immagine del ristorante.',
      rating: 5
    },
    problem: 'Sito ristorante obsoleto con bassa conversione prenotazioni',
    solution: 'Landing page moderna con focus su prenotazioni e menu',
    features: [
      'Hero section accattivante',
      'Menu interattivo',
      'Sistema prenotazioni',
      'Galleria foto',
      'Sezione contatti'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      animations: ['Framer Motion'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/gladiatori-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/gladiatori-screenshot-2.jpg', caption: 'Menu' },
      { imageUrl: '/src/assets/projects/gladiatori-screenshot-3.jpg', caption: 'Prenotazioni' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-02',
      duration: '1 mese'
    },
    metrics: {
      conversion: '+80%',
      bounceRate: '-35%',
      loadTime: '1.5s'
    },
    challenges: [
      'Design accattivante',
      'UX per prenotazioni',
      'Performance immagini'
    ],
    learnings: [
      'Restaurant website design',
      'Booking system UX',
      'Image optimization'
    ],
    workflow: 'Design → Sviluppo → Testing → Deploy'
  },
  {
    id: 'betta47',
    title: 'Betta47',
    description: 'Landing page per B&B con possibilità di prenotazione del sito',
    longDescription: 'Landing page per B&B con possibilità di prenotazione del sito. Sviluppata per presentare il bed and breakfast in modo professionale e facilitare le prenotazioni.',
    category: 'landing',
    imageUrl: '/src/assets/projects/betta47-main.jpg',
    githubUrl: 'https://github.com/Payd3r/Betta47',
    demoUrl: 'https://betta47.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Booking System'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'work',
      year: '2024'
    },
    beforeAfter: {
      before: '/src/assets/projects/betta47-before.jpg',
      after: '/src/assets/projects/betta47-after.jpg',
      description: 'Trasformazione del sito B&B con sistema di prenotazione integrato'
    },
    clientReview: {
      name: 'Maria Rossi',
      role: 'Proprietaria Betta47',
      review: 'Il nuovo sito ha aumentato le prenotazioni del 120% e migliorato l\'esperienza degli ospiti.',
      rating: 5
    },
    problem: 'Sito B&B senza sistema di prenotazione integrato',
    solution: 'Landing page con sistema di prenotazione e design accogliente',
    features: [
      'Hero section accogliente',
      'Sistema prenotazioni',
      'Galleria camere',
      'Sezione servizi',
      'Mappa interattiva'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      booking: ['Custom Booking System'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/betta47-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/betta47-screenshot-2.jpg', caption: 'Sistema prenotazioni' },
      { imageUrl: '/src/assets/projects/betta47-screenshot-3.jpg', caption: 'Galleria camere' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-02',
      duration: '1 mese'
    },
    metrics: {
      conversion: '+120%',
      bounceRate: '-45%',
      loadTime: '1.3s'
    },
    challenges: [
      'Sistema prenotazioni',
      'Design accogliente',
      'UX mobile'
    ],
    learnings: [
      'Booking system development',
      'Hospitality website design',
      'Mobile-first approach'
    ],
    workflow: 'Design → Sviluppo → Testing → Deploy'
  },
  {
    id: 'lechic',
    title: 'Le Chic',
    description: 'Landing page per negozio di estetiste con possibilità di appuntamento e newsletter',
    longDescription: 'Landing page per negozio di estetiste con possibilità di appuntamento e newsletter. Sviluppata per presentare il centro estetico in modo professionale e facilitare la prenotazione di appuntamenti.',
    category: 'landing',
    imageUrl: '/src/assets/projects/lechic-main.jpg',
    githubUrl: 'https://github.com/Payd3r/LeChic',
    demoUrl: 'https://lechic.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Appointment System'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'work',
      year: '2024'
    },
    beforeAfter: {
      before: '/src/assets/projects/lechic-before.jpg',
      after: '/src/assets/projects/lechic-after.jpg',
      description: 'Trasformazione del sito centro estetico con sistema di appuntamenti integrato'
    },
    clientReview: {
      name: 'Sofia Martini',
      role: 'Proprietaria Le Chic',
      review: 'Il nuovo sito ha aumentato gli appuntamenti del 90% e migliorato la gestione del centro.',
      rating: 5
    },
    problem: 'Sito centro estetico senza sistema di appuntamenti integrato',
    solution: 'Landing page con sistema di appuntamenti e design elegante',
    features: [
      'Hero section elegante',
      'Sistema appuntamenti',
      'Galleria servizi',
      'Newsletter integrata',
      'Sezione trattamenti'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      appointments: ['Custom Appointment System'],
      newsletter: ['EmailJS'],
      deployment: ['Vercel']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/lechic-screenshot-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/projects/lechic-screenshot-2.jpg', caption: 'Sistema appuntamenti' },
      { imageUrl: '/src/assets/projects/lechic-screenshot-3.jpg', caption: 'Galleria servizi' }
    ],
    timeline: {
      startDate: '2024-01',
      endDate: '2024-02',
      duration: '1 mese'
    },
    metrics: {
      conversion: '+90%',
      bounceRate: '-30%',
      loadTime: '1.4s'
    },
    challenges: [
      'Sistema appuntamenti',
      'Design elegante',
      'Newsletter integration'
    ],
    learnings: [
      'Appointment system development',
      'Beauty website design',
      'Email integration'
    ],
    workflow: 'Design → Sviluppo → Testing → Deploy'
  }
]
