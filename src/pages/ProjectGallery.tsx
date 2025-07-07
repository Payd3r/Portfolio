import ProjectCard from '@/components/ProjectCard'
import { projects, ProjectType } from '@/utils/projects'

const ProjectGallery = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center text-neon-purple mb-12">
        I Miei Progetti
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: ProjectType) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectGallery
