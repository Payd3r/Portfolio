import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

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
    setIsOpen(!isOpen)
  }

  const handleMobileLinkClick = () => {
    // Chiudi il menu dopo un breve delay per permettere la navigazione
    setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  const renderNavLink = (link: (typeof navLinks)[0]) => {
    const baseClasses =
      'cursor-pointer transition-colors hover:text-accent-hover text-lg'
    const activeClasses = 'text-accent font-bold'
    const isHomeAndAtTop = isHomePage && link.to === 'home' && isAtTop

    if (link.isRoute) {
      return (
        <RouterLink
          to={link.to}
          className={`${baseClasses} ${
            location.pathname === link.to ? activeClasses : ''
          }`}
        >
          {link.label}
        </RouterLink>
      )
    }

    if (!isHomePage) {
      // Se non siamo nella homepage, i link portano alla homepage con scroll
      return (
        <RouterLink to={`/#${link.to}`} className={baseClasses}>
          {link.label}
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
        onClick={handleMobileLinkClick}
      >
        {link.label}
      </ScrollLink>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-surface/80 p-6 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-10 h-10" /> {/* Spazio vuoto per il logo */}
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.to}>{renderNavLink(link)}</li>
            ))}
          </ul>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                {renderNavLink(link)}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
