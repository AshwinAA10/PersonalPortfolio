import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100)
      }

      // Active Section Highlight
      const sections = navItems.map(item => document.querySelector(item.href))
      const scrollPos = window.scrollY + 200

      sections.forEach(section => {
        if (!section) return
        const top = (section as HTMLElement).offsetTop
        const height = (section as HTMLElement).offsetHeight
        const id = section.getAttribute('id')

        if (scrollPos >= top && scrollPos < top + height) {
          if (id) setActiveSection(id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Viewport Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-cyber-cyan via-electric-blue to-cyber-purple transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 font-display">
        {/* Floating Glass Container */}
        <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-3 bg-[#03030c]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl relative">
          
          {/* Brand/Logo */}
          <a 
            href="#home" 
            className="text-lg font-bold font-syne tracking-tighter flex items-center gap-1 group"
            data-cursor="interactive"
          >
            ASHWIN<span className="text-cyber-cyan group-hover:animate-pulse">.</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs tracking-wider uppercase transition-colors relative py-1"
                  style={{ color: isActive ? '#00f2fe' : 'rgba(255,255,255,0.6)' }}
                  data-cursor="interactive"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyber-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Connect Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 px-4 py-2 rounded-xl transition-all duration-300 group"
              data-cursor="interactive"
            >
              Connect
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg text-white/80"
            aria-label="Toggle Navigation Menu"
            data-cursor="interactive"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute top-16 left-4 right-4 bg-[#03030c]/95 border border-white/5 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-4 md:hidden"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-cyber-cyan transition-colors py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center mt-2 bg-gradient-to-r from-cyber-cyan to-electric-blue text-black font-semibold text-xs uppercase tracking-widest py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
