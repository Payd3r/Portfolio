import { Calendar, CheckCircle, Clock, Award } from 'lucide-react'

interface TimelinePhase {
  phase: string
  duration: string
  achievements: string[]
  status: 'completed' | 'in-progress' | 'planned'
}

interface ProjectTimelineProps {
  timeline: TimelinePhase[]
}

const ProjectTimeline = ({ timeline }: ProjectTimelineProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={20} className="text-green-400" />
      case 'in-progress':
        return <Clock size={20} className="text-yellow-400" />
      case 'planned':
        return <Calendar size={20} className="text-blue-400" />
      default:
        return <Calendar size={20} className="text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/30 bg-green-900/20'
      case 'in-progress':
        return 'border-yellow-500/30 bg-yellow-900/20'
      case 'planned':
        return 'border-blue-500/30 bg-blue-900/20'
      default:
        return 'border-gray-500/30 bg-gray-900/20'
    }
  }

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Calendar size={32} className="text-neon-purple" />
          Timeline di Sviluppo
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
      </div>
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green"></div>
        
        <div className="space-y-8">
          {timeline.map((phase, index) => (
            <div key={index} className="relative flex items-start gap-8">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-full border-2 ${getStatusColor(phase.status)} flex items-center justify-center backdrop-blur-sm`}>
                  {getStatusIcon(phase.status)}
                </div>
                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-neon-purple to-neon-green"></div>
                )}
              </div>
              
              {/* Content */}
              <div className={`flex-1 p-8 rounded-2xl border ${getStatusColor(phase.status)} backdrop-blur-sm`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Award size={24} className="text-neon-cyan" />
                    {phase.phase}
                  </h3>
                  <span className="px-4 py-2 bg-dark-surface/50 rounded-full text-sm font-medium text-gray-300 backdrop-blur-sm">
                    {phase.duration}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {phase.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex items-start gap-4 p-4 bg-dark-surface/30 rounded-xl border border-gray-700/30"
                    >
                      <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectTimeline 