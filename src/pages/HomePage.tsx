import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Timeline from '@/components/Timeline'
import HobbyCard from '@/components/HobbyCard'
import { Dumbbell, Bike, Code, Github, Linkedin, Instagram } from 'lucide-react'
import AnimatedPage from '@/components/AnimatedPage'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '@/components/SEO'
import DownloadButton from '@/components/DownloadButton'
import profileImage from '@/assets/profile.png'
import avatar from '../assets/avatar.jpg'
import SkillsBentoGrid from '@/components/SkillsBentoGrid'
import Button from '@/components/Button'
import { Link as ScrollLink } from 'react-scroll'

const HomePage = () => {
  const mainRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(
        '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
        () => {
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

          // Animazione per le statistiche GitHub
          const githubSection = document.getElementById('github')
          if (githubSection) {
            gsap.from('.github-stats-title', {
              scrollTrigger: {
                trigger: githubSection,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
              opacity: 0,
              y: 30,
              duration: 0.8,
            })

            gsap.from('.github-stat-card', {
              scrollTrigger: {
                trigger: githubSection,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
              opacity: 0,
              scale: 0.9,
              y: 50,
              duration: 0.6,
              stagger: 0.1,
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
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sezione Sinistra: Testo e Social */}
            <div className="text-left relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, <br />
                I'm <span className="text-accent">Andrea</span>
                <br />
                React.js Developer
              </h1>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                className="mt-8 inline-block"
              >
                <Button>About Me</Button>
              </ScrollLink>
              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 hover:text-accent transition-colors" />
                </a>
                <a href="https://github.com/Andryuu03" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 hover:text-accent transition-colors" />
                </a>
                <a href="https://www.instagram.com/andryuu03" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8 hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            {/* Sezione Destra: Immagine con forma */}
            <div className="relative z-10 flex justify-center items-center md:-mt-20">
              <div
                className="w-100 h-100 md:w-116 md:h-116 bg-surface"
                style={{
                  clipPath:
                    'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
                }}
              >
                <img
                  src={profileImage}
                  alt="Andrea Mauri"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="min-h-screen py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <img
                src={avatar}
                alt="Andrea Mauri"
                className="w-60 h-60 rounded-full border-4 border-accent shadow-lg shadow-accent/10 about-avatar object-cover"
                loading="lazy"
                width="150"
                height="150"
              />
              <div className="max-w-xl text-left about-text">
                <h2 className="text-3xl font-bold text-primary mb-8 about-title">
                  About Me
                </h2>
                <p className="mb-4 text-secondary">
                  Sono <span className="text-accent font-semibold">Andrea Mauri, Web Developer</span> con una forte passione per la creazione di applicazioni web performanti e visivamente accattivanti.
                </p>
                <p className="mb-4 text-secondary">
                  Laureato in Informatica e diplomato presso l'Istituto Tecnico Jean Monnet di Mariano Comense, specializzato nello stack moderno con React, TypeScript e tecnologie fullstack.
                </p>
                <p className="text-secondary">
                  Sono costantemente alla ricerca di nuove sfide tecniche e pronto a contribuire a progetti innovativi nel mondo dello sviluppo web.
                </p>
              </div>
            </div>
            <div className="timeline-container mt-16">
              <Timeline />
            </div>
          </div>
        </section>
        <section id="skills" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Le Mie Competenze
            </h2>
            <SkillsBentoGrid />
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-12">I Miei Progetti</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Una selezione di progetti che mostrano le mie competenze in azione.
            </p>
            <Link to="/projects">
              <Button>Vedi tutti i progetti</Button>
            </Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  )
}

export default HomePage
