import { useState, useMemo, useLayoutEffect, useRef } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/utils/projects'
import type { ProjectType } from '@/utils/projects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedPage from '@/components/AnimatedPage'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const ProjectGallery = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const containerRef = useRef<HTMLDivElement>(null)

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
    return ['All', ...Array.from(tags)]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedTag === 'All') {
      return projects
    }
    return projects.filter((p) => p.tags.includes(selectedTag))
  }, [selectedTag])

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
      className="container mx-auto py-16"
      // @ts-expect-error - AnimatedPage forward ref typing issue
      ref={containerRef}
    >
      <SEO
        title="Galleria Progetti"
        description="Esplora una selezione dei miei lavori più recenti, filtrabili per tecnologia."
      />
      <h2 className="text-3xl font-bold text-center text-neon-purple mb-12">
        I Miei Progetti
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 border-2 rounded-full transition-all duration-300
              ${
                selectedTag === tag
                  ? 'border-neon-cyan bg-neon-cyan text-dark-bg font-bold shadow-lg shadow-neon-cyan/30'
                  : 'border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: ProjectType) => (
          <div key={project.id} className="project-card-item">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default ProjectGallery
