import { useRef, useEffect } from 'react'

export const useMagnetic = <T extends HTMLElement = HTMLElement>(strength = 0.35) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = clientX - centerX
      const deltaY = clientY - centerY

      el.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`
      el.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
    }

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0px, 0px)'
      el.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return ref
}
