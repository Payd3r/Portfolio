# Portfolio Personale di Andrea Mauri

Ciao! 👋 Questo è il repository del mio portfolio personale, un progetto sviluppato per mostrare le mie competenze, i miei lavori e un po' della mia passione per lo sviluppo web.

Questo non è solo un semplice sito vetrina, ma un vero e proprio "parco giochi" dove ho potuto sperimentare con animazioni, grafica 3D e le più recenti tecnologie frontend.

## 🚀 Su di me

Sono Andrea Mauri, un Web Developer con una forte passione per la creazione di applicazioni web performanti, intuitive e visivamente accattivanti. Specializzato in **React** e **TypeScript**, mi piace esplorare tutto l'ecosistema full-stack per costruire soluzioni complete e innovative.

Puoi trovare i miei profili social e contattarmi tramite i link nel footer del sito.

## ✨ Funzionalità del Portfolio

Questo sito include diverse funzionalità interessanti:

-   **Animazione 3D Interattiva:** La homepage ti accoglie con un cubo 3D animato, realizzato con `React Three Fiber`.
-   **Navigazione Fluida e Animata:** Le transizioni tra le pagine sono gestite con `Framer Motion` e le animazioni degli elementi con `GSAP` per un'esperienza utente dinamica.
-   **Cursore Personalizzato:** Un cursore interattivo che cambia aspetto quando si passa sopra elementi cliccabili.
-   **Galleria Progetti Filtrabile:** Una galleria dove puoi esplorare i miei progetti e filtrarli per tecnologia.
-   **Statistiche GitHub in tempo reale:** Una sezione che mostra le mie statistiche di GitHub, caricate dinamicamente tramite l'API di GitHub.
-   **Timeline Educativa:** Un percorso visivo della mia formazione e delle mie esperienze.
-   **Design Moderno e Responsive:** Realizzato con `TailwindCSS` per un'esperienza ottimale su qualsiasi dispositivo.

## 🛠️ Stack Tecnologico

-   **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **Styling:** [TailwindCSS](https://tailwindcss.com/)
-   **Animazioni:** [GSAP (GreenSock)](https://gsap.com/), [Framer Motion](https://www.framer.com/motion/)
-   **3D:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction), [Drei](https://github.com/pmndrs/drei)
-   **Linting/Formatting:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## ⚙️ Configurazione e Comandi Utili

Questa sezione contiene le istruzioni per eseguire il progetto sia in un ambiente di sviluppo locale, sia tramite Docker.

### Sviluppo Locale

Per eseguire questo progetto in locale, segui questi passaggi:

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/Payd3r/Portfolio.git
    cd Portfolio
    ```

2.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

3.  **Avvia il server di sviluppo:**
    Il sito sarà disponibile su `http://localhost:5173`.
    ```bash
    npm run dev
    ```

4.  **Build per la produzione:**
    Crea una versione ottimizzata del sito nella cartella `dist/`.
    ```bash
    npm run build
    ```

### Utilizzo con Docker

Per avviare il progetto utilizzando Docker e Docker Compose, assicurati di avere entrambi installati sulla tua macchina.

1.  **Build e Avvio dei container:**
    Esegui questo comando dalla root del progetto. Docker costruirà l'immagine e avvierà il container in background.
    ```bash
    docker-compose up -d --build
    ```
    Il sito sarà disponibile su `http://localhost:3020`.

2.  **Fermare i container:**
    Per fermare il servizio, esegui:
    ```bash
    docker-compose down
    ```

---

Grazie per aver visitato il mio repository! Spero ti piaccia esplorare il mio lavoro.
