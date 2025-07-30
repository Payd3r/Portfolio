import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, X, ExternalLink, Github, Building, User, GraduationCap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getProjectsByCategory } from '@/utils/projects'

const ProjectGallery = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const navigate = useNavigate()

  const { main, university, work, personal } = getProjectsByCategory()
  
  // Scroll to top quando si apre la pagina
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Crea un array unico di tutti i progetti senza duplicati
  const allProjects = useMemo(() => {
    const projectsMap = new Map()
    
    // Aggiungi tutti i progetti usando l'ID come chiave per evitare duplicati
    ;[...main, ...university, ...work, ...personal].forEach(project => {
      if (!projectsMap.has(project.id)) {
        projectsMap.set(project.id, project)
      }
    })
    
    return Array.from(projectsMap.values())
  }, [main, university, work, personal])

  // Categorie disponibili
  const categories = [
    { id: 'all', name: 'Tutti i progetti', count: allProjects.length },
    { id: 'university', name: 'Progetti universitari', count: university.length },
    { id: 'work', name: 'Progetti lavoro', count: work.length },
    { id: 'personal', name: 'Progetti personali', count: personal.length }
  ]

  // Filtra i progetti in base ai criteri selezionati
  const filteredProjects = useMemo(() => {
    let filtered = allProjects

    // Filtro per categoria
    if (selectedCategory !== 'all') {
      switch (selectedCategory) {
        case 'university':
          filtered = university
          break
        case 'work':
          filtered = work
          break
        case 'personal':
          filtered = personal
          break
        default:
          filtered = allProjects
      }
    }

    // Filtro per ricerca testuale
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filtro per tag
    if (selectedTags.length > 0) {
      filtered = filtered.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      )
    }

    return filtered
  }, [allProjects, university, work, personal, selectedCategory, searchTerm, selectedTags])

  // Ottieni tutti i tag unici dai progetti
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    allProjects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [allProjects])

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedTags([])
  }

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`)
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Galleria Progetti</h1>
          <p className="text-secondary/80 text-lg">
            Esplora tutti i miei progetti, filtrati per categoria e tecnologia
          </p>
        </motion.div>

        {/* Filtri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-6"
        >
          {/* Barra di ricerca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Cerca progetti, tecnologie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface/50 border border-accent/20 rounded-xl text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          {/* Filtri categoria */}
          <div>            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-surface/50 text-secondary hover:bg-surface/80 border border-accent/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Filtri tag */}
          {allTags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Tecnologie</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTags(prev =>
                        prev.includes(tag)
                          ? prev.filter(t => t !== tag)
                          : [...prev, tag]
                      )
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-accent text-white'
                        : 'bg-surface/50 text-secondary hover:bg-surface/80 border border-accent/20'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pulisci filtri */}
          {(searchTerm || selectedCategory !== 'all' || selectedTags.length > 0) && (
            <div>
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 text-secondary hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
                Pulisci filtri
              </button>
            </div>
          )}
        </motion.div>

        {/* Risultati */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">
              {filteredProjects.length} progetto{filteredProjects.length !== 1 ? 'i' : ''} trovato{filteredProjects.length !== 1 ? 'i' : ''}
            </h2>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-secondary/50 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Nessun progetto trovato</h3>
              <p className="text-secondary/80 mb-6">
                Prova a modificare i filtri o la ricerca
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Pulisci filtri
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleProjectClick(project.id)}
                  className="group cursor-pointer"
                >
                   {/* Card del progetto */}
                   <div className="relative bg-surface/30 border border-accent/20 rounded-2xl p-6 hover:bg-surface/50 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                     {/* Immagine progetto con icone sovrapposte */}
                     <div className="relative w-full h-80 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-surface to-surface/80">
                       <img
                         src={project.imageUrl}
                         alt={project.title}
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       />
                       
                       {/* Icone GitHub e Demo sovrapposte */}
                       <div className="absolute top-3 right-3 flex items-center gap-2">
                         {project.githubUrl && (
                           <a
                             href={project.githubUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="p-2 bg-black/70 hover:bg-black/90 text-white transition-colors rounded-lg backdrop-blur-sm"
                             onClick={(e) => e.stopPropagation()}
                           >
                             <Github className="w-4 h-4" />
                           </a>
                         )}
                         {project.demoUrl && (
                           <a
                             href={project.demoUrl}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="p-2 bg-accent/90 hover:bg-accent text-white transition-colors rounded-lg backdrop-blur-sm"
                             onClick={(e) => e.stopPropagation()}
                           >
                             <ExternalLink className="w-4 h-4" />
                           </a>
                         )}
                       </div>
                     </div>

                     {/* Contenuto */}
                     <div className="space-y-3">
                       {/* Categoria e anno sopra al titolo */}
                       <div className="flex items-center gap-2">
                         {project.context?.year && (
                           <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                             {project.context.year}
                           </span>
                         )}
                         {project.context?.type && (
                           <div className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                             project.context.type === 'university' 
                               ? 'bg-blue-500/20 text-blue-500'
                               : project.context.type === 'work'
                               ? 'bg-green-500/20 text-green-500'
                               : 'bg-purple-500/20 text-purple-500'
                           }`}>
                             {project.context.type === 'university' && <GraduationCap className="w-3 h-3" />}
                             {project.context.type === 'work' && <Building className="w-3 h-3" />}
                             {project.context.type === 'personal' && <User className="w-3 h-3" />}
                             {project.context.type === 'university' ? 'Università' : 
                              project.context.type === 'work' ? 'Lavoro' : 'Personale'}
                           </div>
                         )}
                       </div>

                       {/* Titolo */}
                       <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                         {project.title}
                       </h3>

                       {/* Descrizione con altezza fissa */}
                       <div className="h-10 flex flex-col justify-center">
                         <p className="text-secondary/80 text-sm leading-5">
                           {project.description}
                         </p>
                         <p className="text-secondary/80 text-sm leading-5 invisible">
                           &nbsp;
                         </p>
                       </div>
                       
                       {/* Tag tecnologici migliorati */}
                       <div className="flex flex-wrap gap-1">
                         {[
                           project.techStack?.frontend,
                           project.techStack?.backend,
                           project.techStack?.database,
                           project.techStack?.devops,
                           project.techStack?.other
                         ].filter(Boolean).slice(0, 4).map((tech, index) => (
                           <span 
                             key={index}
                             className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full"
                           >
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectGallery
