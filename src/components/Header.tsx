import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Competenze' },
  { to: 'projects', label: 'Progetti' },
  { to: 'github', label: 'GitHub' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinkItems = navLinks.map((link) => (
    <li key={link.to}>
      {isHomePage ? (
        <ScrollLink
          to={link.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer transition-colors hover:text-neon-cyan"
          activeClass="text-neon-cyan font-bold"
          onClick={isOpen ? toggleMenu : undefined}
        >
          {link.label}
        </ScrollLink>
      ) : (
        <RouterLink
          to={`/#${link.to}`}
          className="cursor-pointer transition-colors hover:text-neon-cyan"
          onClick={isOpen ? toggleMenu : undefined}
        >
          {link.label}
        </RouterLink>
      )}
    </li>
  ))

  return (
    <header className="sticky top-0 z-50 bg-dark-surface/80 p-4 shadow-lg shadow-neon-purple/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <RouterLink to="/">
          <h1 className="text-xl font-bold text-neon-cyan">Andrea Mauri</h1>
        </RouterLink>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">{navLinkItems}</ul>
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
            {navLinkItems}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
