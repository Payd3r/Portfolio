import React from 'react'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Payd3r', // Account GitHub reale
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/andrea-mauri', // Placeholder LinkedIn
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/andrea_mauri', // Placeholder Instagram
    icon: Instagram,
  },
  {
    name: 'Email',
    url: 'mailto:andrea.mauri@example.com', // Placeholder email
    icon: Mail,
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface p-6 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan transition-colors"
            title={link.name}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>
      <p>
        &copy; {new Date().getFullYear()} Andrea Mauri. Tutti i diritti
        riservati.
      </p>
    </footer>
  )
}

export default Footer
