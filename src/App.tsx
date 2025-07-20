import { Routes, Route, useLocation } from 'react-router-dom'
import React, { Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/Layout'
import { ScrollbarFix } from '@/components/ScrollbarFix'

gsap.registerPlugin(ScrollTrigger)

const HomePage = React.lazy(() => import('@/pages/HomePage'))
const ProjectGallery = React.lazy(() => import('@/pages/ProjectGallery'))
const ProjectDetail = React.lazy(() => import('@/pages/ProjectDetail'))

const PageLoader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neon-cyan"></div>
  </div>
)

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollbarFix />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage />} />
              <Route path="/projects" element={<ProjectGallery />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </>
  )
}

export default App
