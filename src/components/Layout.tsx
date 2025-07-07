import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import { CursorProvider, useCursor } from '@/context/CursorContext'

type LayoutProps = {
  children: React.ReactNode
}

const LayoutInner: React.FC<LayoutProps> = ({ children }) => {
  const { setIsHovering } = useCursor()

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button, [role="button"]')) {
        setIsHovering(false)
      }
    }

    document.body.addEventListener('mouseover', handleMouseEnter)
    document.body.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.body.removeEventListener('mouseover', handleMouseEnter)
      document.body.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [setIsHovering])

  return (
    <div className="flex min-h-screen flex-col bg-dark-bg text-gray-200">
      <CustomCursor />
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  )
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CursorProvider>
      <LayoutInner>{children}</LayoutInner>
    </CursorProvider>
  )
}

export default Layout
