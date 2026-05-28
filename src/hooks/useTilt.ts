import { useRef, useEffect } from 'react'

export const useTilt = (maxRotate = 10) => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = ((centerY - y) / centerY) * maxRotate
      const rotateY = ((x - centerX) / centerX) * maxRotate

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      el.style.transition = 'transform 0.1s ease-out'
    }

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      el.style.transition = 'transform 0.5s ease-out'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [maxRotate])

  return ref as React.RefObject<any>
}
