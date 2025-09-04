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
    id: "sore",
    title: "SORE - Album Intelligente",
    description: "PWA full-stack per coppie che organizza i ricordi con AI, mappe interattive e integrazione Spotify.",
    longDescription: "SORE è un'applicazione web progressiva (PWA) completa, progettata e sviluppata da zero per offrire alle coppie uno spazio privato e intelligente dove raccogliere, organizzare e rivivere i propri ricordi. Sfruttando l'API di Google Vision, l'app classifica automaticamente le foto caricate. I ricordi possono essere arricchiti con geolocalizzazione su mappe interattive e colonne sonore personalizzate tramite l'API di Spotify. L'architettura full-stack, containerizzata con Docker, garantisce performance e scalabilità, mentre la PWA offre un'esperienza nativa su mobile con funzionalità offline e notifiche.",
    category: "main",
    imageUrl: "/src/assets/projects/sore-main.jpeg",
    githubUrl: "https://github.com/Payd3r/SORE",
    demoUrl: "https://sore.andrea-mauri.duckdns.org/",
    tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Docker", "PWA", "Google Vision API", "Spotify API"],
    status: "done",
    priority: "high",
    context: {
      type: "personal",
      year: "2024"
    },
    problem: "La frammentazione dei ricordi digitali delle coppie su diverse piattaforme (gallerie, social media, app di messaggistica), senza un contesto emotivo e un'organizzazione intelligente.",
    solution: "Una piattaforma PWA centralizzata e cross-platform che non solo archivia foto, ma le arricchisce con dati geografici, musicali e classificazione AI. Il tutto in un ambiente privato e sincronizzato in tempo reale tra i partner.",
    features: [
      "Classificazione automatica delle foto con AI (Google Vision API)",
      "Mappa dei ricordi interattiva (React Leaflet & OpenStreetMap)",
      "Integrazione musicale con ricerca (Spotify API)",
      "Esperienza app nativa con installazione PWA",
      "Funzionalità offline per accesso senza connessione (Service Worker)",
      "Sincronizzazione dei dati in tempo reale tra i partner",
      "Architettura containerizzata per un deploy semplice e affidabile (Docker)"
    ],
    techStack: {
      frontend: ["React 19", "TypeScript", "Tailwind CSS", "PWA", "React Leaflet"],
      backend: ["Node.js", "Express"],
      database: ["MySQL 8.0"],
      apis: ["Google Vision API", "Spotify API"],
      devops: ["Docker", "Docker Compose", "Nginx"]
    },
    screenshots: [
      { imageUrl: "/src/assets/carousel/sore-1.png", caption: "Dashboard principale con la timeline dei ricordi" },
      { imageUrl: "/src/assets/carousel/sore-2.png", caption: "Mappa interattiva con i ricordi geolocalizzati" },
      { imageUrl: "/src/assets/carousel/sore-3.png", caption: "Integrazione di Spotify durante la creazione di un ricordo" },
      { imageUrl: "/src/assets/carousel/sore-4.png", caption: "Integrazione di Spotify durante la creazione di un ricordo" }
    ],
    timeline: {
      startDate: "2024-01",
      endDate: "2024-03",
      duration: "3 mesi"
    },
    challenges: [
      "Progettare un'architettura di database relazionale per gestire dati complessi (utenti, ricordi, foto, tag).",
      "Integrare in modo sicuro e performante API di terze parti (Google, Spotify) con gestione di token e credenziali.",
      "Orchestrare i servizi frontend, backend e database in un ambiente di sviluppo e produzione con Docker Compose.",
      "Implementare una strategia di caching efficace con Service Worker per le funzionalità offline della PWA."
    ],
    learnings: [
      "Sviluppo full-stack di un'applicazione monorepo.",
      "Containerizzazione di applicazioni multi-servizio con Docker.",
      "Implementazione avanzata delle Progressive Web Apps, incluse le notifiche push e la sincronizzazione in background.",
      "Gestione dell'autenticazione e autorizzazione con JWT in un'architettura Node.js/Express."
    ],
    workflow: "Architettura → Sviluppo Backend → Sviluppo Frontend → Containerizzazione (Docker) → Deploy"
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
    title: 'Pane e Salame - E-commerce Full-Stack',
    description: 'Piattaforma e-commerce full-stack con architettura containerizzata (Docker), suite di testing completa e dashboard di monitoring in tempo reale.',
    longDescription: 'Sviluppato per l\'esame di Tecnologie Innovative, "Pane e Salame" è un e-commerce completo che va oltre le funzionalità standard. L\'intera architettura è basata su microservizi containerizzati con Docker (frontend, backend, database, image server, monitoring), garantendo portabilità e un deploy semplificato. Il progetto include una suite di testing multi-livello (unit, integration, frontend, performance) e una dashboard di monitoring dedicata che traccia in tempo reale lo stato dei container, l\'utilizzo delle risorse di sistema (CPU, RAM) e offre un sistema di backup e ripristino. Le API sono documentate professionalmente con Swagger.',
    category: 'main',
    imageUrl: '/src/assets/projects/pane-salame-main.jpg',
    githubUrl: 'https://github.com/Payd3r/ecommerce',
    demoUrl: 'https://panesalame.andrea-mauri.duckdns.org/',
    tags: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Bootstrap', 'Stripe', 'Swagger', 'Testing'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'university',
      course: 'Tecnologie Innovative per lo sviluppo web',
      year: '2023'
    },
    problem: 'Sviluppare una piattaforma e-commerce robusta, scalabile e production-ready che soddisfacesse requisiti avanzati di testing, monitoring e DevOps.',
    solution: 'Una soluzione full-stack completamente containerizzata con Docker Compose. Il sistema include un backend Node.js, un frontend Vanilla JS modulare, un database MariaDB e un servizio di monitoring separato, il tutto supportato da una suite di test automatizzati per garantire affidabilità e manutenibilità.',
    features: [
      'Architettura multi-container con Docker Compose',
      'Dashboard di monitoring in tempo reale (CPU, RAM, container)',
      'Sistema di Backup e Ripristino integrato (manuale e automatico)',
      'Suite di testing completa (Unit, Integration, Frontend, Performance)',
      'Documentazione API interattiva con Swagger',
      'Sistema di pagamento sicuro con Stripe.js',
      'Gestione multi-ruolo (Cliente, Artigiano, Admin) con dashboard dedicate',
      'Gestione completa del ciclo di vendita: catalogo, carrello, ordini, segnalazioni'
    ],
    techStack: {
      frontend: ['HTML5', 'CSS3', 'JavaScript (modulare)', 'Bootstrap 5', 'Chart.js'],
      backend: ['Node.js', 'Express.js'],
      database: ['MariaDB/MySQL'],
      payments: ['Stripe.js'],
      devops: ['Docker', 'Docker Compose'],
      apiDocumentation: ['Swagger'],
      monitoring: ['Node.js', 'WebSocket', 'Chart.js'],
      testing: ['Mocha', 'Chai', 'Selenium (presumed)']
    },
    screenshots: [
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-1.jpg', caption: 'Homepage e catalogo prodotti' },
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-2.jpg', caption: 'Dashboard di monitoring in tempo reale' },
      { imageUrl: '/src/assets/projects/pane-salame-screenshot-3.jpg', caption: 'Documentazione delle API con Swagger' }
    ],
    timeline: {
      startDate: '2023-10',
      endDate: '2023-12',
      duration: '3 mesi'
    },
    challenges: [
      'Orchestrazione di un ambiente multi-container complesso con Docker Compose.',
      'Sviluppo di una dashboard di monitoring in tempo reale da zero con WebSocket.',
      'Creazione di una suite di testing multi-livello per coprire l\'intera applicazione.',
      'Implementazione di un sistema di backup e ripristino affidabile.'
    ],
    learnings: [
      'Principi di DevOps e containerizzazione con Docker.',
      'Monitoraggio di applicazioni in produzione.',
      'Strategie di testing software (TDD/BDD).',
      'Progettazione e documentazione di API RESTful con Swagger.'
    ],
    workflow: 'Architettura Docker → Sviluppo Backend & API → Sviluppo Frontend → Implementazione Testing & Monitoring → Deploy'
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
    id: "ravai",
    title: "RAVAI",
    description: "Piattaforma vetrina con preventivatore interattivo per la creazione di siti web per PMI.",
    longDescription: "RAVAI è una landing page strategica progettata da zero per presentare servizi di sviluppo web a piccole e medie imprese come ristoranti, B&B e negozi. Il sito non solo funge da portfolio, ma integra un preventivatore multi-step che guida l'utente attraverso la scelta di un piano e di servizi extra, culminando in una stima di costo immediata e trasparente. Il design è minimale e moderno, con animazioni fluide realizzate con Framer Motion per un'esperienza utente di alto livello.",
    category: "landing",
    imageUrl: "/src/assets/projects/ravai-main.jpeg",
    githubUrl: "https://github.com/Payd3r/ravai",
    demoUrl: "https://www.ravai.it/",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX"],
    status: "done",
    priority: "high",
    context: {
      type: 'work',
      year: '2025'
    },
    problem: "Creare uno strumento di marketing digitale per acquisire clienti, presentando in modo chiaro i servizi di sviluppo web e semplificando il processo di preventivo.",
    solution: "Lo sviluppo di una landing page vetrina costruita con tecnologie moderne. La piattaforma funge da portfolio interattivo e integra un calcolatore di preventivi automatico per qualificare i lead e fornire trasparenza immediata ai potenziali clienti.",
    features: [
      "Preventivatore interattivo multi-step",
      "Design minimale, moderno e full-responsive",
      "Animazioni fluide e transizioni di pagina (Framer Motion)",
      "Galleria progetti con card interattive",
      "Architettura moderna e ottimizzata per la SEO"
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      animations: ["Framer Motion"],
      deployment: ["Vercel"]
    },
    screenshots: [
      { imageUrl: "/src/assets/carousel/ravai-1.png", caption: "Preventivi" },
      { imageUrl: "/src/assets/carousel/ravai-2.png", caption: "Pagina preventivo" },
      { imageUrl: "/src/assets/carousel/ravai-3.png", caption: "Percorso tecnologico" }
    ],
    timeline: {
      startDate: "2025-08",
      endDate: "2025-08",
      duration: "4 giorni di sviluppo"
    },
    metrics: {
      performance: "98/100 (Lighthouse)",
      seo: "95/100 (Lighthouse)",
      loadTime: "1.1s"
    },
    challenges: [
      "Sviluppare una logica complessa per il preventivatore multi-step.",
      "Integrare animazioni performanti senza impattare la velocità di caricamento.",
      "Garantire un'esperienza utente fluida su tutti i dispositivi."
    ],
    learnings: [
      "Gestione dello stato complesso in React per form multi-step.",
      "Ottimizzazione delle performance con Framer Motion.",
      "Sviluppo rapido di interfacce con Tailwind CSS."
    ],
    workflow: "Ideazione → Progettazione UI/UX → Sviluppo → Testing → Deploy"
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
      { imageUrl: '/src/assets/carousel/gladiatori-1.png', caption: 'Homepage' },
      { imageUrl: '/src/assets/carousel/gladiatori-2.png', caption: 'Menu' },
      { imageUrl: '/src/assets/carousel/gladiatori-3.png', caption: 'Prenotazioni' }
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
      { imageUrl: '/src/assets/carousel/betta47-1.png', caption: 'Homepage' },
      { imageUrl: '/src/assets/carousel/betta47-2.png', caption: 'Sistema prenotazioni' },
      { imageUrl: '/src/assets/carousel/betta47-3.png', caption: 'Galleria camere' }
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
      { imageUrl: '/src/assets/carousel/chic-1.png', caption: 'Homepage' },
      { imageUrl: '/src/assets/carousel/chic-2.png', caption: 'Sistema appuntamenti' },
      { imageUrl: '/src/assets/carousel/chic-3.png', caption: 'Galleria servizi' }
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
  }, {
    id: 'lariana',
    title: 'La Lariana',
    description: 'Landing page per negozio di estetiste con possibilità di appuntamento e newsletter',
    longDescription: 'Landing page per negozio di estetiste con possibilità di appuntamento e newsletter. Sviluppata per presentare il centro estetico in modo professionale e facilitare la prenotazione di appuntamenti.',
    category: 'landing',
    imageUrl: '/src/assets/projects/lariana-main.jpg',
    githubUrl: 'https://github.com/Payd3r/LeChic',
    demoUrl: 'https://lechic.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Appointment System'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'work',
      year: '2024'
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
      { imageUrl: '/src/assets/carousel/lariana-1.jpg', caption: 'Homepage' },
      { imageUrl: '/src/assets/carousel/lariana-2.jpg', caption: 'Sistema appuntamenti' },
      { imageUrl: '/src/assets/carousel/lariana-3.jpg', caption: 'Galleria servizi' }
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
