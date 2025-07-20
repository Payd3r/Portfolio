import React from 'react'
import { Link } from 'react-router-dom'
import { Github, ExternalLink } from 'lucide-react'
import type { ProjectType } from '@/utils/projects'

interface ProjectCardProps {
  project: ProjectType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isWIP = project.title.includes('(WIP)')
  
  const CardContent = () => (
    <>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-secondary mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-2 mt-auto flex justify-end gap-4">
        {project.repo && (
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            title="Repository GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={24} />
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-colors"
            title="Live Demo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={24} />
          </a>
        )}
      </div>
    </>
  )

  if (isWIP) {
    return (
      <div className="bg-surface rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-accent hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 h-full flex flex-col cursor-default">
        <CardContent />
      </div>
    )
  }

  return (
    <Link 
      to={`/projects/${project.id}`} 
      className="block bg-surface rounded-lg overflow-hidden shadow-lg border border-transparent hover:border-accent hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 h-full flex flex-col group"
    >
      <CardContent />
    </Link>
  )
}

export default ProjectCard
