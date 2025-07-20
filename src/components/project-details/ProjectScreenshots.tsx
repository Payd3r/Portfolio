import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, Monitor, Smartphone } from 'lucide-react'

interface Screenshot {
  title: string
  description: string
  imageUrl: string
}

interface ProjectScreenshotsProps {
  screenshots: Screenshot[]
}

const ProjectScreenshots = ({ screenshots }: ProjectScreenshotsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === screenshots.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? screenshots.length - 1 : prev - 1
    )
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  if (!screenshots || screenshots.length === 0) return null

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Monitor size={32} className="text-neon-cyan" />
          Screenshots del Progetto
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonna Sinistra: Bottoni di Selezione */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Smartphone size={24} className="text-neon-purple" />
            Seleziona Pagina
          </h3>
          
          <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 h-[700px] overflow-y-auto">
            <div className="space-y-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-colors duration-300 ${
                    currentIndex === index
                      ? 'bg-neon-cyan/20 border-neon-cyan text-white'
                      : 'bg-dark-surface/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? 'bg-neon-cyan' : 'bg-gray-600'
                    }`} />
                    <h4 className="font-semibold text-lg">
                      {screenshot.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {screenshot.description}
                  </p>
                </button>
              ))}
              
              {/* Bottone aggiuntivo per statistiche di coppia */}
              <button
                className="w-full text-left p-4 rounded-xl border bg-dark-surface/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-gray-600" />
                  <h4 className="font-semibold text-lg">
                    Statistiche di Coppia
                  </h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Dashboard con metriche personalizzate per coppie e analisi dei ricordi condivisi
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Colonna Destra: Screenshots Verticali */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-3">
            <Monitor size={24} className="text-neon-green" />
            Anteprima
          </h3>

          <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 h-[700px] flex flex-col">
            <div className="relative flex-1">
              {/* Screenshot Principale */}
              <div className="relative h-full bg-dark-surface rounded-xl overflow-hidden mb-4">
                <img
                  src={screenshots[currentIndex]?.imageUrl}
                  alt={screenshots[currentIndex]?.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={openModal}
                />
                
                {/* Controlli del carosello */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-700/50"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-700/50"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            

            {/* Indicatori */}
            {screenshots.length > 1 && (
              <div className="flex justify-center gap-2 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex
                        ? 'bg-neon-cyan'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal per visualizzazione fullscreen */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 bg-dark-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-gray-700/50"
            >
              <X size={20} />
            </button>
            
            <img
              src={screenshots[currentIndex]?.imageUrl}
              alt={screenshots[currentIndex]?.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-dark-surface/80 backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                {screenshots[currentIndex]?.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {screenshots[currentIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectScreenshots 