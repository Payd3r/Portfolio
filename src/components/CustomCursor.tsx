import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useCursor } from '@/context/CursorContext'

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { isHovering } = useCursor()

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useEffect(() => {
    gsap.to(cursorRef.current, {
      duration: 0.2,
      scale: isHovering ? 1.5 : 1,
      ease: 'power2.out',
    })
  }, [isHovering])

  const styles: React.CSSProperties = {
    left: position.x,
    top: position.y,
  }

  return (
    <div
      ref={cursorRef}
      style={styles}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-2 h-2 rounded-full bg-neon-cyan"></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 border-neon-cyan -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}

export default CustomCursor
