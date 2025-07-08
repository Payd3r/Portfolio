import { useParams, useNavigate } from 'react-router-dom'
import type { ProjectType } from '@/utils/projects'
import { projects } from '@/utils/projects'
import { useEffect, useState } from 'react'
import { Octokit } from '@octokit/rest'
import {
  Star,
  GitFork,
  ArrowLeft,
  Users,
  GitCommit,
  Code,
  Github,
  ExternalLink,
} from 'lucide-react'
import AnimatedPage from '@/components/AnimatedPage'
import ProjectDetailSkeleton from '@/components/ProjectDetailSkeleton'
import SEO from '@/components/SEO'

const octokit = new Octokit()

interface RepoStats {
  stars: number
  forks: number
}

interface AdvancedRepoStats {
  languages: Record<string, number>
  contributors: { login: string; avatar_url: string; contributions: number }[]
  totalCommits: number
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<ProjectType | undefined>()
  const [repoStats, setRepoStats] = useState<RepoStats | null>(null)
  const [advancedStats, setAdvancedStats] = useState<AdvancedRepoStats | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRepoData = async () => {
      if (!id) return
      setIsLoading(true)

      const foundProject = projects.find((p: ProjectType) => p.id === id)
      setProject(foundProject)

      if (foundProject?.repo) {
        try {
          const [owner, repo] = foundProject.repo.split('/')

          const [repoRes, languagesRes, contributorsRes, commitsRes] =
            await Promise.all([
              octokit.repos.get({ owner, repo }),
              octokit.repos.listLanguages({ owner, repo }),
              octokit.repos.listContributors({ owner, repo }),
              octokit.repos.listCommits({ owner, repo, per_page: 1 }),
            ])

          setRepoStats({
            stars: repoRes.data.stargazers_count,
            forks: repoRes.data.forks_count,
          })

          // Extract total commit count from headers
          const commitHeader = commitsRes.headers.link || ''
          const match = commitHeader.match(/&page=(\d+)>; rel="last"/)
          const totalCommits = match
            ? parseInt(match[1], 10)
            : commitsRes.data.length

          setAdvancedStats({
            languages: languagesRes.data,
            contributors:
              contributorsRes.data
                ?.filter((c) => c.login && c.avatar_url && c.contributions)
                .map((c) => ({
                  login: c.login!,
                  avatar_url: c.avatar_url!,
                  contributions: c.contributions!,
                })) || [],
            totalCommits: totalCommits,
          })
        } catch (error) {
          console.error('Failed to fetch advanced repo stats:', error)
        }
      }
      setIsLoading(false)
    }

    fetchRepoData()
  }, [id])

  if (isLoading) {
    return <ProjectDetailSkeleton />
  }

  if (!project) {
    return (
      <AnimatedPage className="flex justify-center items-center h-screen">
        <h2 className="text-2xl text-neon-purple">Progetto non trovato</h2>
      </AnimatedPage>
    )
  }

  const totalLanguageBytes = advancedStats
    ? Object.values(advancedStats.languages).reduce((a, b) => a + b, 0)
    : 0

  return (
    <AnimatedPage className="container mx-auto py-16 text-white min-h-screen">
      <SEO
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        type="article"
      />
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-neon-cyan mb-8 hover:underline"
      >
        <ArrowLeft size={20} />
        Torna Indietro
      </button>
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <h1 className="text-4xl font-bold text-neon-cyan mb-2 md:mb-0">
          {project.title}
        </h1>
        {project.repo && (
          <div className="flex items-center gap-6">
            {repoStats && (
              <>
                <div className="flex items-center gap-2" title="Stelle">
                  <Star className="text-yellow-400" />
                  <span>{repoStats.stars}</span>
                </div>
                <div className="flex items-center gap-2" title="Forks">
                  <GitFork className="text-gray-400" />
                  <span>{repoStats.forks}</span>
                </div>
              </>
            )}
            {advancedStats && (
              <>
                <div className="flex items-center gap-2" title="Commits">
                  <GitCommit className="text-gray-400" />
                  <span>{advancedStats.totalCommits}</span>
                </div>
                <div className="flex items-center gap-2" title="Contributori">
                  <Users className="text-gray-400" />
                  <span>{advancedStats.contributors.length}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {project.repo && (
          <a
            href={`https://github.com/${project.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-purple text-neon-purple rounded-full transition-all duration-300 hover:bg-neon-purple hover:text-dark-bg hover:shadow-lg hover:shadow-neon-purple/30"
          >
            <Github />
            <span>Repository</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-neon-cyan text-neon-cyan rounded-full transition-all duration-300 hover:bg-neon-cyan hover:text-dark-bg hover:shadow-lg hover:shadow-neon-cyan/30"
          >
            <ExternalLink />
            <span>Live Demo</span>
          </a>
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

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-neon-purple mb-6">Galleria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://placehold.co/600x400/0D0221/39FF14?text=Mockup+1"
            alt="Mockup 1"
            className="rounded-lg shadow-lg"
          />
          <img
            src="https://placehold.co/600x400/0D0221/00FFFF?text=Mockup+2"
            alt="Mockup 2"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {advancedStats && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-neon-purple mb-6">
            Dettagli Repository
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-neon-green mb-4 flex items-center gap-2">
                <Code /> Linguaggi
              </h4>
              {totalLanguageBytes > 0 ? (
                <div className="w-full bg-dark-surface rounded-full h-6 overflow-hidden flex">
                  {Object.entries(advancedStats.languages).map(
                    ([lang, bytes]) => (
                      <div
                        key={lang}
                        className="h-full"
                        style={{
                          width: `${(bytes / totalLanguageBytes) * 100}%`,
                          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                        }}
                        title={`${lang}: ${((bytes / totalLanguageBytes) * 100).toFixed(2)}%`}
                      />
                    )
                  )}
                </div>
              ) : (
                <p>Nessun dato sui linguaggi.</p>
              )}
            </div>
            <div>
              <h4 className="text-xl font-semibold text-neon-green mb-4 flex items-center gap-2">
                <Users /> Contributori Principali
              </h4>
              <div className="flex flex-wrap gap-4">
                {advancedStats.contributors.slice(0, 5).map((c) => (
                  <a
                    href={`https://github.com/${c.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={c.login}
                    title={c.login}
                  >
                    <img
                      src={c.avatar_url}
                      alt={c.login}
                      className="w-12 h-12 rounded-full border-2 border-neon-purple hover:border-neon-cyan transition-all"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatedPage>
  )
}

export default ProjectDetail
