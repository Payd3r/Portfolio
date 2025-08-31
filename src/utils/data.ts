export const timelineData = [
  {
    id: 5,
    year: '2025',
    title: 'Magistrale in Informatica',
    date: '2025 - In corso',
    description:
      'Iniziata presso l\'Università degli Studi di Milano-Bicocca. Focus su Intelligenza Artificiale e Sistemi Distribuiti.',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    icon: '🎓',
  },
  {
    id: 4,
    year: '2024',
    title: 'Laurea Triennale in Informatica',
    date: '2024',
    description:
      'Conseguita con lode, con una tesi sullo sviluppo di applicazioni web progressive.',
    institution: 'Università degli Studi di Milano-Bicocca',
    location: 'Milano',
    icon: '🎓',
  },
  {
    id: 3,
    year: '2023',
    title: 'Tirocinio Frontend Developer',
    date: '2023',
    description:
      'Esperienza formativa presso Tech Solutions S.R.L, lavorando su un progetto React e TypeScript.',
    institution: 'Tech Solutions S.R.L',
    location: 'Milano',
    icon: '💼',
  },
  {
    id: 2,
    year: '2021',
    title: 'Diploma di Perito Informatico',
    date: '2021',
    description:
      'Conseguito con il massimo dei voti presso Istituto Tecnico Jean Monnet a Mariano Comense.',
    institution: 'Istituto Tecnico Jean Monnet',
    location: 'Mariano Comense',
    icon: '🎓',
  },
  {
    id: 1,
    year: '2020',
    title: 'Tirocinio su Database',
    date: '2020',
    description:
      'Esperienza formativa su Access e MySQL, apprendendo le basi della gestione e progettazione di database.',
    institution: 'Azienda locale',
    location: 'Milano',
    icon: '💼',
  },
]

import {
  Code,
  Database,
  Component,
  AreaChart,
  Github,
  LayoutGrid,
  Laptop,
  Paintbrush
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
}

export const bentoData: BentoItemType[] = [
  {
    id: 1,
    component: 'Skill',
    title: 'React & TypeScript',
    Icon: Laptop,
    description: 'Sviluppo di interfacce web moderne e tipizzate.',
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-3',
    rowSpan: 'row-span-2 md:row-span-2',
    className: 'bg-accent/10',
  },
  {
    id: 2,
    component: 'Stats',
    title: 'Statistiche GitHub',
    Icon: Github,
    colSpan: 'col-span-2 sm:col-span-3 md:col-span-3',
    rowSpan: 'row-span-2 md:row-span-2',
  },
  {
    id: 3,
    component: 'SkillList',
    title: 'Frameworks',
    Icon: Component,
    skills: ['React', 'Vue', 'Django'],
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-2',
    rowSpan: 'row-span-2 md:row-span-2',
  },
  {
    id: 4,
    component: 'SkillList',
    title: 'Linguaggi',
    Icon: Code,
    skills: ['JavaScript', 'Python', 'CSS', 'Kotlin', 'Java', 'C#', 'C++', 'C'],
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-2 md:row-span-2',
  },
  {
    id: 5,
    component: 'Chart',
    title: 'Aree di Competenza',
    Icon: AreaChart,
    colSpan: 'col-span-2 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-2 md:row-span-2',
  },
  {
    id: 6,
    component: 'Skill',
    title: 'UI/UX Design',
    Icon: Paintbrush,
    description: 'Progettazione di interfacce intuitive con Figma.',
    colSpan: 'col-span-1 sm:col-span-1 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
  },
  {
    id: 7,
    component: 'Skill',
    title: 'Database',
    Icon: Database,
    description: 'MySQL, PostgreSQL, MongoDB.',
    colSpan: 'col-span-1 sm:col-span-2 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
  },
  {
    id: 8,
    component: 'Link',
    title: 'Vedi i miei progetti',
    Icon: LayoutGrid,
    href: '/projects',
    colSpan: 'col-span-2 sm:col-span-1 md:col-span-2',
    rowSpan: 'row-span-1 md:row-span-1',
    className: 'bg-accent/10',
  },
]
