export interface ProjectType {
  id: string
  title: string
  description: string
  longDescription?: string
  category: 'main' | 'landing'
  imageUrl: string
  githubUrl?: string
  demoUrl?: string
  tags: string[]
  status: 'done' | 'in-progress' | 'pending'
  priority: 'high' | 'medium' | 'low'
  
  // Campi specifici per landing page
  beforeAfter?: {
    before: string
    after: string
    description: string
  }
  clientReview?: {
    name: string
    role: string
    review: string
    rating: number
  }
  
  // Campi specifici per progetti universitari/lavoro
  context?: {
    type: 'university' | 'work' | 'personal'
    course?: string
    company?: string
    duration?: string
    thesis?: string
    year?: string
  }
  
  problem?: string
  solution?: string
  features?: string[]
  techStack?: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    other?: string[]
    storage?: string[]
    notifications?: string[]
    mobile?: string[]
    ui?: string[]
    charts?: string[]
    pwa?: string[]
    payments?: string[]
    realtime?: string[]
    animations?: string[]
    analytics?: string[]
    booking?: string[]
    appointments?: string[]
    newsletter?: string[]
    ecommerce?: string[]
    deployment?: string[]
    apis?: string[]
    apiDocumentation?: string[]
    monitoring?: string[]
    testing?: string[]
  }
  screenshots?: {
    imageUrl: string
    caption?: string
  }[]
  timeline?: {
    startDate: string
    endDate?: string
    duration?: string
    milestones?: {
      date: string
      title: string
      description: string
    }[]
  }
  metrics?: {
    users?: string | number
    performance?: string
    uptime?: string
    visitors?: string | number
    conversion?: string
    bounceRate?: string
    loadTime?: string
    other?: Record<string, string | number>
    memories?: string | number
    satisfaction?: string | number
    projects?: string | number
    transactions?: string | number
    products?: string | number
    revenue?: string | number
    orders?: string | number
    customers?: string | number
    reviews?: string | number
    ratings?: string | number
    feedback?: string | number
    issues?: string | number
    workouts?: string | number
    categories?: string | number
    savings?: string | number
    players?: string | number
    matches?: string | number
    teams?: string | number
    auctions?: string | number
    seo?: string | number
  }
  challenges?: string[]
  learnings?: string[]
  workflow?: string | {
    steps: string[]
    tools?: string[]
    methodology?: string
  }
} 