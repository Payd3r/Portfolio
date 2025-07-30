import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Timeline from '@/components/Timeline'
import { Github, Linkedin, Instagram, ExternalLink, User, Building } from 'lucide-react'
import AnimatedPage from '@/components/AnimatedPage'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '@/components/SEO'
import profileImage from '@/assets/profile.jpg'
import avatar from '../assets/avatar.jpg'
import SkillsBentoGrid from '@/components/SkillsBentoGrid'
import Button from '@/components/Button'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const HomePage = () => {
  const mainRef = useRef(null)
  const navigate = useNavigate()

  // Scroll to top quando si apre la pagina
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
        {/* Migliori Progetti */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Migliori Progetti
            </h2>
            <p className="text-secondary/80 text-lg max-w-2xl mx-auto">
              Alcuni dei miei progetti più significativi, che mostrano diverse competenze e tecnologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="group cursor-pointer"
              onClick={() => navigate('/projects/sore')}
            >
              <div className="relative bg-surface/30 border border-accent/20 rounded-2xl p-6 hover:bg-surface/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                {/* Immagine progetto - aumentata altezza */}
                <div className="w-full h-56 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-surface to-surface/80">
                  <img
                    src="/src/assets/projects/sore-main.jpg"
                    alt="Sore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      2024
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-500 text-xs font-medium rounded-full">
                      <User className="w-3 h-3" />
                      Personale
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    Sore
                  </h3>
                  <div className="h-10 flex flex-col justify-center">
                    <p className="text-secondary/80 text-sm leading-5">
                      App per la gestione delle spese personali con analisi e grafici
                    </p>
                    <p className="text-secondary/80 text-sm leading-5 invisible">
                      &nbsp;
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href="https://github.com/lucacatt/sore"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-black/50 hover:bg-black/70 text-white text-sm rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://sore-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-accent hover:bg-accent/90 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RevAI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="group cursor-pointer"
              onClick={() => navigate('/projects/revai')}
            >
              <div className="relative bg-surface/30 border border-accent/20 rounded-2xl p-6 hover:bg-surface/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                {/* Immagine progetto - aumentata altezza */}
                <div className="w-full h-56 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-surface to-surface/80">
                  <img
                    src="/src/assets/projects/revai-main.jpg"
                    alt="REVAI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      2024
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                      <Building className="w-3 h-3" />
                      Lavoro
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    REVAI
                  </h3>
                  <div className="h-10 flex flex-col justify-center">
                    <p className="text-secondary/80 text-sm leading-5">
                      Web-App per presentare il mio servizio di creazione langinpage
                    </p>
                    <p className="text-secondary/80 text-sm leading-5 invisible">
                      &nbsp;
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href="https://github.com/lucacatt/revai"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-black/50 hover:bg-black/70 text-white text-sm rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://revai-demo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-accent hover:bg-accent/90 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tracking Spese */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="group cursor-pointer"
              onClick={() => navigate('/projects/tracking-spese')}
            >
              <div className="relative bg-surface/30 border border-accent/20 rounded-2xl p-6 hover:bg-surface/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                {/* Immagine progetto - aumentata altezza */}
                <div className="w-full h-56 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-surface to-surface/80">
                  <img
                    src="/src/assets/projects/tracking-spese-main.jpg"
                    alt="Tracking Spese"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      2024
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-500 text-xs font-medium rounded-full">
                      <User className="w-3 h-3" />
                      Personale
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    Tracking Spese
                  </h3>
                  <div className="h-10 flex flex-col justify-center">
                    <p className="text-secondary/80 text-sm leading-5">
                      App per il monitoraggio delle spese personali
                    </p>
                    <p className="text-secondary/80 text-sm leading-5 invisible">
                      &nbsp;
                    </p>
                  </div>                 

                  {/* Link */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href="https://github.com/lucacatt/tracking-spese"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-black/50 hover:bg-black/70 text-white text-sm rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://tracking-spese.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-accent hover:bg-accent/90 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gestionale E-commerce */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="group cursor-pointer"
              onClick={() => navigate('/projects/gestionale')}
            >
              <div className="relative bg-surface/30 border border-accent/20 rounded-2xl p-6 hover:bg-surface/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                {/* Immagine progetto - aumentata altezza */}
                <div className="w-full h-56 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-surface to-surface/80">
                  <img
                    src="/src/assets/projects/gestionale-main.jpg"
                    alt="Gestionale E-commerce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      2024
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                      <Building className="w-3 h-3" />
                      Lavoro
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    Gestionale E-commerce
                  </h3>
                  <div className="h-10 flex flex-col justify-center">
                    <p className="text-secondary/80 text-sm leading-5">
                      Sistema di gestione per e-commerce con Abbamoda
                    </p>
                    <p className="text-secondary/80 text-sm leading-5 invisible">
                      &nbsp;
                    </p>
                  </div>                

                  {/* Link */}
                  <div className="flex gap-2 pt-2">
                    <a
                      href="https://github.com/lucacatt/gestionale-abbamoda"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-black/50 hover:bg-black/70 text-white text-sm rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://gestionale-abbamoda.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-accent hover:bg-accent/90 text-white text-sm rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/projects" className="inline-block">
            <Button variant="outline" size="lg">
              Vedi tutti i progetti
            </Button>
          </Link>
        </div>
      </main>
    </AnimatedPage>
  )
}

export default HomePage
