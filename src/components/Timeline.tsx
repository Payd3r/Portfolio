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
    description:
      "Conseguito presso l'Istituto Tecnico Jean Monnet di Mariano Comense.",
  },
]

const Timeline: React.FC = () => {
  return (
    <div className="relative mt-20 container mx-auto">
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-neon-purple/30 timeline-line"></div>
      <div className="relative">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="relative mb-12 flex w-full items-center justify-between timeline-item"
          >
            <div className="absolute left-1/2 top-0 z-10 flex h-8 w-8 -translate-x-1/2 transform items-center justify-center rounded-full bg-neon-purple text-white shadow-xl shadow-neon-purple/30 timeline-milestone">
              {index + 1}
            </div>

            {index % 2 === 0 ? (
              <div className="w-5/12 pr-16 text-right timeline-content">
                <p className="mb-2 text-sm text-neon-cyan">{item.year}</p>
                <h3 className="mb-2 font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ) : (
              <div className="w-5/12"></div>
            )}

            {index % 2 !== 0 ? (
              <div className="w-5/12 pl-16 text-left timeline-content">
                <p className="mb-2 text-sm text-neon-cyan">{item.year}</p>
                <h3 className="mb-2 font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ) : (
              <div className="w-5/12"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
