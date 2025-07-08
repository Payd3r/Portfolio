import React, { createContext, useState, useContext } from 'react'
import type { ReactNode } from 'react'

interface CursorContextType {
  isHovering: boolean
  setIsHovering: (isHovering: boolean) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export const CursorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => {
  const context = useContext(CursorContext)
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return context
}
