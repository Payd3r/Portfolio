import { useParams, Link } from 'react-router-dom'
import { projects, ProjectType } from '@/utils/projects'
import { useEffect, useState } from 'react'
import { Octokit } from '@octokit/rest'
import { Star, GitFork, ArrowLeft } from 'lucide-react'

const octokit = new Octokit()

interface RepoStats {
  stars: number
  forks: number
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [project, setProject] = useState<ProjectType | undefined>()
  const [repoStats, setRepoStats] = useState<RepoStats | null>(null)

  useEffect(() => {
    if (id) {
      const foundProject = projects.find((p: ProjectType) => p.id === id)
      setProject(foundProject)

      if (foundProject?.repo) {
        const [owner, repo] = foundProject.repo.split('/')
        octokit.repos
          .get({ owner, repo })
          .then(({ data }) => {
            setRepoStats({
              stars: data.stargazers_count,
              forks: data.forks_count,
            })
          })
          .catch(console.error)
      }
    }
  }, [id])

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl text-neon-purple">Progetto non trovato</h2>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-16 text-white min-h-screen">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-neon-cyan mb-8 hover:underline"
      >
        <ArrowLeft size={20} />
        Torna alla Home
      </Link>
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <h1 className="text-4xl font-bold text-neon-cyan mb-2 md:mb-0">
          {project.title}
        </h1>
        {project.repo && (
          <div className="flex items-center gap-6">
            {repoStats && (
              <>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" />
                  <span>{repoStats.stars}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork className="text-gray-400" />
                  <span>{repoStats.forks}</span>
                </div>
              </>
            )}
            <a
              href={`https://github.com/${project.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:underline"
            >
              Vedi su GitHub
            </a>
          </div>
        )}
      </div>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-96 object-cover rounded-lg mb-8 shadow-lg"
      />
      <div className="flex gap-2 mb-8">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="bg-gray-800 text-neon-green px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-lg leading-relaxed">{project.description}</p>
    </div>
  )
}

export default ProjectDetail
