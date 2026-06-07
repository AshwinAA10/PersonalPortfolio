import React, { useEffect, useRef } from 'react'

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Hide default cursor on md and larger screens (CSS will hide it)
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let isHovering = false
    let isHidden = true
    let animId = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (isHidden) {
        isHidden = false
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    const onMouseLeave = () => {
      isHidden = true
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const updatePosition = () => {
      // Direct ref mutations for maximum FPS smoothness
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

      // Smooth lag effect on the outer ring (lerp)
      const lerpFactor = 0.15
      ringX += (mouseX - ringX) * lerpFactor
      ringY += (mouseY - ringY) * lerpFactor

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovering ? 1.8 : 1})`
      
      animId = requestAnimationFrame(updatePosition)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="interactive"]') ||
        target.classList.contains('cursor-pointer')
      if (isInteractive) {
        isHovering = true
        ring.style.borderColor = 'rgba(255, 255, 255, 0.6)'
        ring.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
        dot.style.backgroundColor = '#ffffff'
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const relatedTarget = e.relatedTarget as HTMLElement
      
      const wasInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="interactive"]') ||
        target.classList.contains('cursor-pointer')

      const isStillInteractive = 
        relatedTarget && (
          relatedTarget.closest('a') || 
          relatedTarget.closest('button') || 
          relatedTarget.closest('[role="button"]') ||
          relatedTarget.closest('[data-cursor="interactive"]') ||
          relatedTarget.classList.contains('cursor-pointer')
        )

      if (wasInteractive && !isStillInteractive) {
        isHovering = false
        ring.style.borderColor = 'rgba(255, 255, 255, 0.4)'
        ring.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        dot.style.backgroundColor = '#ffffff'
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)
    
    animId = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.body.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Hide on mobile devices, show only on pointers */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 -ml-[4px] -mt-[4px] z-50 h-2 w-2 rounded-full bg-white opacity-0 transition-opacity duration-300 select-none md:block hidden will-change-transform"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 -ml-[18px] -mt-[18px] z-50 h-9 w-9 rounded-full border border-white/40 opacity-0 transition-all duration-200 select-none md:block hidden will-change-transform"
      />
    </>
  )
}
