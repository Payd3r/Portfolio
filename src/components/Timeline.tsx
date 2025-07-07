import React from 'react'

const timelineData = [
  {
    year: '2024',
    title: 'Laurea Triennale in Informatica',
    description:
      'Conseguita con lode, con una tesi sullo sviluppo di applicazioni web progressive.',
  },
  {
    year: '2023',
    title: 'Tirocinio Frontend Developer',
    description:
      'Esperienza formativa presso Tech Solutions S.R.L, lavorando su un progetto React e TypeScript.',
  },
  {
    year: '2021',
    title: 'Diploma di Perito Informatico',
    description: 'Conseguito con il massimo dei voti presso ITIS G. Marconi.',
  },
]

const Timeline: React.FC = () => {
  return (
    <div className="relative mt-12">
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-neon-purple/30"></div>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="relative mb-8 flex w-full items-center justify-between"
        >
          <div className="order-1 w-5/12"></div>
          <div className="z-10 order-1 flex h-8 w-8 items-center justify-center rounded-full bg-neon-purple text-white shadow-xl shadow-neon-purple/30">
            {index + 1}
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-dark-surface p-4 shadow-md">
            <p className="mb-2 text-sm text-neon-cyan">{item.year}</p>
            <h3 className="mb-2 font-bold">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
