import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 75, fullMark: 100 },
  { subject: 'Database', A: 85, fullMark: 100 },
  { subject: 'DevOps', A: 60, fullMark: 100 },
  { subject: 'UI/UX Design', A: 70, fullMark: 100 },
]

const SkillsRadarChart: React.FC = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#555" />
          <PolarAngleAxis dataKey="subject" stroke="#FFF" />
          <Radar
            name="Competenze"
            dataKey="A"
            stroke="#00FFFF"
            fill="#00FFFF"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SkillsRadarChart
