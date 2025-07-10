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
    <div className="w-full h-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
          <PolarGrid stroke="#94A3B8" />
          <PolarAngleAxis dataKey="skill" stroke="#F8FAFC" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94A3B8" />
          <Radar
            name="Livello"
            dataKey="level"
            stroke="#38BDF8"
            fill="#38BDF8"
            fillOpacity={0.6}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1E293B',
              borderColor: '#38BDF8',
              color: '#F8FAFC',
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SkillsRadarChart 