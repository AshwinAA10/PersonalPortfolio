import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  baseOpacity: number
}

export const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 60

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.1
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: baseOpacity,
          baseOpacity
        })
      }
    }

    const drawGrid = (mouse: { x: number; y: number; active: boolean }) => {
      const gridSize = 50
      const width = canvas.width
      const height = canvas.height

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)'
      ctx.lineWidth = 1

      // Draw standard grid
      ctx.beginPath()
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()

      // Spotlight grid glow
      if (mouse.active) {
        const spotlightRadius = 250
        ctx.beginPath()
        for (let x = Math.floor((mouse.x - spotlightRadius) / gridSize) * gridSize; x < mouse.x + spotlightRadius; x += gridSize) {
          if (x < 0 || x > width) continue
          for (let y = Math.floor((mouse.y - spotlightRadius) / gridSize) * gridSize; y < mouse.y + spotlightRadius; y += gridSize) {
            if (y < 0 || y > height) continue

            const dx = x - mouse.x
            const dy = y - mouse.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < spotlightRadius) {
              const alpha = (1 - distance / spotlightRadius) * 0.06
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
              ctx.lineWidth = 1.0
              
              // Draw small cross hair at intersections
              ctx.beginPath()
              ctx.moveTo(x - 5, y)
              ctx.lineTo(x + 5, y)
              ctx.moveTo(x, y - 5)
              ctx.lineTo(x, y + 5)
              ctx.stroke()
            }
          }
        }
      }
    }

    const drawAmbientGlows = (mouse: { x: number; y: number; active: boolean }) => {
      const width = canvas.width
      const height = canvas.height

      // Fixed top-left subtle ambient blue glow
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.2, 0, width * 0.2, height * 0.2, width * 0.5)
      grad1.addColorStop(0, 'rgba(59, 130, 246, 0.02)')
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, width, height)

      // Fixed bottom-right subtle ambient indigo glow
      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.8, 0, width * 0.8, height * 0.8, width * 0.5)
      grad2.addColorStop(0, 'rgba(99, 102, 241, 0.02)')
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, width, height)

      // Mouse-following highlight
      if (mouse.active) {
        const mouseGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300)
        mouseGrad.addColorStop(0, 'rgba(255, 255, 255, 0.02)')
        mouseGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.005)')
        mouseGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = mouseGrad
        ctx.fillRect(0, 0, width, height)
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const mouse = mouseRef.current

      // Ambient radial lighting
      drawAmbientGlows(mouse)

      // Grid systems
      drawGrid(mouse)

      // Render & update particles
      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        // Wrap around borders
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Push away from cursor slightly
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const force = (120 - dist) / 120
            p.x += (dx / dist) * force * 0.8
            p.y += (dy / dist) * force * 0.8
            p.opacity = Math.min(0.8, p.baseOpacity + force * 0.4)
          } else {
            p.opacity = p.opacity * 0.95 + p.baseOpacity * 0.05
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-50 bg-[#000000] block"
    />
  )
}
