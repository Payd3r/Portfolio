import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useCursor } from '@/context/CursorContext'

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const { isHovering } = useCursor()

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Controlla che le coordinate siano valide
      if (
        e.clientX !== undefined &&
        e.clientY !== undefined &&
        e.clientX >= 0 &&
        e.clientY >= 0 &&
        e.clientX <= window.innerWidth &&
        e.clientY <= window.innerHeight
      ) {
        setPosition({ x: e.clientX, y: e.clientY })
        if (!isVisible) setIsVisible(true)
      }
    }

    const onMouseEnter = () => {
      setIsVisible(true)
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    const onMouseDown = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.1,
          scale: 0.8,
          ease: 'power2.out',
        })
      }
    }

    const onMouseUp = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          duration: 0.1,
          scale: isHovering ? 1.5 : 1,
          ease: 'power2.out',
        })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [isVisible, isHovering])

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        duration: 0.2,
        scale: isHovering ? 1.5 : 1,
        ease: 'power2.out',
      })
    }
  }, [isHovering])

  if (!isVisible) return null

  const styles: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    willChange: 'transform',
  }

  return (
    <div
      ref={cursorRef}
      style={styles}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-lg shadow-neon-cyan/50"></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 border-neon-cyan -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
    </div>
  )
}

export default CustomCursor
