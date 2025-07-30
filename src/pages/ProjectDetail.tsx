import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Building, User, GraduationCap, Star, Clock, TrendingUp } from 'lucide-react'
import { getProjectById } from '@/utils/projects'
import ProjectCarousel from '@/components/ProjectCarousel'
import { useEffect } from 'react'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(id || '')

  // Scroll to top quando si apre la pagina
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Progetto non trovato</h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Torna alla galleria
          </button>
        </div>
      </div>
    )
  }

  // Prepara le immagini per il carosello
  const carouselImages = []
  if (project.imageUrl) carouselImages.push(project.imageUrl)
  if (project.screenshots) {
    project.screenshots.forEach(screenshot => {
      carouselImages.push(screenshot.imageUrl)
    })
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header con breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla galleria
          </button>
          
          <h1 className="text-4xl font-bold text-primary mb-2">{project.title}</h1>
          <p className="text-secondary/80 text-lg">{project.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenuto principale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Carosello immagini */}
            {carouselImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <ProjectCarousel
                  images={carouselImages}
                  title={project.title}
                  interval={10000}
                />
              </motion.div>
            )}

            {/* Descrizione lunga */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert max-w-none"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Descrizione</h2>
                <p className="text-secondary/80 leading-relaxed">{project.longDescription}</p>
              </motion.div>
            )}

            {/* Problema e Soluzione */}
            {project.problem && project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    Problema
                  </h3>
                  <p className="text-secondary/80">{project.problem}</p>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Soluzione
                  </h3>
                  <p className="text-secondary/80">{project.solution}</p>
                </div>
              </motion.div>
            )}

            {/* Funzionalità */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Funzionalità</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-secondary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Before/After per landing page */}
            {project.beforeAfter && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Prima e Dopo</h2>
                <p className="text-secondary/80 mb-4">{project.beforeAfter.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Prima</h4>
                    <img
                      src={project.beforeAfter.before}
                      alt="Prima"
                      className="w-full rounded-xl border border-red-500/20"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Dopo</h4>
                    <img
                      src={project.beforeAfter.after}
                      alt="Dopo"
                      className="w-full rounded-xl border border-green-500/20"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Recensione cliente per landing page */}
            {project.clientReview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-primary mb-4">Recensione Cliente</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{project.clientReview.name}</h4>
                      <p className="text-secondary/60 text-sm">{project.clientReview.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < project.clientReview.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-secondary/30'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="text-secondary/80 italic">
                    "{project.clientReview.review}"
                  </blockquote>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Informazioni contesto */}
            {project.context && (
              <div className="bg-surface/30 border border-accent/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Contesto</h3>
                <div className="space-y-3">
                  {project.context.type === 'university' && (
                    <div className="flex items-center gap-2 text-blue-400">
                      <GraduationCap className="w-5 h-5" />
                      <span>Progetto universitario</span>
                    </div>
                  )}
                  {project.context.type === 'work' && (
                    <div className="flex items-center gap-2 text-green-400">
                      <Building className="w-5 h-5" />
                      <span>Progetto lavorativo</span>
                    </div>
                  )}
                  {project.context.type === 'personal' && (
                    <div className="flex items-center gap-2 text-purple-400">
                      <User className="w-5 h-5" />
                      <span>Progetto personale</span>
                    </div>
                  )}
                  
                  {project.context.course && (
                    <div className="text-secondary/80">
                      <strong>Corso:</strong> {project.context.course}
                    </div>
                  )}
                  {project.context.company && (
                    <div className="text-secondary/80">
                      <strong>Azienda:</strong> {project.context.company}
                    </div>
                  )}
                  {project.context.duration && (
                    <div className="text-secondary/80">
                      <strong>Durata:</strong> {project.context.duration}
                    </div>
                  )}
                  {project.context.thesis && (
                    <div className="text-secondary/80">
                      <strong>Tesi:</strong>{' '}
                      <a
                        href={project.context.thesis}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Visualizza PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tecnologie */}
            <div className="bg-surface/30 border border-accent/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Tecnologie</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            {project.timeline && (
              <div className="bg-surface/30 border border-accent/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Timeline
                </h3>
                <div className="space-y-3">
                  <div className="text-secondary/80">
                    <strong>Inizio:</strong> {project.timeline.startDate}
                  </div>
                  {project.timeline.endDate && (
                    <div className="text-secondary/80">
                      <strong>Fine:</strong> {project.timeline.endDate}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Metriche */}
            {project.metrics && (
              <div className="bg-surface/30 border border-accent/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Metriche
                </h3>
                <div className="space-y-3">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-secondary/80">
                      <strong className="capitalize">{key}:</strong> {String(value)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Link */}
            <div className="bg-surface/30 border border-accent/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Link</h3>
              <div className="space-y-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
