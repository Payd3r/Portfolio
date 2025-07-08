import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Timeline from '@/components/Timeline'
import LanguageCard from '@/components/LanguageCard'
import { languages } from '@/utils/data'
import SkillsRadarChart from '@/components/SkillsRadarChart'
import GitHubStats from '@/components/GitHubStats'
import HobbyCard from '@/components/HobbyCard'
import { Dumbbell, Bike, Code } from 'lucide-react'
import Hero3D from '@/components/Hero3D'
import AnimatedPage from '@/components/AnimatedPage'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import DownloadButton from '@/components/DownloadButton'
import { projects } from '@/utils/projects'
import ProjectCard from '@/components/ProjectCard'

const HomePage = () => {
  const mainRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.to('.hero-3d-container', {
            y: '20vh',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })

          const aboutSection = document.getElementById('about')
          if (aboutSection) {
            gsap.fromTo(
              '.about-title',
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: aboutSection,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                },
              }
            )
            gsap.fromTo(
              '.about-avatar',
              { opacity: 0, x: -100 },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                  trigger: aboutSection,
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                },
              }
            )
            gsap.fromTo(
              '.about-text',
              { opacity: 0, x: 100 },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                  trigger: aboutSection,
                  start: 'top 70%',
                  toggleActions: 'play none none none',
                },
              }
            )
          }

          const timelineItems = gsap.utils.toArray('.timeline-item')
          timelineItems.forEach((item) => {
            const content = (item as Element).querySelector('.timeline-content')
            const milestone = (item as Element).querySelector(
              '.timeline-milestone'
            )

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: item as gsap.DOMTarget,
                start: 'top 85%',
                end: 'bottom 70%',
                toggleActions: 'play none none none reverse',
                scrub: 1,
              },
            })

            const isEven = timelineItems.indexOf(item) % 2 === 0

            tl.from(content, {
              x: isEven ? -100 : 100,
              opacity: 0,
              duration: 1,
              ease: 'power2.out',
            }).from(
              milestone,
              {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'back.out(1.7)',
              },
              '-=0.8'
            )
          })

          const skillsSection = document.getElementById('skills')
          if (skillsSection) {
            gsap.from('.skills-title', {
              scrollTrigger: {
                trigger: skillsSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              opacity: 0,
              y: 30,
              duration: 0.8,
              stagger: 0.3,
            })

            gsap.from('.skill-card', {
              scrollTrigger: {
                trigger: '.skills-grid-container',
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              opacity: 0,
              scale: 0.9,
              y: 50,
              duration: 0.5,
              stagger: 0.1,
            })

            gsap.from('.radar-chart-container', {
              scrollTrigger: {
                trigger: '.radar-chart-container',
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              opacity: 0,
              scale: 0.8,
              duration: 1,
              ease: 'power2.out',
            })
          }
        }
      )
    }, mainRef)
    return () => ctx.revert()
  }, [])

  return (
    <AnimatedPage>
      <SEO
        title="Home"
        description="Portfolio di uno sviluppatore software specializzato in React, TypeScript e soluzioni web innovative."
      />
      <main ref={mainRef}>
        <section
          id="home"
          className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        >
          <div className="hero-3d-container absolute top-0 left-0 w-full h-full">
            <Hero3D />
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">
              Benvenuto nel mio Portfolio Futuristico
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              Esplora i miei progetti e le mie competenze.
            </p>
          </div>
        </section>
        <section id="about" className="min-h-screen py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-8 about-title">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img
                src="https://placehold.co/150x150/0D0221/00FFFF?text=Avatar"
                alt="Mio Avatar"
                className="w-40 h-40 rounded-full border-4 border-neon-cyan shadow-lg shadow-neon-cyan/20 about-avatar"
                loading="lazy"
                width="150"
                height="150"
              />
              <div className="max-w-xl text-left about-text">
                <p className="mb-4">
                  Sono un{' '}
                  <span className="text-neon-green">
                    sviluppatore software neolaureato (21 anni)
                  </span>{' '}
                  con una forte passione per la creazione di applicazioni web
                  performanti e visivamente accattivanti.
                </p>
                <p className="mb-4">
                  Specializzato nello stack MERN e con solide competenze in Java
                  e C#, sono costantemente alla ricerca di nuove sfide per
                  migliorare le mie abilità.
                </p>
                <p>
                  Attualmente risiedo a [La tua città, Italia] e sono pronto a
                  contribuire a progetti innovativi.
                </p>
              </div>
            </div>
            <div className="timeline-container mt-16">
              <Timeline />
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-screen py-16 bg-dark-base">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-12">
              I Miei Progetti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <p className="max-w-3xl mx-auto mb-8 text-gray-400">
              Esplora una selezione dei miei lavori più recenti. Fai clic qui
              sotto per vedere la galleria completa.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-neon-cyan text-dark-bg font-bold py-3 px-8 rounded-lg hover:bg-neon-purple transition-colors duration-300"
            >
              Vai alla Galleria Progetti
            </Link>
          </div>
        </section>
        <section id="skills" className="min-h-screen py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-12 skills-title">
              Competenze
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-neon-green skills-title">
                  Linguaggi & Framework
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 skills-grid-container">
                  {languages.map(
                    (lang: { name: string; level: string; icon: string }) => (
                      <div className="skill-card" key={lang.name}>
                        <LanguageCard {...lang} />
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="radar-chart-container">
                <h3 className="text-2xl font-semibold mb-6 text-neon-green skills-title">
                  Aree di Competenza
                </h3>
                <SkillsRadarChart />
              </div>
            </div>
          </div>
        </section>
        <section id="github" className="py-16 bg-dark-base">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-12">
              Statistiche GitHub
            </h2>
            <GitHubStats />
          </div>
        </section>
        <section id="hobbies" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-12">
              Hobby & Interessi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <HobbyCard
                icon={Dumbbell}
                title="Palestra"
                description="Mi alleno regolarmente per mantenermi in forma e disciplinato."
              />
              <HobbyCard
                icon={Bike}
                title="Ciclismo"
                description="Esploro nuove strade e mi godo la natura in sella alla mia bici da corsa."
              />
              <HobbyCard
                icon={Code}
                title="Progetti Personali"
                description="Amo sperimentare con nuove tecnologie e creare progetti stimolanti nel mio tempo libero."
              />
            </div>
          </div>
        </section>
        <section id="documents" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-neon-purple mb-12">
              Documenti
            </h2>
            <div className="flex justify-center gap-8">
              <DownloadButton
                href="/CV-Placeholder.pdf"
                fileName="CV_John_Doe.pdf"
                buttonText="Scarica il mio CV"
              />
            </div>
          </div>
        </section>
        {/* La sezione contatti è stata rimossa su richiesta */}
      </main>
    </AnimatedPage>
  )
}

export default HomePage
