import { Link } from 'react-router-dom'
import type { BentoItemType } from '@/utils/data'
import SkillsRadarChart from './SkillsRadarChart'
import GitHubStats from './GitHubStats'

const BentoItem: React.FC<{ item: BentoItemType }> = ({ item }) => {
  const { Icon, title, component, href, description, skills } = item

  const content = () => {
    switch (component) {
      case 'Chart':
        return <SkillsRadarChart />
      case 'Stats':
        return <GitHubStats />
      case 'SkillList':
        // Calcola altezza minima basata sul numero di badge
        const badgeCount = skills?.length || 0
        const minHeight = badgeCount <= 6 ? 'min-h-[75px]' : 'min-h-[100px]'
        
        return (
          <div className={`p-2 sm:p-3 md:p-5 h-full flex flex-col justify-between ${minHeight}`}>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                {Icon && (
                  <div className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent" />
                  </div>
                )}
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-primary leading-tight">{title}</h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
              {skills?.map(skill => (
                <span 
                  key={skill} 
                  className="bg-gradient-to-br from-accent/10 to-accent/5 text-primary text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 md:px-2.5 py-0.5 sm:py-1 md:py-1.5 rounded sm:rounded-lg border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      case 'Skill':
        return (
          <div className="p-2 sm:p-3 md:p-5 h-full flex flex-col justify-between min-h-[100px]">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                {Icon && (
                  <div className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent" />
                  </div>
                )}
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-primary leading-tight">{title}</h3>
              </div>
              {description && (
                <p className="text-xs sm:text-sm text-secondary/80 leading-relaxed">{description}</p>
              )}
            </div>
          </div>
        )
      case 'Link':
        return (
          <div className="p-2 sm:p-3 md:p-5 h-full flex flex-col justify-center md:justify-between min-h-[60px] md:min-h-[100px] group-hover:gap-2 transition-all">
            <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
              {Icon && (
                <div className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors flex-shrink-0">
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-accent" />
                </div>
              )}
              <h3 className="text-xs sm:text-sm md:text-lg font-bold text-primary leading-tight group-hover:text-accent transition-colors text-center md:text-left">{title}</h3>
            </div>
            <div className="text-accent text-[10px] sm:text-xs md:text-sm font-medium opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              Esplora →
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Usa mobileColSpan su mobile se presente, altrimenti colSpan
  // Per desktop, mantieni colSpan completo che già contiene le classi responsive
  const colSpanClass = item.mobileColSpan 
    ? `${item.mobileColSpan} ${item.colSpan}`
    : item.colSpan
  
  // Nascondi su mobile se hideOnMobile è true
  const visibilityClass = item.hideOnMobile ? 'hidden md:block' : ''
  
  const commonClasses = `relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-surface/50 backdrop-blur-sm border border-secondary/10 shadow-lg hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:scale-[1.02] hover:border-accent/20 group ${colSpanClass} ${item.rowSpan} ${visibilityClass} ${item.className || ''}`

  if (component === 'Link' && href) {
    return (
      <Link to={href} className={commonClasses}>
        {content()}
      </Link>
    )
  }

  return <div className={commonClasses}>{content()}</div>
}

export default BentoItem 