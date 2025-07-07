import React from 'react'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <Link
      to={`/project/${id}`}
      className="group block transform rounded-lg bg-dark-surface shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-purple/20"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-neon-cyan group-hover:underline">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-neon-purple/20 text-neon-purple"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
