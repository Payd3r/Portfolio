import React, { useState, useEffect } from 'react'
import { timelineData } from '@/utils/data'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

interface TimelineItemProps {
  item: typeof timelineData[0]
  index: number
}

const milestoneSizeMap = {
  small: { size: 10, border: 2, pulse: 14 },
  medium: { size: 18, border: 3, pulse: 24 },
  large: { size: 30, border: 4, pulse: 38 },
} satisfies Record<
  'small' | 'medium' | 'large',
  { size: number; border: number; pulse: number }
>

const cardScaleClasses: Record<'small' | 'medium' | 'large', string> = {
  small: 'md:scale-90',
  medium: 'md:scale-100',
  large: 'md:scale-110 md:shadow-2xl',
}

const cardPaddingClasses: Record<'small' | 'medium' | 'large', string> = {
  small: 'px-5 py-3',
  medium: 'px-6 py-4',
  large: 'px-7 py-6',
}

const mobilePaddingClasses: Record<'small' | 'medium' | 'large', string> = {
  small: 'px-3 py-2',
  medium: 'px-4 py-3',
  large: 'px-5 py-4',
}

const sideSpacingMap: Record<'small' | 'medium' | 'large', { left: string; right: string }> = {
  small: { left: 'pr-1 mr-6', right: 'pl-1 ml-6' },
  medium: { left: 'pr-12 mr-9', right: 'pl-12 ml-9' },
  large: { left: 'pr-20 mr-12', right: 'pl-20 ml-12' },
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

  const sizeKey =
    (item.importance as keyof typeof milestoneSizeMap) ?? ('medium' as const)
  const milestoneSize = milestoneSizeMap[sizeKey]
  const cardScale = cardScaleClasses[sizeKey]
  const cardPadding = cardPaddingClasses[sizeKey]
  const mobilePadding = mobilePaddingClasses[sizeKey]
  const sideSpacing = sideSpacingMap[sizeKey] ?? sideSpacingMap.medium
  const showInstitution = sizeKey === 'large'
  const isLeft = index % 2 === 0
  const textAlign = isLeft ? 'text-right' : 'text-left'
  const contentAlign = isLeft ? 'items-end' : 'items-start'
  const badgeLayout = isLeft ? 'justify-end text-right' : 'justify-start text-left'
  const locationLayout = isLeft ? 'justify-end text-right' : 'justify-start text-left'

  return (
    <div
      className={`group relative mb-8 sm:mb-12 md:mb-0 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
    >
      {/* Timeline dot with glow effect */}
      <div
        className="timeline-milestone absolute top-1/2 -translate-y-1/2 left-[0.875rem] md:left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-hover rounded-full shadow-lg shadow-accent/30 z-60 transition-transform duration-300"
        style={{
          width: milestoneSize.size,
          height: milestoneSize.size,
          borderWidth: milestoneSize.border,
        }}
      >
        <div
          className="absolute rounded-full opacity-0 bg-accent group-hover:opacity-25 group-focus-within:opacity-25 group-hover:animate-ping group-focus-within:animate-ping"
          style={{
            width: milestoneSize.pulse,
            height: milestoneSize.pulse,
            top: `calc(50% - ${milestoneSize.pulse / 2}px)`,
            left: `calc(50% - ${milestoneSize.pulse / 2}px)`,
          }}
        ></div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}>
          <div className="w-1/2"></div>
          <div
            className={`w-1/2 group cursor-pointer relative z-50 ${isLeft ? sideSpacing.left : sideSpacing.right
              } ${cardScale} flex flex-col ${contentAlign}`}
          >
            <div className="relative w-full">
              {/* Card with modern design */}
              <div className={`bg-gradient-to-br from-surface to-surface/80 backdrop-blur-sm rounded-2xl ${cardPadding} shadow-xl border border-secondary/10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:scale-105 group-hover:border-accent/30 relative z-50 ${isLeft ? 'ml-auto text-right' : 'mr-auto text-left'
                }`}>
                {/* Icon and year badge */}
                <div className={`flex items-center gap-3 mb-4 ${badgeLayout}`}>
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-accent-hover rounded-full text-white shadow-lg">
                    {getIconComponent()}
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-small-mobile md:text-small-desktop font-semibold border border-accent/20">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-card-mobile md:text-card-desktop font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 ${textAlign}`}>
                  {item.title}
                </h3>

                {showInstitution && (
                  <div className={`flex flex-wrap items-center gap-2 text-secondary/70 text-small-mobile md:text-small-desktop mb-3 ${locationLayout}`}>
                    <MapPin className="w-4 h-4" />
                    <span>{item.institution}</span>
                    <span className="text-accent">•</span>
                    <span>{item.location}</span>
                  </div>
                )}

                <p className={`text-secondary/80 leading-relaxed text-body-mobile md:text-body-desktop ${textAlign}`}>
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent/40 to-accent-hover/40 transition-all duration-300 group-hover:w-full"></div>
              </div>

              {/* Connection line */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r ${index % 2 === 0
                  ? 'from-accent to-transparent right-0 translate-x-full'
                  : 'from-transparent to-accent left-0 -translate-x-full'
                }`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden px-4">
        <div className={`ml-8 pl-3 group cursor-pointer relative z-50 ${cardScale}`}>
          <div className="relative">
            <div className={`bg-gradient-to-br from-surface to-surface/80 backdrop-blur-sm rounded-2xl ${mobilePadding} shadow-xl border border-secondary/10 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group-hover:border-accent/30 relative`}>
              {/* Icon and year badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-accent to-accent-hover rounded-full text-white shadow-lg">
                  {getIconComponent() && React.cloneElement(getIconComponent(), { className: 'w-4 h-4' })}
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-small-mobile md:text-small-desktop font-semibold border border-accent/20">
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-card-mobile md:text-card-desktop font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                {item.title}
              </h3>

              {showInstitution && (
                <div className="flex flex-wrap items-center gap-2 text-secondary/70 text-small-mobile md:text-small-desktop mb-3">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>{item.institution}</span>
                  <span className="text-accent">•</span>
                  <span>{item.location}</span>
                </div>
              )}

              <p className="text-secondary/80 leading-relaxed text-body-mobile md:text-body-desktop">
                {item.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent/40 to-accent-hover/40 transition-all duration-300 group-hover:w-full"></div>
            </div>

            {/* Connection line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-accent left-0 -translate-x-full"></div>
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
      <div className="absolute h-full w-1 bg-gradient-to-b from-accent via-accent-hover to-accent left-1/2 -translate-x-1/2 hidden md:block z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-hover animate-pulse"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-transparent via-accent/20 to-accent/40 blur-xl pointer-events-none"></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-t from-transparent via-accent/20 to-accent/40 blur-xl pointer-events-none"></div>
      </div>

      {/* Mobile line */}
      <div className="absolute h-full w-1 bg-gradient-to-b from-accent via-accent-hover to-accent left-3 md:hidden z-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-hover animate-pulse"></div>
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-transparent via-accent/20 to-accent/40 blur-lg pointer-events-none"></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-t from-transparent via-accent/20 to-accent/40 blur-lg pointer-events-none"></div>
      </div>

      {/* Timeline items */}
      <div className="relative z-50">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 hidden md:block z-30"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50 hidden md:block z-30"></div>
      <div className="absolute top-0 left-[0.875rem] -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-accent rounded-full shadow-md shadow-accent/40 md:hidden z-30"></div>
      <div className="absolute bottom-0 left-[0.875rem] translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-accent rounded-full shadow-md shadow-accent/40 md:hidden z-30"></div>
    </div>
  )
}

export default Timeline
