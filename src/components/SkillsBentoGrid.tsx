import { bentoData } from '@/utils/data'
import BentoItem from './BentoItem'

const SkillsBentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[120px] gap-4">
      {bentoData.map(item => (
        <BentoItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SkillsBentoGrid 