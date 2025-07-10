import React from 'react'

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Gradiente di base */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-base to-dark-bg" />
      
      {/* Particelle fluttuanti */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(255, 20, 147, 0.2)' : 'rgba(0, 255, 255, 0.2)', // Neon Pink & Cyan
              animation: `float ${Math.random() * 20 + 20}s infinite linear`,
              animationDelay: `${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Macchie di colore sfocate e animate */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-red-500/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-400/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
    </div>
  )
}

export default AnimatedBackground 