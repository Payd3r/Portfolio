import { bentoData } from '@/utils/data'
import BentoItem from './BentoItem'

const SkillsBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 auto-rows-[100px] sm:auto-rows-[110px] md:auto-rows-[120px] gap-2 sm:gap-3 md:gap-4">
      {bentoData.map(item => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SkillsBentoGrid 