import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const skillsData = [
  { skill: 'React', level: 95 },
  { skill: 'TypeScript', level: 90 },
  { skill: 'Node.js', level: 80 },
  { skill: 'SQL', level: 75 },
  { skill: 'CI/CD', level: 70 },
  { skill: 'UI/UX', level: 85 },
]

const SkillsRadarChart: React.FC = () => {
  return (
    <div className="w-full h-full p-1 sm:p-2 md:p-4 flex flex-col">
      <div className="mb-1 sm:mb-2">
        <h3 className="text-xs sm:text-sm md:text-base font-bold text-primary leading-tight">Competenze</h3>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
            <PolarGrid stroke="#94A3B8" strokeWidth={0.5} />
            <PolarAngleAxis 
              dataKey="skill" 
              stroke="#F8FAFC" 
              fontSize={10}
              className="text-xs"
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              stroke="#94A3B8" 
              fontSize={8}
              tickCount={3}
            />
            <Radar
              name="Livello"
              dataKey="level"
              stroke="#38BDF8"
              fill="#38BDF8"
              fillOpacity={0.6}
              strokeWidth={2}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E293B',
                borderColor: '#38BDF8',
                color: '#F8FAFC',
                fontSize: '12px',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SkillsRadarChart 