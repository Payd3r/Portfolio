import React from 'react'
import { Github, Star, GitBranch, GitCommit, GitPullRequest } from 'lucide-react'

const StatCard = ({
  Icon,
  value,
  label,
}: {
  Icon: React.ElementType
  value: string
  label: string
}) => (
  <div className="flex items-center gap-1.5 sm:gap-2">
    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
    <div>
      <p className="text-base sm:text-lg font-bold text-primary leading-tight">{value}</p>
      <p className="text-xs text-secondary/80 leading-tight">{label}</p>
    </div>
  </div>
)

const GitHubStats: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full p-3 sm:p-4 md:p-5">
      <div>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-primary mb-2 sm:mb-3 flex items-center gap-2">
          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          Statistiche GitHub
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <StatCard Icon={Star} value="0+" label="Stelle Ricevute" />
        <StatCard Icon={GitBranch} value="10+" label="Progetti Pubblici" />
        <StatCard Icon={GitCommit} value="300+" label="Commits" />
        <StatCard Icon={GitPullRequest} value="40+" label="Pull Requests" />
      </div>
      <a
        href="https://github.com/payd3r"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm text-accent hover:underline mt-2 sm:mt-3"
      >
        Visualizza Profilo &rarr;
      </a>
    </div>
  )
}

export default GitHubStats
