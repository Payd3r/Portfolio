import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectCarouselProps {
  images: string[]
  title: string
  interval?: number
}

const ProjectCarousel = ({ images, title, interval = 10000 }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Preload delle immagini per evitare il resize
  useEffect(() => {
    images.forEach((imageSrc) => {
      const img = new Image()
      img.src = imageSrc
    })
  }, [images])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, images.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-surface to-surface/80 rounded-2xl border border-accent/20 flex items-center justify-center">
        <p className="text-secondary/70">Nessuna immagine disponibile</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden group">
      {/* Immagine di background per evitare gap */}
      <img
        src={images[currentIndex]}
        alt={`${title} - Immagine ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      
      {/* Immagine principale con transizione */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Immagine ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut",
              opacity: { duration: 0.3 },
              scale: { duration: 0.4 }
            }}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay con titolo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-white/80 text-sm">
            {currentIndex + 1} di {images.length}
          </p>
        </div>
      </div>

      {/* Controlli di navigazione */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicatori */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel 