import React from 'react'
import { Link } from 'react-scroll'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'projects', label: 'Progetti' },
  { to: 'skills', label: 'Competenze' },
  { to: 'contact', label: 'Contatti' },
]

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-dark-surface/80 p-4 shadow-lg shadow-neon-purple/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-neon-cyan">Mio Portfolio</h1>
        <nav>
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
      </div>
    </header>
  )
}

export default Header
