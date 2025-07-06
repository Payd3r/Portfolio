import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Il Mio Nome. Tutti i diritti
        riservati.
      </p>
    </footer>
  )
}

export default Footer
