export const timelineData = [
  {
    id: 9,
    year: '2025',
    title: 'Progetto personale: SORE – Album Intelligente',
    date: '2025',
    description:
      'Ho progettato e sviluppato da zero SORE, una PWA full-stack pensata per le coppie, che organizza i ricordi usando AI, mappe interattive e integrazione Spotify. È un progetto completo: frontend in React/TypeScript, backend Node.js/Express, database MySQL, containerizzazione con Docker e deploy su infrastruttura self-hosted.',
    institution: 'Progetto Personale',
    location: 'Remote',
    icon: '🚀',
    importance: 'large',
  },
  {
    id: 8,
    year: '2025',
    title: 'Inizio magistrale in Informatica',
    date: 'Settembre 2025',
    description:
      'Inizio il corso di laurea magistrale in Informatica all\'Università di Milano-Bicocca. Continuo a lavorare in parallelo sul gestionale del negozio, integrando nuove funzionalità e sperimentando l\'uso dell\'intelligenza artificiale per analizzare dati di vendita e supportare le decisioni.',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    icon: '🎓',
    importance: 'large',
  },
  {
    id: 7,
    year: '2025',
    title: 'Laurea triennale in Informatica',
    date: '11 luglio 2025',
    description:
      'Mi laureo in Informatica presso l\'Università dell\'Insubria (Como) con una tesi su un gestionale full-stack per un negozio di vestiti, che gestisce ordini, magazzino, vendite, casse e report operativi. Il progetto diventa un sistema reale usato tutti i giorni in negozio.',
    institution: 'Università dell\'Insubria',
    location: 'Como',
    icon: '🎓',
    importance: 'large',
  },
  {
    id: 6,
    year: '2023-oggi',
    title: 'Sviluppo gestionale per negozio di abbigliamento',
    date: '2023 - In corso',
    description:
      'Collaboro in modo continuativo con un negozio di abbigliamento per lo sviluppo e l\'evoluzione di un gestionale su misura: carichi a magazzino, vendite, gestione casse, reportistica e automazioni. Mi occupo anche del setup dei computer e dei dispositivi usati in negozio.',
    institution: 'Negozio di abbigliamento',
    location: 'Lavoro continuativo',
    icon: '💼',
    importance: 'medium',
  },
  {
    id: 5,
    year: '2023/2024',
    title: 'Docente di Informatica',
    date: 'Anno scolastico 2023/2024',
    description:
      'Insegno Informatica al Liceo scientifico "Fermi" di Cantù, indirizzo Scienze applicate, come unico docente per le classi prime e seconde. Partecipo a scrutini, colloqui con i genitori, gite scolastiche e corsi di recupero: un\'esperienza che mi ha insegnato a spiegare concetti tecnici in modo chiaro e alla portata di tutti.',
    institution: 'Liceo scientifico "Fermi"',
    location: 'Cantù',
    icon: '👨‍🏫',
    importance: 'large',
  },
  {
    id: 4,
    year: '2023-oggi',
    title: 'Progetti freelance per piccole attività',
    date: '2023 - In corso',
    description:
      'Sviluppo siti e piccole web app per ristoranti, negozi e amici imprenditori, spesso partendo da richieste molto pratiche: una pagina per farsi trovare online, una piccola area gestionale, un sistema di prenotazione. Una parte di questi lavori arriva da piattaforme come Upwork/Fiverr, il resto dal passaparola.',
    institution: 'Freelance',
    location: 'Varie località',
    icon: '💼',
    importance: 'medium',
  },
  {
    id: 3,
    year: '2021',
    title: 'Diploma di Perito Informatico',
    date: '2021',
    description:
      'Conseguo il diploma di Perito Informatico presso l\'Istituto Tecnico Jean Monnet di Mariano Comense, che mi dà le basi di programmazione, reti e sistemi che poi ho approfondito all\'università.',
    institution: 'Istituto Tecnico Jean Monnet',
    location: 'Mariano Comense',
    icon: '🎓',
    importance: 'medium',
  },
  {
    id: 2,
    year: '2020',
    title: 'Stage su database presso Techne S.r.l.',
    date: '2020',
    description:
      'Svolgo uno stage presso Techne S.r.l., azienda che produce componenti idraulici. Affianco il team nella gestione dei database aziendali, imparando sul campo come vengono gestiti i dati in un contesto produttivo reale.',
    institution: 'Techne S.r.l.',
    location: 'Erba',
    icon: '💼',
    importance: 'small',
  },
  {
    id: 1,
    year: '2015-oggi',
    title: 'Lavoro con mio padre come imbianchino',
    date: 'Dal 2015',
    description:
      'Fin da ragazzo lavoro un giorno a settimana con mio padre come imbianchino. È un impegno costante, fisico e poco "glamour", ma è quello che mi ha insegnato cosa significhi lavorare sodo, rispettare orari e responsabilità e avere un contatto diretto con i clienti.',
    institution: 'Lavoro familiare',
    location: 'Varie località',
    icon: '🖌️',
    importance: 'small',
  },
]

import {
  Code,
  Database,
  AreaChart,
  Github,
  LayoutGrid,
  Laptop,
  Paintbrush,
  Server,
  Cloud,
  Terminal
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type BentoItemType = {
  id: number
  component: 'Skill' | 'Chart' | 'Stats' | 'Link' | 'SkillList'
  colSpan: string
  rowSpan: string
  className?: string
  title: string
  Icon?: LucideIcon
  description?: string
  skills?: string[]
  href?: string
  hideOnMobile?: boolean
  mobileColSpan?: string
}

export const bentoData: BentoItemType[] = [
  {
    id: 1,
    component: 'SkillList',
    title: 'Frontend',
    Icon: Laptop,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    className: 'bg-gradient-to-br from-accent/20 to-accent/5',
    mobileColSpan: 'col-span-2',
  },
  {
    id: 2,
    component: 'Stats',
    title: 'Statistiche GitHub',
    Icon: Github,
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-2 md:row-span-2',
    hideOnMobile: true,
  },
  {
    id: 3,
    component: 'SkillList',
    title: 'Linguaggi',
    Icon: Code,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-2',
  },
  {
    id: 4,
    component: 'Chart',
    title: 'Competenze',
    Icon: AreaChart,
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-3 md:row-span-2',
    mobileColSpan: 'col-span-2',
  },
  {
    id: 5,
    component: 'SkillList',
    title: 'Backend',
    Icon: Server,
    skills: ['Node.js', 'Express', 'REST API', 'GraphQL'],
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-1',
  },
  {
    id: 6,
    component: 'SkillList',
    title: 'Database',
    Icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Prisma'],
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-1',
  },
  {
    id: 7,
    component: 'SkillList',
    title: 'Tools & DevOps',
    Icon: Terminal,
    skills: ['Docker', 'Git', 'CI/CD', 'Vercel', 'Linux'],
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-2',
  },
  {
    id: 8,
    component: 'SkillList',
    title: 'UI/UX Design',
    Icon: Paintbrush,
    skills: ['Figma', 'Design System', 'Responsive Design'],
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-1',
  },
  {
    id: 9,
    component: 'SkillList',
    title: 'Cloud & Deploy',
    Icon: Cloud,
    skills: ['Vercel', 'AWS', 'Self-hosted', 'Nginx'],
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-1',
    rowSpan: 'row-span-1 md:row-span-1',
    mobileColSpan: 'col-span-1',
  },
  {
    id: 10,
    component: 'Link',
    title: 'Vedi tutti i progetti',
    Icon: LayoutGrid,
    href: '/projects',
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    className: 'bg-gradient-to-br from-accent/20 to-accent/5 hover:from-accent/30 hover:to-accent/10',
    mobileColSpan: 'col-span-2',
  },
]
