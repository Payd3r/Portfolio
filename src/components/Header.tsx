import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Progetti' },
  { to: 'skills', label: 'Competenze' },
  { to: 'contact', label: 'Contatti' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-surface/80 p-4 shadow-lg shadow-neon-purple/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-neon-cyan">Mio Portfolio</h1>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer transition-colors hover:text-neon-cyan"
                  activeClass="text-neon-cyan font-bold"
                >
                  {link.label}
                </Link>
              </li>
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
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-lg transition-colors hover:text-neon-cyan"
                  activeClass="text-neon-cyan font-bold"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
