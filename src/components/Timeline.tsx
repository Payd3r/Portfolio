import React from 'react'
import { timelineData } from '@/utils/data'

interface TimelineItemProps {
  item: typeof timelineData[0]
  isLeft: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLeft }) => {
  const CardContent = (
    <>
      <h3 className="text-xl font-bold text-primary">{item.title}</h3>
      <p className="text-sm text-secondary mt-1">{item.date}</p>
      <p className="text-secondary/80 mt-2">{item.description}</p>
    </>
  )

  return (
    <div className="relative mb-12">
      {/* Dot in the middle */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-2 border-accent rounded-full md:top-0 top-1"></div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className={`flex items-center ${isLeft ? 'flex-row-reverse' : ''}`}>
          <div className="w-1/2"></div> {/* Spacer */}
          <div
            className={`w-1/2 rounded-lg bg-surface p-4 shadow-lg ${
              isLeft ? 'pr-10 mr-10 text-right' : 'pl-10 ml-10 text-left'
            }`}
          >
            {CardContent}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden ml-8 rounded-lg bg-surface p-4 shadow-lg">
        {CardContent}
      </div>
    </div>
  )
}

const Timeline: React.FC = () => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Vertical Line */}
      <div className="absolute h-full w-0.5 bg-secondary/30 left-1/2 -translate-x-1/2 hidden md:block"></div>
      <div className="absolute h-full w-0.5 bg-secondary/30 left-[7px] md:hidden"></div>

      {timelineData.map((item, index) => (
        <TimelineItem key={item.id} item={item} isLeft={index % 2 === 0} />
      ))}
    </div>
  )
}

export default Timeline
