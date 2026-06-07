import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Code2, Cpu, Globe, MapPin, Download } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export const Hero: React.FC = () => {
  const viewProjectsRef = useMagnetic<HTMLDivElement>(0.2)
  const downloadResumeRef = useMagnetic<HTMLDivElement>(0.2)

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative px-6 py-20 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="blur-glow w-[350px] h-[350px] bg-cyber-cyan/10 top-[20%] left-[15%]" />
      <div className="blur-glow w-[400px] h-[400px] bg-cyber-purple/10 bottom-[20%] right-[10%]" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Intro copy: Left Column */}
        <div className="lg:col-span-7 text-left space-y-8 select-none order-2 lg:order-1">
          
          <div className="space-y-4">
            {/* Status indicator / Location / Availability */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-2.5 items-center"
            >
              <span className="fallable inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-[9px] font-bold tracking-wider text-emerald-400 font-mono uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Opportunities
              </span>
              <span className="fallable inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 text-[9px] font-semibold tracking-wider text-cyber-cyan font-mono uppercase">
                <MapPin className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                Tamil Nadu, India
              </span>
            </motion.div>

            {/* Main Headlines */}
            <h1 className="fallable text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[1.05] font-syne">
              Hi, I'm <span className="bg-gradient-to-r from-cyber-cyan via-electric-blue to-cyber-purple bg-clip-text text-transparent">Ashwin A A</span>
            </h1>
            
            <h2 className="fallable text-xl md:text-2xl text-white/90 font-bold tracking-tight font-display flex flex-wrap gap-x-3 gap-y-1">
              <span>Software Developer</span>
              <span className="text-white/30">|</span>
              <span className="text-cyber-cyan">Full-Stack Developer</span>
            </h2>

            <p className="fallable text-xs md:text-sm font-semibold text-white/80 font-mono border-l-2 border-cyber-cyan pl-3 py-0.5 max-w-max uppercase tracking-wider">
              Building scalable web applications, AI-powered solutions,
              and business-focused software that solves real-world problems.
            </p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="fallable text-base md:text-lg text-white/60 max-w-xl font-normal leading-relaxed font-sans"
          >
            I build modern web applications, AI-powered tools, and business software that solve real-world problems. Passionate about full-stack development, clean user experiences, and creating practical solutions through technology.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* View Projects */}
            <div ref={viewProjectsRef} className="fallable inline-block">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-cyber-cyan via-electric-blue to-cyber-purple hover:shadow-[0_12px_30px_rgba(99,102,241,0.3)] rounded-xl transition-all duration-300"
                data-cursor="interactive"
              >
                Explore Projects
              </a>
            </div>

            {/* Download Resume */}
            <div ref={downloadResumeRef} className="fallable inline-block">
              <a
                href="/resume.pdf"
                download="Ashwin_AA_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
                data-cursor="interactive"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Micro stats banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="fallable flex items-center gap-6 pt-6 text-[10px] font-mono tracking-widest text-white/50 border-t border-white/5"
          >
            <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyber-cyan" /> MERN STACK</span>
            <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyber-purple" /> AI APPLICATIONS</span>
            <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-electric-blue" /> Business Solutions</span>
          </motion.div>

        </div>

        {/* Profile Picture & HUD Graphic: Right Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] relative flex items-center justify-center"
          >
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-full border border-white/5 orbit-rotate-cw" />
            <div className="absolute inset-6 rounded-full border border-cyber-cyan/15 orbit-rotate-ccw" />
            <div className="absolute inset-12 rounded-full border border-cyber-purple/5 orbit-rotate-cw-fast" />

            {/* Glowing neon core behind avatar */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-cyber-purple/20 to-cyber-cyan/20 blur-xl animate-pulse" />

            {/* SVG HUD Visualization overlaying avatar boundary */}
            <svg 
              viewBox="0 0 200 200" 
              className="absolute inset-0 w-full h-full p-2 pointer-events-none z-20 drop-shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              {/* Outer Dash Ring */}
              <circle
                cx="100"
                cy="100"
                r="86"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                strokeDasharray="4, 6"
                className="origin-center"
                style={{ animation: 'orbit-cw 60s linear infinite' }}
              />

              {/* Cyan Pulse Arc */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--color-cyber-cyan)"
                strokeWidth="1.5"
                strokeDasharray="30, 120"
                className="origin-center"
                style={{ animation: 'orbit-ccw 25s linear infinite' }}
              />

              {/* Purple Pulse Arc */}
              <circle
                cx="100"
                cy="100"
                r="74"
                fill="none"
                stroke="var(--color-cyber-purple)"
                strokeWidth="1"
                strokeDasharray="60, 90"
                className="origin-center"
                style={{ animation: 'orbit-cw 18s linear infinite' }}
              />
            </svg>

            {/* Premium Avatar Container */}
            <div 
              className="fallable relative w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border border-white/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 group"
            >
              <img 
                src="/avatar.png" 
                alt="Ashwin A A Portrait" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Corner Bracket decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20" />
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none z-10">
        <span className="text-[9px] tracking-[0.3em] font-mono text-white/40 uppercase">SCROLL ENGINE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="p-1 rounded-full border border-white/10"
        >
          <ArrowDown className="w-3.5 h-3.5 text-cyber-cyan" />
        </motion.div>
      </div>
    </section>
  )
}

