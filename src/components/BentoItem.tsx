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
        return (
          <div className="p-2 sm:p-3 md:p-4 h-full flex flex-col">
            {Icon && <Icon className="mb-1 sm:mb-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-accent" />}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-1 sm:mb-2 leading-tight">{title}</h3>
            <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
              {skills?.slice(0, 6).map(skill => (
                <span key={skill} className="bg-primary/10 text-primary/80 text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      case 'Skill':
        return (
          <div className="p-2 sm:p-3 md:p-4">
            {Icon && <Icon className="mb-1 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent" />}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary leading-tight">{title}</h3>
            {description && (
              <p className="text-xs sm:text-sm text-secondary mt-1">{description}</p>
            )}
          </div>
        )
      case 'Link':
        return (
          <div className="p-2 sm:p-3 md:p-4">
            {Icon && <Icon className="mb-1 sm:mb-2 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-accent" />}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary leading-tight">{title}</h3>
          </div>
        )
      default:
        return null
    }
  }

  const commonClasses = `relative flex flex-col justify-between overflow-hidden rounded-lg bg-surface shadow-lg transition-transform duration-300 hover:scale-[1.02] ${item.colSpan} ${item.rowSpan} ${item.className || ''}`

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