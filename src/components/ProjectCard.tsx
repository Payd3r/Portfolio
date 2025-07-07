import React from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repo?: string
  demoUrl?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  imageUrl,
  repo,
  demoUrl,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-dark-surface shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-purple/20">
      <Link to={`/project/${id}`} className="group block">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg aspect-video"
          loading="lazy"
          width="1600"
          height="900"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-neon-cyan group-hover:underline">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-300 h-10 overflow-hidden">
            {description}
          </p>
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
      <div className="mt-auto p-6 pt-0 flex justify-end gap-4">
        {repo && (
          <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-neon-cyan transition-colors"
            title="Repository GitHub"
          >
            <Github size={24} />
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-neon-cyan transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={24} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
