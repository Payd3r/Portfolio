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
  <div className="flex items-center gap-2">
    <Icon className="w-5 h-5 text-accent" />
    <div>
      <p className="text-xl font-bold text-primary">{value}</p>
      <p className="text-xs text-secondary">{label}</p>
    </div>
  </div>
)

const GitHubStats: React.FC = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <div>
        <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
          <Github className="w-5 h-5" />
          Statistiche GitHub
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <StatCard Icon={Star} value="120+" label="Stelle Ricevute" />
        <StatCard Icon={GitBranch} value="50+" label="Progetti Pubblici" />
        <StatCard Icon={GitCommit} value="1k+" label="Commits" />
        <StatCard Icon={GitPullRequest} value="200+" label="Pull Requests" />
      </div>
      <a
        href="https://github.com/tuo-username"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-accent hover:underline mt-4"
      >
        Visualizza Profilo &rarr;
      </a>
    </div>
  )
}

export default GitHubStats
