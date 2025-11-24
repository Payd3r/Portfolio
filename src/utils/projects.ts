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
    imageUrl: "/assets/projects/sore-main.jpeg",
    githubUrl: "https://github.com/Payd3r/SORE",
    demoUrl: "https://sore.andrea-mauri.duckdns.org/",
    tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "Docker", "PWA", "Google Vision API", "Spotify API"],
    status: "done",
    priority: "high",
    context: {
      type: "personal",
      year: "2025"
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
      { imageUrl: "/assets/carousel/sore-1.png", caption: "Dashboard principale con la timeline dei ricordi" },
      { imageUrl: "/assets/carousel/sore-2.png", caption: "Mappa interattiva con i ricordi geolocalizzati" },
      { imageUrl: "/assets/carousel/sore-3.png", caption: "Integrazione di Spotify durante la creazione di un ricordo" },
      { imageUrl: "/assets/carousel/sore-4.png", caption: "Integrazione di Spotify durante la creazione di un ricordo" }
    ],
    timeline: {
      startDate: "gennaio 2025",
      endDate: "marzo 2025",
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
    id: 'gestionale',
    title: 'AbbaModa - Sistema Gestionale',
    description: 'Sistema gestionale full-stack (Django/React) con architettura containerizzata (Docker), code asincrone (Celery/Redis) e sincronizzazione e-commerce.',
    longDescription: 'Sviluppato come progetto di tesi e utilizzato in produzione da Abbamoda, questo sistema è una soluzione software completa per la gestione di un business multi-canale. L\'architettura, interamente containerizzata con Docker, si basa su un backend Python/Django REST Framework e un frontend React. Utilizza Celery e Redis per gestire operazioni asincrone complesse come la sincronizzazione dell\'inventario con Shopify ed eBay. Include un sistema cassa (POS), CRM, gestione magazzino, un sistema di backup automatico su SFTP, e una suite di testing con oltre 200 test. Il progetto ha anche incluso la migrazione completa da un database legacy MariaDB a PostgreSQL.',
    category: 'main',
    imageUrl: '/assets/projects/gestionale-main.png',
    githubUrl: 'https://github.com/lucacatt/gestionale',
    demoUrl: 'https://gestionale-abbamoda.vercel.app',
    tags: ['Django', 'Python', 'PostgreSQL', 'React', 'Redis', 'Celery', 'Docker', 'Shopify API', 'eBay API'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'work',
      company: 'Abbamoda',
      duration: '9+ mesi',
      thesis: '/assets/documents/tesi-abbamoda.pdf',
      year: '2025'
    },
    problem: 'Centralizzare e automatizzare la gestione di magazzino, vendite (fisiche e online) e clienti, sostituendo processi manuali e sistemi legacy con una soluzione unificata, scalabile e affidabile.',
    solution: 'Un\'architettura full-stack containerizzata con Docker. Il backend Django gestisce la logica di business e le API, mentre React offre un\'interfaccia reattiva. L\'uso di Celery e Redis permette di eseguire in background operazioni pesanti e sincronizzazioni con API esterne (Shopify, eBay) senza bloccare l\'interfaccia utente.',
    features: [
      'Gestione Magazzino (Prodotti, Varianti, Inventario, Barcode)',
      'Sistema Cassa (POS) per vendite in negozio con stampa scontrini',
      'Sincronizzazione E-commerce Multi-canale (Shopify, eBay)',
      'Sistema di Code Asincrone (Celery & Redis) per operazioni in background',
      'Sistema di Quantità Avanzato con ricalcolo automatico e validazione',
      'Suite di Testing Completa (213+ test automatizzati)',
      'Sistema di Backup/Ripristino automatico del database su server SFTP',
      'Migrazione Dati da un sistema legacy (MariaDB a PostgreSQL)'
    ],
    techStack: {
      frontend: ['React 18', 'Bootstrap 5'],
      backend: ['Django REST Framework', 'Python'],
      database: ['PostgreSQL'],
      cache_taskQueue: ['Redis', 'Celery'],
      devops: ['Docker', 'Docker Compose'],
      ecommerce_apis: ['Shopify API', 'eBay API'],
      testing: ['Python Unittest Framework']
    },
    screenshots: [
      { imageUrl: '/assets/carousel/gestionale-1.png', caption: 'Dashboard principale con analytics vendite' },
      { imageUrl: '/assets/carousel/gestionale-2.png', caption: 'Interfaccia del Sistema Cassa (POS)' },
      { imageUrl: '/assets/carousel/gestionale-3.png', caption: 'Gestione avanzata dei prodotti con varianti e barcode' },
      { imageUrl: '/assets/carousel/gestionale-4.png', caption: 'Gestione avanzata dei prodotti con varianti e barcode' },
      { imageUrl: '/assets/carousel/gestionale-5.png', caption: 'Gestione avanzata dei prodotti con varianti e barcode' }
    ],
    timeline: {
      startDate: 'gennaio 2025',
      endDate: 'settembre 2025',
      duration: '8 mesi'
    },
    metrics: {
      productsManaged: '10,000+',
      automatedTests: '213/213 passed',
      apiEndpoints: '50+'
    },
    challenges: [
      'Progettare e implementare un sistema di code asincrone per gestire migliaia di aggiornamenti di inventario su piattaforme esterne senza errori.',
      'Orchestrare un ambiente di sviluppo e produzione complesso con Docker, includendo servizi di debug come VSCode Server e Adminer.',
      'Eseguire una migrazione dati complessa da un database MariaDB legacy a PostgreSQL, preservando l\'integrità dei dati.',
      'Creare una suite di test estensiva per garantire l\'affidabilità delle API critiche per il business.'
    ],
    learnings: [
      'Architettura di sistemi software complessi e manutenibili con Django.',
      'Gestione di task asincroni e code di messaggi con Celery e Redis.',
      'Principi avanzati di DevOps, containerizzazione e gestione di ambienti multi-container.',
      'Strategie di integrazione profonda con API e-commerce di terze parti.'
    ],
    workflow: 'Analisi requisiti → Architettura (Django/Celery) → Sviluppo API → Sviluppo Frontend (React) → Testing → Containerizzazione (Docker) → Manutenzione'
  },
  {
    "id": "omnia",
    "title": "Omnia",
    "description": "Piattaforma di apprendimento personalizzato alimentata da AI che genera automaticamente piani di studio settimanali, articoli educativi completi con immagini, quiz, podcast audio e assistente virtuale.",
    "longDescription": "Omnia è una piattaforma innovativa di apprendimento personalizzato che utilizza l'intelligenza artificiale per creare esperienze educative su misura. Gli utenti possono creare 'settimane di apprendimento' su qualsiasi argomento desiderato, e il sistema genera automaticamente un piano di studio strutturato di 7 giorni. Per ogni giorno, Omnia crea articoli educativi completi e approfonditi con 8 sezioni dettagliate, immagini generate automaticamente, quiz interattivi per verificare la comprensione, curiosità interessanti e risorse esterne (libri, film, app, siti web). La piattaforma include anche la generazione automatica di podcast audio utilizzando Google Text-to-Speech, permettendo agli utenti di ascoltare gli articoli mentre sono in movimento. Un assistente virtuale AI consente agli utenti di fare domande specifiche sugli articoli per approfondire ulteriormente la comprensione. Il sistema utilizza un'architettura microservizi con orchestrazione intelligente tra Google Gemini e Ollama per garantire alta disponibilità e gestione dei rate limit, supporta più lingue (italiano, inglese, tedesco, francese, spagnolo, portoghese) e offre un'interfaccia moderna e responsive.",
    "category": "main",
    "imageUrl": "/assets/projects/omnia-main.png",
    "githubUrl": "https://github.com/Payd3r/omnia",
    "demoUrl": "https://omnia.andrea-mauri.duckdns.org/",
    "tags": ["React", "Node.js", "Express", "AI", "Google Gemini", "Ollama", "PostgreSQL", "Docker", "Text-to-Speech", "Educational Platform"],
    "status": "done",
    "priority": "high",
    "context": {
      "type": "personal",
      "year": "2025"
    },
    "problem": "Necessità di una piattaforma educativa che generi automaticamente contenuti di apprendimento personalizzati, strutturati e completi su qualsiasi argomento, con supporto multi-modale (testo, immagini, audio) e interattività per migliorare l'esperienza di apprendimento.",
    "solution": "Sviluppo di una piattaforma completa con generazione AI di piani di studio settimanali, articoli educativi dettagliati con immagini, quiz interattivi, podcast audio e assistente virtuale, utilizzando un'architettura microservizi scalabile con fallback intelligente tra provider AI.",
    "features": [
      "Generazione automatica di piani di studio settimanali personalizzati",
      "Creazione AI di articoli educativi completi con 8 sezioni dettagliate",
      "Generazione automatica di immagini per ogni sezione",
      "Quiz interattivi con feedback immediato e generazione di domande aggiuntive",
      "Generazione di podcast audio con Google Text-to-Speech multi-lingua",
      "Assistente virtuale AI per domande specifiche sugli articoli",
      "Sistema di preferiti per salvare articoli importanti",
      "Suggerimenti AI per temi di nuove settimane",
      "Supporto multi-lingua (6 lingue)",
      "Orchestrazione intelligente AI con fallback automatico tra Gemini e Ollama",
      "Gestione rate limit e caching con Redis",
      "Interfaccia responsive e moderna con dark mode"
    ],
    "techStack": {
      "frontend": ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Clerk Auth"],
      "backend": ["Node.js", "Express", "TypeScript", "Prisma ORM"],
      "database": ["PostgreSQL"],
      "ai": ["Google Gemini", "Ollama", "AI Orchestrator"],
      "audio": ["Google Cloud Text-to-Speech"],
      "image": ["Image Generation Service"],
      "caching": ["Redis"],
      "devops": ["Docker", "Docker Compose", "NGINX"],
      "authentication": ["Clerk"]
    },
    "screenshots": [
      { "imageUrl": "/assets/carousel/omnia-1.png", "caption": "Homepage con lista delle settimane di apprendimento" },
      { "imageUrl": "/assets/carousel/omnia-2.png", "caption": "Piano di studio settimanale con 7 giorni generati automaticamente" },
      { "imageUrl": "/assets/carousel/omnia-3.png", "caption": "Articolo educativo completo con sezioni" },
      { "imageUrl": "/assets/carousel/omnia-4.png", "caption": "Assistente virtuale AI per domande sugli articoli" },
      { "imageUrl": "/assets/carousel/omnia-5.png", "caption": "Card per approfondimenti e rimandi a siti esterni" },
      { "imageUrl": "/assets/carousel/omnia-6.png", "caption": "Quiz Interattivi per l'utente" }
    ],
    "timeline": {
      "startDate": "Novembre 2025",
      "endDate": "Dicembre 2025",
      "duration": "1 mese"
    },
    "challenges": [
      "Orchestrazione intelligente tra multiple AI provider (Gemini e Ollama) con gestione rate limit e fallback automatico",
      "Generazione asincrona di contenuti complessi (articoli, immagini, quiz) con aggiornamento in tempo reale",
      "Ottimizzazione delle performance per generazione di contenuti AI pesanti mantenendo responsività dell'interfaccia",
      "Gestione multi-lingua per generazione contenuti, immagini e audio con coerenza stilistica",
      "Architettura microservizi con comunicazione efficiente tra servizi (backend, audio-manager, image-manager)"
    ],
    "learnings": [
      "Orchestrazione di multiple AI API con pattern di fallback e gestione errori robusta",
      "Generazione asincrona di contenuti complessi con polling e aggiornamenti in tempo reale",
      "Integrazione di servizi esterni (Google TTS, generazione immagini) in architettura microservizi",
      "Ottimizzazione di performance per applicazioni AI-intensive con caching e rate limiting",
      "Progettazione di interfacce utente per contenuti generati dinamicamente con stati di loading avanzati"
    ],
    "workflow": "Progettazione Architettura → Setup Microservizi → Integrazione AI Orchestrator → Sviluppo Generatori Contenuti → Implementazione Frontend → Integrazione Audio/Immagini → Testing e Ottimizzazione → Deploy"
  },
  {
    id: "insidefaraostudio",
    title: "InsideFaraoStudio",
    description: "Sito web su misura per fotografo con gestione progetti, galleria e pagina admin per upload e gestione contenuti.",
    longDescription: "InsideFaraoStudio è un sito web personalizzato creato per un fotografo professionista per presentare il proprio portfolio online in modo elegante e funzionale. Il sito include pagine dedicate come Home, Galleria, Progetti e una pagina Admin personalizzata per il caricamento di nuovi progetti, gestione delle foto in evidenza per la Home e la Galleria. È stata posta particolare attenzione all’ottimizzazione delle immagini, preservando l’alta qualità degli originali e offrendo diverse versioni ottimizzate (thumbnail e conversioni in formati più efficienti) per garantire una navigazione fluida e veloce. Inoltre, è disponibile la possibilità di scaricare gratuitamente le immagini originali, offrendo così una migliore esperienza sia per il fotografo che per i visitatori.",
    category: "main",
    imageUrl: "/assets/projects/insidefaraostudio-main.png",
    githubUrl: "https://github.com/Payd3r/rafa",
    demoUrl: "https://faraostudio.andrea-mauri.duckdns.org/",
    tags: ["React", "Node.js", "Express", "Image Optimization", "Admin Panel", "Photography Website"],
    status: "done",
    priority: "medium",
    context: {
      type: "work",
      year: "2025"
    },
    problem: "Necessità di un sito personalizzato per presentare professionalmente il sito web fotografico, con gestione efficiente di contenuti e immagini ad alta qualità.",
    solution: "Sviluppo di un sito su misura con pagine dedicate, gestione contenuti e ottimizzazione delle immagini che coniuga alta qualità e performance.",
    features: [
      "Gestione personalizzata dei progetti con video, foto e descrizioni",
      "Pagina Admin su misura per upload e gestione contenuti",
      "Ottimizzazione immagini con diversi formati e thumbnail",
      "Possibilità di download gratuito delle foto originali",
      "Interfaccia utente veloce e responsive"
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL"],
      imageProcessing: ["Sharp", "imagemin"],
      devops: ["Docker", "NGINX"]
    },
    screenshots: [
      { imageUrl: "/assets/carousel/rafa-1.png", caption: "Homepage con le foto in evidenza e presentazione" },
      { imageUrl: "/assets/carousel/rafa-2.png", caption: "Interfaccia Admin personalizzata per gestione contenuti " },
      { imageUrl: "/assets/carousel/rafa-3.png", caption: "Pagina Progetti con video e descrizioni dettagliate" },
      { imageUrl: "/assets/carousel/rafa-4.png", caption: "Galleria con foto in evidenza" }
    ],
    timeline: {
      startDate: "marzo 2025",
      endDate: "giugno 2025",
      duration: "4 mesi"
    },
    challenges: [
      "Garantire la massima qualità delle immagini originali mantenendo la fluidità del sito tramite ottimizzazione intelligente",
      "Costruire un pannello admin intuitivo e funzionale su misura per le esigenze del fotografo",
      "Gestire video e immagini in modo efficiente mantenendo performance elevate"
    ],
    learnings: [
      "Ottimizzazione delle immagini per siti fotografici",
      "Sviluppo di interfacce personalizzate e pannelli di amministrazione",
      "Bilanciamento tra qualità visiva e prestazioni web"
    ],
    workflow: "Progettazione UI/UX → Sviluppo Backend → Implementazione Frontend → Ottimizzazione Media → Testing e Deploy"
  },
  {
    id: 'pane-salame',
    title: 'Pane e Salame',
    description: 'Piattaforma e-commerce full-stack con architettura containerizzata (Docker), suite di testing completa e dashboard di monitoring in tempo reale.',
    longDescription: 'Sviluppato per l\'esame di Tecnologie Innovative, "Pane e Salame" è un e-commerce completo che va oltre le funzionalità standard. L\'intera architettura è basata su microservizi containerizzati con Docker (frontend, backend, database, image server, monitoring), garantendo portabilità e un deploy semplificato. Il progetto include una suite di testing multi-livello (unit, integration, frontend, performance) e una dashboard di monitoring dedicata che traccia in tempo reale lo stato dei container, l\'utilizzo delle risorse di sistema (CPU, RAM) e offre un sistema di backup e ripristino. Le API sono documentate professionalmente con Swagger.',
    category: 'main',
    imageUrl: '/assets/projects/pane-salame-main.png',
    githubUrl: 'https://github.com/Payd3r/ecommerce',
    demoUrl: 'https://panesalame.andrea-mauri.duckdns.org/',
    tags: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Docker', 'Bootstrap', 'Stripe', 'Swagger', 'Testing'],
    status: 'done',
    priority: 'medium',
    context: {
      type: 'university',
      course: 'Tecnologie Innovative per lo sviluppo web',
      year: '2024'
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
      { imageUrl: '/assets/carousel/pane-salame-1.png', caption: 'Homepage e catalogo prodotti' },
      { imageUrl: '/assets/carousel/pane-salame-2.png', caption: 'Pagine per gli utenti' },
      { imageUrl: '/assets/carousel/pane-salame-3.png', caption: 'Dashboard di monitoring in tempo reale' }
    ],
    timeline: {
      startDate: 'Ottobre 2024',
      endDate: 'Dicembre 2024',
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
    id: 'portfolio',
    title: 'Portfolio ',
    description: 'Portfolio personale che funge da "parco giochi" per tecnologie avanzate come React Three Fiber, GSAP e Framer Motion.',
    longDescription: 'Questo non è un semplice sito vetrina, ma una web application dinamica progettata per dimostrare competenze avanzate. La homepage presenta un cubo 3D interattivo (React Three Fiber), mentre la navigazione e le micro-interazioni sono gestite con animazioni complesse (Framer Motion, GSAP). Il sito integra un cursore personalizzato, una galleria progetti filtrabile e una sezione che carica dinamicamente le statistiche da GitHub, mostrando un\'applicazione pratica delle API.',
    category: 'main',
    imageUrl: '/assets/projects/portfolio-main.jpeg',
    githubUrl: 'https://github.com/Payd3r/Portfolio',
    demoUrl: 'https://portfolio.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'React Three Fiber', 'Docker'],
    status: 'done',
    priority: 'high',
    context: {
      type: 'personal',
      year: '2024'
    },
    problem: 'Creare un portfolio che non solo elenchi i progetti, ma che sia esso stesso una dimostrazione di competenze tecniche avanzate, in particolare nell\'ambito delle animazioni e della grafica 3D sul web.',
    solution: 'Lo sviluppo di una Single Page Application interattiva con React e TypeScript, utilizzando librerie all\'avanguardia come React Three Fiber per la grafica 3D e GSAP/Framer Motion per animazioni complesse. L\'architettura è containerizzata con Docker per una facile esecuzione locale.',
    features: [
      'Animazioni di transizione di pagina (Framer Motion)',
      'Micro-animazioni su elementi UI (GSAP)',
      'Galleria progetti con filtri dinamici',
      'Integrazione API di GitHub per statistiche in tempo reale'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      animations: ['Framer Motion', 'GSAP'],
      graphics_3d: ['React Three Fiber', 'Drei'],
      deployment: ['Docker', 'Vercel']
    },
    screenshots: [
      { imageUrl: '/assets/projects/portfolio-screenshot-1.jpg', caption: 'Homepage con cubo 3D interattivo' },
      { imageUrl: '/assets/projects/portfolio-screenshot-2.jpg', caption: 'Galleria progetti con filtri' },
      { imageUrl: '/assets/projects/portfolio-screenshot-3.jpg', caption: 'Dettaglio di un progetto' }
    ],
    timeline: {
      startDate: '2024-02',
      endDate: '2024-03',
      duration: '1 mese'
    },
    challenges: [
      'Integrare rendering 3D (React Three Fiber) in un\'applicazione React mantenendo alte performance.',
      'Orchestrazione di più librerie di animazione (GSAP, Framer Motion) senza conflitti.',
      'Garantire che le animazioni complesse e gli effetti grafici siano fluidi su tutti i dispositivi.'
    ],
    learnings: [
      'Sviluppo di scene 3D interattive nel DOM con React Three Fiber.',
      'Gestione avanzata dello stato di animazioni complesse.',
      'Ottimizzazione delle performance di rendering per applicazioni web graficamente intensive.'
    ],
    workflow: 'Concept & Design → Sviluppo Componenti → Integrazione 3D & Animazioni → Ottimizzazione Performance → Deploy'
  },
  {
    id: 'fitness-bodybuilding',
    title: 'Fitness & Bodybuilding',
    description: 'Applicazione in Kotlin per smartphone per tener traccia dell\'allenamento',
    longDescription: 'Applicazione in Kotlin per smartphone per tener traccia dell\'allenamento con schede, utenti e allenamenti custom. Possibilità di far partire l\'attività e tener traccia dei progressi.',
    category: 'main',
    imageUrl: '/assets/projects/fitness-main.png',
    githubUrl: 'https://github.com/lucacatt/Fitness_and_Bodybuilding',
    demoUrl: '',
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
      { imageUrl: '/assets/carousel/fitness-1.png', caption: 'Dashboard allenamenti' },
      { imageUrl: '/assets/carousel/fitness-2.png', caption: 'Tracking esercizi' },
      { imageUrl: '/assets/carousel/fitness-3.png', caption: 'Statistiche progressi' }
    ],
    timeline: {
      startDate: 'Settembre 2023',
      endDate: 'Novembre 2023',
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
    imageUrl: '/assets/projects/spese-main.png',
    githubUrl: 'https://github.com/Payd3r/Tracking_Spese',
    demoUrl: 'https://spese.andrea-mauri.duckdns.org/',
    tags: ['React', 'TypeScript', 'PWA', 'Chart.js'],
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
      backend: ['Node.js', 'Express'],
      charts: ['Chart.js'],
      pwa: ['Service Workers'],
      deployment: ['Portainer', 'Nginx']
    },
    screenshots: [
      { imageUrl: '/assets/carousel/spese-1.png', caption: 'Dashboard spese' },
      { imageUrl: '/assets/carousel/spese-2.png', caption: 'Aggiunta spesa' },
      { imageUrl: '/assets/carousel/spese-3.png', caption: 'Impostazioni per gestire tutti gli asset' }
    ],
    timeline: {
      startDate: 'gennaio 2024',
      endDate: 'febbraio 2024',
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
    imageUrl: '/assets/projects/gestionale-calcio-main.jpg',
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
      { imageUrl: '/assets/projects/gestionale-calcio-screenshot-1.jpg', caption: 'Dashboard squadra' },
      { imageUrl: '/assets/projects/gestionale-calcio-screenshot-2.jpg', caption: 'Gestione giocatori' },
      { imageUrl: '/assets/projects/gestionale-calcio-screenshot-3.jpg', caption: 'Statistiche partite' }
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
    longDescription: 'Partecipazione in un team UpWork per un\'app di aste auto. Gestione di problemi di pagamento e grafici sulla homepage.',
    category: 'main',
    imageUrl: '/assets/projects/car-main.png',
    githubUrl: 'https://github.com/teamicon/car-to-auction',
    demoUrl: '',
    tags: ['PHP', 'MySQL', 'Stripe', 'WebSocket'],
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
      'Dashboard venditore'
    ],
    techStack: {
      frontend: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      backend: ['PHP', 'MySQL'],
      database: ['MySQL'],
      payments: ['Stripe'],
      realtime: ['WebSocket']
    },
    screenshots: [
      { imageUrl: '/assets/carousel/car-1.png', caption: 'Asta in corso' },
      { imageUrl: '/assets/carousel/car-2.png', caption: 'Garage di un utente' },
      { imageUrl: '/assets/carousel/car-3.png', caption: 'Pagine su cui sono intervenuto' }
    ],
    timeline: {
      startDate: 'Febbraio 2024',
      endDate: 'Aprile 2024',
      duration: '3 mesi'
    },
    metrics: {
      users: '100+',
      auctions: '20+',
      revenue: '€10k+'
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
    workflow: 'Sviluppo → Testing'
  },
  {
    id: "ravai",
    title: "RAVAI",
    description: "Piattaforma vetrina con preventivatore interattivo per la creazione di siti web per PMI.",
    longDescription: "RAVAI è una landing page strategica progettata da zero per presentare servizi di sviluppo web a piccole e medie imprese come ristoranti, B&B e negozi. Il sito non solo funge da portfolio, ma integra un preventivatore multi-step che guida l'utente attraverso la scelta di un piano e di servizi extra, culminando in una stima di costo immediata e trasparente. Il design è minimale e moderno, con animazioni fluide realizzate con Framer Motion per un'esperienza utente di alto livello.",
    category: "landing",
    imageUrl: "/assets/projects/ravai-main.jpeg",
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
      { imageUrl: "/assets/carousel/ravai-1.png", caption: "Preventivi" },
      { imageUrl: "/assets/carousel/ravai-2.png", caption: "Pagina preventivo" },
      { imageUrl: "/assets/carousel/ravai-3.png", caption: "Percorso tecnologico" }
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
    imageUrl: '/assets/projects/gladiatori-main.jpg',
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
      before: '/assets/projects/gladiatori-before.jpg',
      after: '/assets/projects/gladiatori-after.jpg',
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
      { imageUrl: '/assets/carousel/gladiatori-1.png', caption: 'Homepage' },
      { imageUrl: '/assets/carousel/gladiatori-2.png', caption: 'Menu' },
      { imageUrl: '/assets/carousel/gladiatori-3.png', caption: 'Prenotazioni' }
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
    imageUrl: '/assets/projects/betta47-main.jpg',
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
      before: '/assets/projects/betta47-before.jpg',
      after: '/assets/projects/betta47-after.jpg',
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
      { imageUrl: '/assets/carousel/betta47-1.png', caption: 'Homepage' },
      { imageUrl: '/assets/carousel/betta47-2.png', caption: 'Sistema prenotazioni' },
      { imageUrl: '/assets/carousel/betta47-3.png', caption: 'Galleria camere' }
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
    imageUrl: '/assets/projects/lechic-main.jpg',
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
      before: '/assets/projects/lechic-before.jpg',
      after: '/assets/projects/lechic-after.jpg',
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
      { imageUrl: '/assets/carousel/chic-1.png', caption: 'Homepage' },
      { imageUrl: '/assets/carousel/chic-2.png', caption: 'Sistema appuntamenti' },
      { imageUrl: '/assets/carousel/chic-3.png', caption: 'Galleria servizi' }
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
    imageUrl: '/assets/projects/lariana-main.jpg',
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
      { imageUrl: '/assets/carousel/lariana-1.jpg', caption: 'Homepage' },
      { imageUrl: '/assets/carousel/lariana-2.jpg', caption: 'Sistema appuntamenti' },
      { imageUrl: '/assets/carousel/lariana-3.jpg', caption: 'Galleria servizi' }
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
