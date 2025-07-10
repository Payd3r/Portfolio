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
          <div className="p-4 h-full flex flex-col">
            {Icon && <Icon className="mb-2 h-6 w-6 text-accent" />}
            <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills?.map(skill => (
                <span key={skill} className="bg-primary/10 text-primary/80 text-xs font-medium px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )
      case 'Skill':
        return (
          <div className="p-4">
            {Icon && <Icon className="mb-2 h-8 w-8 text-accent" />}
            <h3 className="text-lg font-bold text-primary">{title}</h3>
            {description && (
              <p className="text-sm text-secondary">{description}</p>
            )}
          </div>
        )
      case 'Link':
        return (
          <div className="p-4">
            {Icon && <Icon className="mb-2 h-8 w-8 text-accent" />}
            <h3 className="text-lg font-bold text-primary">{title}</h3>
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