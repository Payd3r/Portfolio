import React from 'react'
import type { LucideProps } from 'lucide-react'

interface HobbyCardProps {
  icon: React.ComponentType<LucideProps>
  title: string
  description: string
}

const HobbyCard: React.FC<HobbyCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="transform rounded-lg bg-dark-surface p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-cyan/20">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dark-bg text-neon-cyan">
        <Icon size={32} />
      </div>
      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  )
}

export default HobbyCard
