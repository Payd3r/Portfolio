import { useState, useMemo, useLayoutEffect, useRef, useEffect } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/utils/projects'
import type { ProjectType } from '@/utils/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedPage from '@/components/AnimatedPage'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const ProjectGallery = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All'])
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['All', ...Array.from(tags)]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedTags.includes('All')) {
      return projects
    }
    return projects.filter((p) => p.tags.some(tag => selectedTags.includes(tag)))
  }, [selectedTags])

  const handleTagClick = (tag: string) => {
    if (tag === 'All') {
      // Se clicco su All, deseleziono tutto e seleziono solo All
      setSelectedTags(['All'])
    } else {
      setSelectedTags(prev => {
        const newTags = prev.filter(t => t !== 'All') // Rimuovo sempre All se presente
        
        if (prev.includes(tag)) {
          // Se il tag è già selezionato, lo rimuovo
          const filtered = newTags.filter(t => t !== tag)
          // Se non rimangono tag selezionati, seleziono All
          return filtered.length === 0 ? ['All'] : filtered
        } else {
          // Se il tag non è selezionato, lo aggiungo
          return [...newTags, tag]
        }
      })
    }
  }

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(containerRef)

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.project-card-item', {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })

    return () => mm.revert()
  }, [filteredProjects])

  return (
    <AnimatedPage
      className="min-h-screen"
      // @ts-expect-error - AnimatedPage forward ref typing issue
      ref={containerRef}
    >
      <SEO
        title="Galleria Progetti"
        description="Esplora una selezione dei miei lavori più recenti, filtrabili per tecnologia."
      />
      
      {/* Header Section */}
      <section className="pb-10 pt-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Progetti</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Galleria dei <span className="text-accent">Progetti</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto rounded-full"></div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedTags.includes(tag)
                    ? 'bg-accent text-white shadow-lg shadow-accent/25 transform scale-105'
                    : 'bg-surface/50 text-secondary hover:bg-surface hover:text-primary border border-accent/20 hover:border-accent/40'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: ProjectType) => (
              <div key={project.id} className="project-card-item">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-surface/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Nessun progetto trovato</h3>
              <p className="text-secondary">Prova a selezionare filtri diversi per vedere più progetti.</p>
            </div>
          )}
        </div>
      </section>
    </AnimatedPage>
  )
}

export default ProjectGallery
