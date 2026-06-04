import React from 'react'
import { ArrowUp } from 'lucide-react'

export const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="w-full border-t border-white/5 bg-[#09090b] py-10 px-6 font-display">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="text-left space-y-1 select-none">
          <p className="text-sm font-bold tracking-tighter text-white font-syne">
            ASHWIN<span className="text-cyber-cyan">.</span>
          </p>
          <p className="text-[10px] font-mono text-white/40">
            © {new Date().getFullYear()} // ALL SYSTEMS OPERATIONAL.
          </p>
        </div>

        {/* Dynamic bottom accents / indicator */}
        <div className="hidden md:flex items-center gap-2 text-[9px] font-mono text-white/30 tracking-widest uppercase">
          <span>PORTFOLIO</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>VITE_REACT</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>TYPESCRIPT</span>
        </div>

        {/* Back-To-Top Trigger */}
        <div>
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center w-9 h-9 bg-white/5 border border-white/10 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 rounded-xl transition-all group"
            aria-label="Back to Top"
            data-cursor="interactive"
          >
            <ArrowUp className="w-4 h-4 text-white/60 group-hover:text-cyber-cyan transition-colors" />
          </button>
        </div>

      </div>
    </footer>
  )
}
