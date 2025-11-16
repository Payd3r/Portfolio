import { bentoData } from '@/utils/data'
import BentoItem from './BentoItem'

const SkillsBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 auto-rows-min gap-2 sm:gap-3 md:gap-5">
      {bentoData.map(item => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SkillsBentoGrid 