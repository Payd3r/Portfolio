import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-surface p-4 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Il Mio Nome. Tutti i diritti
        riservati.
      </p>
    </footer>
  )
}

export default Footer
