import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-dark-bg text-gray-200">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow container mx-auto px-4 pt-0 pb-4 sm:pt-4 sm:pb-6 md:p-4">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
