import React, { useState, useEffect } from 'react'
import { timelineData } from '@/utils/data'
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react'

interface TimelineItemProps {
  item: typeof timelineData[0]
  index: number
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200)
    return () => clearTimeout(timer)
  }, [index])

  const getIconComponent = () => {
    if (item.title.includes('Magistrale') || item.title.includes('Laurea') || item.title.includes('Diploma')) {
      return <GraduationCap className="w-5 h-5" />
    }
    return <Briefcase className="w-5 h-5" />
  }

  return (
    <div 
      className={`relative mb-0 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Timeline dot with glow effect */}
      <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-accent to-accent-hover rounded-full border-4 border-surface shadow-lg shadow-accent/30 z-10 group-hover:scale-125 transition-transform duration-300">
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
          <div className="w-1/2"></div>
          <div
            className={`w-1/2 group cursor-pointer ${
              index % 2 === 0 ? 'pr-12 mr-12 text-right' : 'pl-12 ml-12 text-left'
            }`}
          >
            <div className="relative">
              {/* Card with modern design */}
              <div className="bg-gradient-to-br from-surface to-surface/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-secondary/10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:scale-105 group-hover:border-accent/30 relative overflow-hidden">
                {/* Icon and year badge */}
                <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-accent-hover rounded-full text-white shadow-lg">
                    {getIconComponent()}
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-secondary/70 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-2 text-secondary/70 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{item.institution}</span>
                  <span className="text-accent">•</span>
                  <span>{item.location}</span>
                </div>

                <p className="text-secondary/80 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent/40 to-accent-hover/40 transition-all duration-300 group-hover:w-full"></div>
              </div>

              {/* Connection line */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r ${
                index % 2 === 0 
                  ? 'from-accent to-transparent right-0 translate-x-full' 
                  : 'from-transparent to-accent left-0 -translate-x-full'
              }`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="ml-12 group cursor-pointer">
          <div className="relative">
            <div className="bg-gradient-to-br from-surface to-surface/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-secondary/10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:scale-105 group-hover:border-accent/30 relative overflow-hidden">
              {/* Icon and year badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-accent-hover rounded-full text-white shadow-lg">
                  {getIconComponent()}
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold border border-accent/20">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              
              <div className="flex items-center gap-2 text-secondary/70 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>

              <div className="flex items-center gap-2 text-secondary/70 text-sm mb-3">
                <MapPin className="w-4 h-4" />
                <span>{item.institution}</span>
                <span className="text-accent">•</span>
                <span>{item.location}</span>
              </div>

              <p className="text-secondary/80 leading-relaxed">
                {item.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent/40 to-accent-hover/40 transition-all duration-300 group-hover:w-full"></div>
            </div>

            {/* Connection line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent to-accent left-0 -translate-x-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Animated vertical line */}
      <div className="absolute h-full w-1 bg-gradient-to-b from-accent via-accent-hover to-accent left-1/2 -translate-x-1/2 hidden md:block">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-hover animate-pulse"></div>
      </div>
      
      {/* Mobile line */}
      <div className="absolute h-full w-1 bg-gradient-to-b from-accent via-accent-hover to-accent left-[11px] md:hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-hover animate-pulse"></div>
      </div>

      {/* Timeline items */}
      <div className="relative z-10">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 hidden md:block"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 hidden md:block"></div>
    </div>
  )
}

export default Timeline
