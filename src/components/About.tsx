import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Flame, MapPin, Terminal, Trophy } from 'lucide-react'
import { useTilt } from '../hooks/useTilt'

export const About: React.FC = () => {
  const futCardRef = useTilt(12)
  const terminalRef = useTilt(5)

  return (
    <section id="about" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background radial highlight */}
      <div className="blur-glow w-[350px] h-[350px] bg-cyber-purple/10 top-[10%] right-[5%]" />
      
      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">01 // IDENTITY</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">The Story Architecture</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Core Narrative (Double Span) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 glow-border p-8 flex flex-col justify-between space-y-6 relative overflow-hidden bg-white/[0.01]"
        >
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
          
          <div className="space-y-4 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan">
              <Terminal className="w-3.5 h-3.5" />
              <span>root/ashwin/bio.md</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold font-display text-white">
              Designing interfaces, engineering infrastructure.
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              I am a Computer Science student driven by the pursuit of building high-performance, polished digital products. I don't just write scripts; I design full-stack systems that feel responsive and architectural. My goal is to write clean, scalable APIs while maintaining a strong visual standard for user interfaces.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              I bridges the gap between pure backend logical structures and human UX principles. When I build, I optimize for responsiveness, semantic layout structure, and cinematic transitions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4 relative z-10">
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">COMPUTER SCIENCE UNDERGRAD</span>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyber-cyan/5 border border-cyber-cyan/15 text-cyber-cyan">FULL-STACK ENGINEER</span>
            <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-cyber-purple/5 border border-cyber-purple/15 text-cyber-purple">UI/UX DESIGNER</span>
          </div>
        </motion.div>

        {/* Card 2: Interactive Terminal Specs */}
        <motion.div
          ref={terminalRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glow-border p-6 bg-black/40 flex flex-col justify-between font-mono text-xs text-left relative overflow-hidden select-none"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[9px] text-white/30">sys_monitor.sh</span>
          </div>

          <div className="py-4 space-y-2 flex-grow text-white/75">
            <p className="text-cyber-cyan">$ whoami</p>
            <p className="text-white/50">ashwin_dev_student</p>
            <p className="text-cyber-cyan">$ location --current</p>
            <p className="text-white/50">Kerala, India <MapPin className="w-3 h-3 inline text-red-400" /></p>
            <p className="text-cyber-cyan">$ check_status</p>
            <p className="text-white/50 flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-orange-400 inline" /> Building WorldOfSurya UI...</p>
            <p className="text-cyber-cyan">$ target_goal</p>
            <p className="text-cyber-purple font-semibold">Creating scalable digital products</p>
          </div>

          <div className="text-[9px] text-white/20 border-t border-white/5 pt-2 flex justify-between">
            <span>MEM: 91.2% STABLE</span>
            <span>SH_SESSION: ACTIVE</span>
          </div>
        </motion.div>

        {/* Card 3: FIFA Ultimate Team Style Football Stats Card */}
        <motion.div
          ref={futCardRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glow-border p-6 flex flex-col justify-between bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden"
          data-cursor="interactive"
        >
          {/* Cyber Football Graphics */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/5 blur-2xl rounded-full" />
          
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan">
              <Trophy className="w-3.5 h-3.5" />
              <span>PERSONAL/ATHLETE</span>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xl font-bold font-syne tracking-tight">Wing Playmaker</h4>
                <p className="text-xs text-white/50">Footballer & Competitor</p>
              </div>
              <div className="text-3xl font-extrabold text-cyber-cyan font-mono tracking-tighter">88<span className="text-xs font-normal">OVR</span></div>
            </div>

            <div className="space-y-2 pt-2 text-xs font-mono">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">STA (Stamina)</span>
                <span className="text-white font-bold">95</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">AGI (Agility)</span>
                <span className="text-white font-bold">90</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-white/40">PAS (Passing Accuracy)</span>
                <span className="text-white font-bold">85</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">TACT (Tactics)</span>
                <span className="text-white font-bold">88</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-white/45 bg-white/5 p-2 rounded-lg border border-white/10 mt-4 text-left leading-relaxed">
            ⚡ Playstyle: Speed wing-run + precision assists. Brings rapid pacing and strategic teamwork into code development teams.
          </div>
        </motion.div>

        {/* Card 4: Trekking & Travel Log (Double Span) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-2 glow-border p-8 flex flex-col justify-between space-y-6 bg-white/[0.01] relative overflow-hidden"
        >
          {/* Neon mesh lines in the background */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyber-purple/5 blur-3xl rounded-full" />
          
          <div className="space-y-4 text-left relative z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan">
              <Compass className="w-3.5 h-3.5" />
              <span>EXPLORATION_JOURNEY.EXE</span>
            </div>
            
            <h4 className="text-lg md:text-xl font-bold text-white font-display">Trekking & Outdoor Exploration</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              When I step away from code terminals, I head to the mountains. Trekking has taught me how to handle steep challenges, stay resilient under changing conditions, and plan routes with high precision.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-left space-y-1">
                <p className="text-[10px] text-white/40 font-mono">WESTERN GHATS</p>
                <p className="text-xs font-bold text-white">Sahyadri Peaks</p>
                <p className="text-[9px] font-mono text-cyber-cyan">Altitude: 1,800m</p>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-left space-y-1">
                <p className="text-[10px] text-white/40 font-mono">HIMALAYAN ROUTES</p>
                <p className="text-xs font-bold text-white">Pass Crossing</p>
                <p className="text-[9px] font-mono text-cyber-purple">Planning Phase</p>
              </div>
              <div className="col-span-2 md:col-span-1 p-3 bg-white/5 border border-white/5 rounded-xl text-left space-y-1">
                <p className="text-[10px] text-white/40 font-mono">EXPERIENCE POINTS</p>
                <p className="text-xs font-bold text-white">20+ Peak Ascents</p>
                <p className="text-[9px] font-mono text-electric-blue">Active Trekker</p>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-white/40 border-t border-white/5 pt-4 text-left">
            // Trekking routes build stamina and a clear mindset essential for debugging production systems.
          </div>
        </motion.div>

      </div>
    </section>
  )
}
