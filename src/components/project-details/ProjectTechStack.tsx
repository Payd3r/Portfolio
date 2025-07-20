import { Code, Database, Server, Cloud, Zap } from 'lucide-react'

interface TechStack {
  frontend?: string[]
  backend?: string[]
  database?: string[]
  devops?: string[]
  apis?: string[]
}

interface ProjectTechStackProps {
  techStack: TechStack
}

const ProjectTechStack = ({ techStack }: ProjectTechStackProps) => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Code size={16} />,
      color: 'text-neon-cyan',
      technologies: techStack.frontend || []
    },
    {
      title: 'Backend',
      icon: <Server size={16} />,
      color: 'text-neon-purple',
      technologies: techStack.backend || []
    },
    {
      title: 'Database',
      icon: <Database size={16} />,
      color: 'text-neon-green',
      technologies: techStack.database || []
    },
    {
      title: 'DevOps',
      icon: <Cloud size={16} />,
      color: 'text-yellow-400',
      technologies: techStack.devops || []
    },
    {
      title: 'APIs',
      icon: <Zap size={16} />,
      color: 'text-pink-400',
      technologies: techStack.apis || []
    }
  ]

  const hasTechnologies = categories.some(cat => cat.technologies.length > 0)

  if (!hasTechnologies) return null

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Code size={28} className="text-neon-cyan" />
          Stack Tecnologico
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
        <div className="flex flex-wrap gap-6">
          {categories.map((category) => {
            if (category.technologies.length === 0) return null
            
            return (
              <div key={category.title} className="flex-1 min-w-0">
                <div className={`flex items-center gap-2 mb-3 ${category.color}`}>
                  {category.icon}
                  <h3 className="text-sm font-semibold whitespace-nowrap">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-surface/50 backdrop-blur-sm rounded-lg border border-gray-700/30 text-gray-300 text-xs whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectTechStack 