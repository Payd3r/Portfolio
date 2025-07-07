import React from 'react'

interface LanguageCardProps {
  name: string
  level: string
  icon: string
}

const LanguageCard: React.FC<LanguageCardProps> = ({ name, level, icon }) => {
  return (
    <div className="group relative transform cursor-pointer rounded-lg bg-dark-surface p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-green/20">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-xl font-bold">{name}</h3>
      <p className="mt-2 text-sm text-neon-green">{level}</p>
    </div>
  )
}

export default LanguageCard
