import { Upload, Check, Settings, Eye, Download } from 'lucide-react'

interface WorkflowStep {
  step: number
  title: string
  description: string
  icon: string
}

interface ProjectWorkflowProps {
  workflow: WorkflowStep[]
}

const ProjectWorkflow = ({ workflow }: ProjectWorkflowProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'upload':
        return <Upload size={14} />
      case 'check':
        return <Check size={14} />
      case 'settings':
        return <Settings size={14} />
      case 'eye':
        return <Eye size={14} />
      case 'download':
        return <Download size={14} />
      default:
        return <Check size={14} />
    }
  }

  return (
    <section className="mb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Settings size={32} className="text-neon-green" />
          Workflow del Progetto
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
      </div>
      
      <div className="bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4">
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          {workflow.map((step, index) => (
            <div key={index} className="flex items-center gap-2 flex-shrink-0">
              {/* Step Number */}
              <div className="flex items-center justify-center w-6 h-6 bg-neon-cyan text-dark-bg rounded-full text-xs font-bold">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="text-neon-cyan">
                {getIcon(step.icon)}
              </div>
              
              {/* Title */}
              <span className="text-xs font-medium text-white whitespace-nowrap">
                {step.title}
              </span>
              
              {/* Connector */}
              {index < workflow.length - 1 && (
                <div className="w-4 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-1"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectWorkflow 