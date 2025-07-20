import { useParams, Link } from 'react-router-dom'
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
  Target,
  Lightbulb,
  BookOpen,
  MessageSquare,
  Play,
  BarChart3,
} from 'lucide-react'
import AnimatedPage from '@/components/AnimatedPage'
import ProjectDetailSkeleton from '@/components/ProjectDetailSkeleton'
import SEO from '@/components/SEO'
import {
  ProjectScreenshots,
  ProjectTechStack,
  ProjectTimeline,
} from '@/components/project-details'

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
  const { projectId } = useParams<{ projectId: string }>()
  const [project, setProject] = useState<ProjectType | undefined>()
  const [repoStats, setRepoStats] = useState<RepoStats | null>(null)
  const [advancedStats, setAdvancedStats] = useState<AdvancedRepoStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjectData = async () => {
      if (!projectId) return
      
      setIsLoading(true)
      
      // Trova il progetto
      const foundProject = projects.find((p: ProjectType) => p.id === projectId)
      setProject(foundProject)

      // Se il progetto ha un repository, prova a caricare le statistiche
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
          console.error('Failed to fetch repo stats:', error)
          // Non bloccare il caricamento se le statistiche falliscono
        }
      }
      
      setIsLoading(false)
    }

    fetchProjectData()
  }, [projectId])

  if (isLoading) {
    return <ProjectDetailSkeleton />
  }

  if (!project) {
    return (
      <AnimatedPage className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl text-neon-purple mb-4">Progetto non trovato</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-neon-cyan hover:underline"
          >
            <ArrowLeft size={20} />
            Torna indietro
          </Link>
        </div>
      </AnimatedPage>
    )
  }

  const totalLanguageBytes = advancedStats
    ? Object.values(advancedStats.languages).reduce((a, b) => a + b, 0)
    : 0

  return (
    <AnimatedPage className="min-h-screen">
      <SEO
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        type="article"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-0">
        {/* Background Pattern */}
        
        
        <div className="relative container mx-auto px-4 py-16">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Torna indietro</span>
            </Link>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              {project.repo && (
                <a
                  href={`https://github.com/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface/50 backdrop-blur-sm border border-neon-purple/30 text-neon-purple rounded-lg hover:bg-neon-purple hover:text-dark-bg transition-all duration-300"
                >
                  <Github size={16} />
                  <span>Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan text-dark-bg rounded-lg hover:bg-neon-cyan/80 transition-all duration-300 font-medium"
                >
                  <Play size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-neon-cyan"></div>
              <span className="text-neon-cyan font-semibold text-sm uppercase tracking-wider">Progetto</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-neon-cyan"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {project.title}
            </h1>
            
            {project.longDescription && (
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                {project.longDescription}
              </p>
            )}
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Repository Stats */}
            {project.repo && repoStats && (
              <div className="flex justify-center items-center gap-8 bg-dark-surface/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 max-w-md mx-auto">
                <div className="flex items-center gap-2" title="Stelle">
                  <Star className="text-yellow-400" />
                  <span className="text-white font-medium">{repoStats.stars}</span>
                </div>
                <div className="flex items-center gap-2" title="Forks">
                  <GitFork className="text-gray-400" />
                  <span className="text-white font-medium">{repoStats.forks}</span>
                </div>
                {advancedStats && (
                  <>
                    <div className="flex items-center gap-2" title="Commits">
                      <GitCommit className="text-gray-400" />
                      <span className="text-white font-medium">{advancedStats.totalCommits}</span>
                    </div>
                    <div className="flex items-center gap-2" title="Contributori">
                      <Users className="text-gray-400" />
                      <span className="text-white font-medium">{advancedStats.contributors.length}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Screenshots Section */}
        {project.screenshots && <ProjectScreenshots screenshots={project.screenshots} />}

        {/* Problem & Solution Section */}
        {(project.problem || project.solution) && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Target size={32} className="text-neon-purple" />
                Contesto e Soluzione
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.problem && (
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-3">
                    <MessageSquare size={24} />
                    Problema Risolto
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.problem}</p>
                </div>
              )}
              
              {project.solution && (
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-2xl p-8 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-3">
                    <Lightbulb size={24} />
                    La Mia Soluzione
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.solution}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Features Section */}
        {project.features && project.features.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <BookOpen size={32} className="text-neon-cyan" />
                Funzionalità Principali
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-neon-cyan/30 transition-all duration-300 group"
                >
                  <div className="w-3 h-3 bg-neon-cyan rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-300 text-lg leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {project.techStack && <ProjectTechStack techStack={project.techStack} />}

        {/* Timeline di Sviluppo */}
        {project.timeline && <ProjectTimeline timeline={project.timeline} />}

        {/* Metriche e Risultati - Compresse su una riga */}
        {project.metrics && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <BarChart3 size={32} className="text-neon-green" />
                Metriche e Risultati
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="p-6 bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
                >
                  <h3 className="text-xl font-semibold text-neon-cyan mb-4 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold text-white">
                          {metric.value}{metric.unit}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sfide e Apprendimenti */}
        {(project.challenges || project.learnings) && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Target size={32} className="text-neon-purple" />
                Sfide e Apprendimenti
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-red-400 mb-6 flex items-center gap-3">
                    <MessageSquare size={24} />
                    Sfide Affrontate
                  </h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="p-6 bg-gradient-to-r from-red-900/20 to-red-800/10 border border-red-500/30 rounded-xl backdrop-blur-sm"
                      >
                        <span className="text-gray-300 text-lg">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {project.learnings && project.learnings.length > 0 && (
                <div>
                  <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center gap-3">
                    <Lightbulb size={24} />
                    Lezioni Apprese
                  </h3>
                  <div className="space-y-4">
                    {project.learnings.map((learning, index) => (
                      <div
                        key={index}
                        className="p-6 bg-gradient-to-r from-green-900/20 to-green-800/10 border border-green-500/30 rounded-xl backdrop-blur-sm"
                      >
                        <span className="text-gray-300 text-lg">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Dettagli Repository (sezione esistente) */}
        {advancedStats && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Code size={32} className="text-neon-green" />
                Dettagli Repository
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-neon-green mb-6 flex items-center gap-3">
                  <Code size={24} />
                  Linguaggi Utilizzati
                </h3>
                {totalLanguageBytes > 0 ? (
                  <div className="space-y-4">
                    <div className="w-full bg-dark-surface rounded-full h-4 overflow-hidden">
                      {Object.entries(advancedStats.languages).map(
                        ([lang, bytes]) => (
                          <div
                            key={lang}
                            className="h-full inline-block"
                            style={{
                              width: `${(bytes / totalLanguageBytes) * 100}%`,
                              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                            }}
                            title={`${lang}: ${((bytes / totalLanguageBytes) * 100).toFixed(1)}%`}
                          />
                        )
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(advancedStats.languages).map(([lang, bytes]) => (
                        <div key={lang} className="flex justify-between text-sm">
                          <span className="text-gray-300">{lang}</span>
                          <span className="text-neon-cyan font-medium">
                            {((bytes / totalLanguageBytes) * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">Nessun dato sui linguaggi disponibile.</p>
                )}
              </div>
              
              <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-neon-green mb-6 flex items-center gap-3">
                  <Users size={24} />
                  Contributori Principali
                </h3>
                <div className="flex flex-wrap gap-4">
                  {advancedStats.contributors.slice(0, 8).map((c) => (
                    <a
                      href={`https://github.com/${c.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={c.login}
                      title={`${c.login} (${c.contributions} commits)`}
                      className="group"
                    >
                      <img
                        src={c.avatar_url}
                        alt={c.login}
                        className="w-16 h-16 rounded-full border-2 border-neon-purple hover:border-neon-cyan transition-all duration-300 group-hover:scale-110"
                      />
                      <p className="text-xs text-gray-400 text-center mt-2 group-hover:text-neon-cyan transition-colors">
                        {c.login}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </AnimatedPage>
  )
}

export default ProjectDetail
