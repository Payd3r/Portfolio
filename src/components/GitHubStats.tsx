import { Octokit } from '@octokit/rest'
import React, { useEffect, useState } from 'react'

interface GitHubStatsData {
  followers: number
  public_repos: number
}

const octokit = new Octokit({
  // In un progetto reale, la chiave API andrebbe in una variabile d'ambiente
  // auth: process.env.REACT_APP_GITHUB_TOKEN
})

const SkeletonStat = () => (
  <div className="bg-dark-surface p-6 rounded-lg shadow-lg animate-pulse">
    <div className="h-10 w-20 bg-gray-700/50 rounded mb-2"></div>
    <div className="h-6 w-32 bg-gray-700/50 rounded"></div>
  </div>
)

const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'Payd3r' // Sostituisci con il tuo username GitHub
        const { data } = await octokit.users.getByUsername({ username })
        setStats({
          followers: data.followers,
          public_repos: data.public_repos,
        })
      } catch (err) {
        setError('Impossibile caricare le statistiche di GitHub.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center gap-8">
        <SkeletonStat />
        <SkeletonStat />
      </div>
    )
  }

  if (error) return <p className="text-red-500">{error}</p>

  return (
    <div className="flex justify-center gap-8">
      <div className="bg-dark-surface p-6 rounded-lg shadow-lg">
        <p className="text-4xl font-bold text-neon-green">{stats?.followers}</p>
        <p className="text-gray-400">Followers</p>
      </div>
      <div className="bg-dark-surface p-6 rounded-lg shadow-lg">
        <p className="text-4xl font-bold text-neon-green">
          {stats?.public_repos}
        </p>
        <p className="text-gray-400">Repository Pubblici</p>
      </div>
    </div>
  )
}

export default GitHubStats
