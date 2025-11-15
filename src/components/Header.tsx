import React, { useState, useEffect, useRef } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { to: 'home', label: 'Home', isRoute: false },
  { to: 'about', label: 'About', isRoute: false },
  { to: 'timeline', label: 'Timeline', isRoute: false },
  { to: 'skills', label: 'Competenze', isRoute: false },
  { to: 'projects', label: 'Progetti', isRoute: false },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const wasEverOpen = useRef(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Chiudi il menu quando cambia la location
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleMobileLinkClick = () => {
    setTimeout(() => setIsOpen(false), 80)
  }

  useEffect(() => {
    if (isOpen) {
      wasEverOpen.current = true
      document.body.style.setProperty('overflow', 'hidden')
      const focusable = listRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex="0"]',
      )
      focusable?.focus()
    } else {
      document.body.style.removeProperty('overflow')
      if (wasEverOpen.current) {
        menuButtonRef.current?.focus()
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const renderNavLink = (
    link: (typeof navLinks)[0],
    variant: 'desktop' | 'mobile' = 'desktop',
  ) => {
    const baseClasses =
      variant === 'mobile'
        ? 'text-xl font-semibold tracking-tight text-primary/90 transition-colors hover:text-accent flex items-center justify-between gap-6 cursor-pointer'
        : 'cursor-pointer transition-colors hover:text-accent-hover text-nav-mobile md:text-nav-desktop'
    const activeClasses = 'text-accent font-bold'
    const isHomeAndAtTop = isHomePage && link.to === 'home' && isAtTop
    const handleClick = variant === 'mobile' ? handleMobileLinkClick : undefined

    const renderContent = () =>
      variant === 'mobile' ? (
        <>
          <span>{link.label}</span>
          <ArrowUpRight size={22} className="text-accent" aria-hidden />
        </>
      ) : (
        link.label
      )

    if (link.isRoute) {
      return (
        <RouterLink
          to={link.to}
          className={`${baseClasses} ${
            location.pathname === link.to ? activeClasses : ''
          }`}
          onClick={handleClick}
        >
          {renderContent()}
        </RouterLink>
      )
    }

    if (!isHomePage) {
      // Se non siamo nella homepage, i link portano alla homepage con scroll
      return (
        <RouterLink
          to={`/#${link.to}`}
          className={baseClasses}
          onClick={handleClick}
        >
          {renderContent()}
        </RouterLink>
      )
    }

    // Se siamo nella homepage, usa scroll normale
    return (
      <ScrollLink
        to={link.to}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={`${baseClasses} ${isHomeAndAtTop ? activeClasses : ''}`}
        activeClass={activeClasses}
        onClick={handleClick}
      >
        {renderContent()}
      </ScrollLink>
    )
  }

  return (
    <header className="sticky top-0 z-40 bg-transparent p-3 sm:p-4 md:p-6 md:bg-dark-surface/80 md:backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-10 h-10" /> {/* Spazio vuoto per il logo */}
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.to}>{renderNavLink(link, 'desktop')}</li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden w-11" aria-hidden="true" />
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {!isOpen && (
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Apri menu di navigazione"
            className="fixed right-4 top-4 z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-primary shadow-md transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:static md:right-auto md:top-auto md:z-auto md:bg-white/5 md:hover:bg-white/10 md:shadow-none"
          >
            <span className="sr-only">Apri menu</span>
            <motion.span
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              <Menu size={24} />
            </motion.span>
          </button>
        )}
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-x-4 top-4 z-50 rounded-3xl border border-white/10 bg-surface/95 px-6 py-6 shadow-2xl md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <ul ref={listRef} className="space-y-5 font-semibold">
                {navLinks.map((link) => (
                  <li key={link.to} className="border-b border-white/5 pb-3 last:border-none">
                    {renderNavLink(link, 'mobile')}
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
