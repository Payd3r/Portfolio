import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Timeline from '@/components/Timeline'
import { Github, Linkedin, Instagram } from 'lucide-react'
import AnimatedPage from '@/components/AnimatedPage'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
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
          className="relative h-screen flex items-center justify-center"
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
            {/* Sezione Sinistra: Testo e Social */}
            <div className="text-left relative z-20">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, <br />
                I'm <span className="text-accent">Andrea</span>
                <br />
                React.js Developer
              </h1>
              <div className="mt-8 relative z-30">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="inline-block"
                >
                  <Button>About Me</Button>
                </ScrollLink>
              </div>
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
        <section id="about" className="pb-24">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Chi Sono</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 about-title">
                About <span className="text-accent">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Profile Image Section */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-hover/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Image container */}
                <div className="relative">
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Border animation */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent via-accent-hover to-accent animate-spin-slow"></div>
                    <div className="absolute inset-1 rounded-3xl bg-dark-surface"></div>
                    
                    {/* Profile image */}
                    <img
                      src={avatar}
                      alt="Andrea Mauri"
                      className="relative w-full h-full rounded-3xl object-cover about-avatar shadow-2xl"
                      loading="lazy"
                    />
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tooltip under the image */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-accent-hover/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-accent/20">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-primary">Disponibile per progetti</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="space-y-8 about-text">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Introduzione</h3>
                  <p className="text-secondary/90 leading-relaxed text-lg mb-6">
                    Sono <span className="text-accent font-bold">Andrea Mauri</span>, un{' '}
                    <span className="text-accent font-bold">Web Developer</span> con una forte passione per la creazione di applicazioni web performanti e visivamente accattivanti.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Formazione</h3>
                  <p className="text-secondary/90 leading-relaxed mb-6">
                    <span className="text-accent font-semibold">Laureato in Informatica</span> e diplomato presso l'Istituto Tecnico Jean Monnet di Mariano Comense, specializzato nello stack moderno con{' '}
                    <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">TypeScript</span> e tecnologie fullstack.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">La Mia Missione</h3>
                  <p className="text-secondary/90 leading-relaxed mb-8">
                    Sono costantemente alla ricerca di nuove sfide tecniche e pronto a contribuire a progetti innovativi nel mondo dello sviluppo web, creando soluzioni che combinano{' '}
                    <span className="text-accent font-semibold">funzionalità</span> e <span className="text-accent font-semibold">design</span>.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 text-center border border-accent/20">
                    <div className="text-3xl font-bold text-accent">3+</div>
                    <div className="text-sm text-secondary/70">Anni di Esperienza</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 text-center border border-accent/20">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-secondary/70">Progetti Completati</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="pb-20">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Timeline</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Il Mio <span className="text-accent">Percorso</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto rounded-full"></div>
            </div>

            {/* Timeline Component */}
            <Timeline />
          </div>
        </section>

        <section id="skills" className="min-h-screen pt-24">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Abilità</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Le Mie <span className="text-accent">Competenze</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-hover mx-auto rounded-full"></div>
            </div>

            {/* Skills Component */}
            <SkillsBentoGrid />
          </div>
        </section>
        <section id="projects" className="min-h-screen py-20 pt-24">
          <div className="container mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Il Mio Lavoro</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                I Miei <span className="text-accent">Progetti</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto"></div>
            </div>

            {/* Projects Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Project Preview Card 1 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Portfolio Website</h3>
                  <p className="text-secondary/80 text-sm mb-4">Sito portfolio moderno e responsive realizzato con React, TypeScript e Tailwind CSS</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">TypeScript</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Project Preview Card 2 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">E-Commerce App</h3>
                  <p className="text-secondary/80 text-sm mb-4">Applicazione e-commerce completa con carrello, pagamenti e gestione prodotti</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Next.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Stripe</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">MongoDB</span>
                  </div>
                </div>
              </div>

              {/* Project Preview Card 3 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Dashboard Analytics</h3>
                  <p className="text-secondary/80 text-sm mb-4">Dashboard interattiva per visualizzazione dati con grafici e metriche in tempo reale</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">D3.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Node.js</span>
                  </div>
                </div>
              </div>

              {/* Project Preview Card 4 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Blog Platform</h3>
                  <p className="text-secondary/80 text-sm mb-4">Piattaforma blog moderna con sistema di gestione contenuti e editor markdown</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Next.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Prisma</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">PostgreSQL</span>
                  </div>
                </div>
              </div>

              {/* Project Preview Card 5 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Task Manager</h3>
                  <p className="text-secondary/80 text-sm mb-4">App di gestione task con collaborazione in tempo reale e notifiche push</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">React</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Socket.io</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Express</span>
                  </div>
                </div>
              </div>

              {/* Project Preview Card 6 */}
              <div className="group relative bg-gradient-to-br from-surface to-surface/80 rounded-2xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Crypto Tracker</h3>
                  <p className="text-secondary/80 text-sm mb-4">App per tracciare prezzi crypto con grafici interattivi e alert personalizzati</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Vue.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Chart.js</span>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">WebSocket</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link to="/projects" className="inline-block">
                <Button variant="outline" size="lg">
                  Vedi tutti i progetti
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AnimatedPage>
  )
}

export default HomePage
