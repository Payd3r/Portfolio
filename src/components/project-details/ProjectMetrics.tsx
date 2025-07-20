import { TrendingUp, Users, Zap, Target, BarChart3, Activity } from 'lucide-react'

interface Metric {
  category: string
  metrics: {
    name: string
    value: string
    unit?: string
    change?: string
    trend?: 'up' | 'down' | 'stable'
  }[]
}

interface ProjectMetricsProps {
  metrics: Metric[]
}

const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'performance':
        return <Zap size={24} />
      case 'user satisfaction':
        return <Users size={24} />
      case 'technical':
        return <Target size={24} />
      case 'business':
        return <TrendingUp size={24} />
      default:
        return <BarChart3 size={24} />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'performance':
        return 'text-neon-cyan'
      case 'user satisfaction':
        return 'text-neon-green'
      case 'technical':
        return 'text-neon-purple'
      case 'business':
        return 'text-yellow-400'
      default:
        return 'text-gray-400'
    }
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-400" />
      case 'down':
        return <TrendingUp size={16} className="text-red-400 rotate-180" />
      case 'stable':
        return <Activity size={16} className="text-blue-400" />
      default:
        return null
    }
  }

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <BarChart3 size={32} className="text-neon-green" />
          Metriche e Risultati
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {metrics.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="p-8 bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className={`flex items-center gap-4 mb-8 ${getCategoryColor(category.category)}`}>
              <div className="p-3 bg-dark-surface/50 rounded-xl backdrop-blur-sm">
                {getCategoryIcon(category.category)}
              </div>
              <h3 className="text-2xl font-bold">{category.category}</h3>
            </div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.metrics.map((metric, metricIndex) => (
                <div
                  key={metricIndex}
                  className="p-6 bg-dark-surface/50 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:bg-dark-surface/70"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-300">
                      {metric.name}
                    </h4>
                    {getTrendIcon(metric.trend)}
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="text-lg text-gray-400">
                        {metric.unit}
                      </span>
                    )}
                  </div>
                  
                  {metric.change && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`text-sm font-medium ${
                        metric.trend === 'up' ? 'text-green-400' :
                        metric.trend === 'down' ? 'text-red-400' :
                        'text-blue-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectMetrics 