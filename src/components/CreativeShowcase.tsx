import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Layers, Sparkles } from 'lucide-react'

const FigmaIcon = () => (
  <svg className="w-3 h-3 text-[#f24e1e] inline mr-1" viewBox="0 0 38 57" fill="currentColor">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abc9c" />
    <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83" />
    <path d="M19 9.5a9.5 9.5 0 0 1 9.5-9.5h9.5v19H28.5A9.5 9.5 0 0 1 19 9.5z" fill="#ff7262" />
    <path d="M19 19a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#f24e1e" />
    <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#a259ff" />
  </svg>
)

interface Concept {
  id: string
  title: string
  category: string
  desc: string
  figmaLink?: string
  // HTML renderer of the visual screen mock
  renderScreen: () => React.ReactNode
}

export const CreativeShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('aura')

  const concepts: Concept[] = [
    {
      id: 'aura',
      title: 'Aura OS Design System',
      category: 'Design System / Desktop Shell',
      desc: 'An exploration of a spatial, transparent desktop OS shell. Focuses on hyper-minimal navigation icons, backdrop filters, and context-dependent widgets.',
      renderScreen: () => (
        <div className="w-full h-full bg-gradient-to-tr from-[#020208] to-[#120a24] rounded-2xl p-4 border border-white/10 flex flex-col justify-between relative overflow-hidden select-none">
          {/* Glass Wallpaper */}
          <div className="absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-cyber-cyan/15 blur-xl pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-cyber-purple/15 blur-2xl pointer-events-none" />
          
          {/* Widget 1: System Time & Status */}
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-bold tracking-widest text-white/80 font-mono">AURA_SHELL</span>
            <div className="text-[10px] text-white/50 font-mono flex items-center gap-1.5">
              <span>VOL: 80%</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Widget 2: Glass Control Center Panel */}
          <div className="bg-[#09090b]/40 border border-white/10 backdrop-blur-md p-3.5 rounded-xl text-left space-y-2.5 z-10 max-w-[200px] shadow-lg">
            <p className="text-[8px] font-mono text-cyber-cyan tracking-wider">AURA AUDIO CONTROL</p>
            <div className="flex gap-2 items-center">
              <span className="w-5 h-5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-[9px] text-cyber-cyan">◀</span>
              <span className="w-5 h-5 rounded-lg bg-cyber-cyan/20 border border-cyber-cyan/35 flex items-center justify-center text-[9px] text-white font-bold">||</span>
              <span className="w-5 h-5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center text-[9px] text-cyber-cyan">▶</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="bg-cyber-cyan h-full w-[65%]" />
            </div>
          </div>

          {/* Widget 3: Navigation Dock */}
          <div className="w-full flex justify-center z-10">
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full flex gap-3 shadow-inner">
              <span className="w-3.5 h-3.5 rounded bg-cyber-cyan/40 border border-cyber-cyan" />
              <span className="w-3.5 h-3.5 rounded bg-cyber-purple/40 border border-cyber-purple" />
              <span className="w-3.5 h-3.5 rounded bg-white/20 border border-white/40" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'nexa',
      title: 'Nexa Wallet Dashboard',
      category: 'FinTech Mobile Application',
      desc: 'Mobile wallet prototype optimizing multi-chain asset logs. Designed to display asset lists, transaction paths, and payment cards in an integrated single-screen structure.',
      renderScreen: () => (
        <div className="w-full h-full bg-[#030308] rounded-2xl p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden select-none font-sans">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[10px] font-mono font-bold text-cyber-purple">NEXA_FINANCE</span>
            <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px]">⚙</span>
          </div>

          {/* Visa Card Design */}
          <div className="bg-gradient-to-r from-cyber-purple/80 via-electric-blue/80 to-cyber-cyan/80 p-3.5 rounded-xl text-left space-y-3 shadow-xl">
            <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-black/70 font-bold">
              <span>DEBIT CARD</span>
              <span>NEXA CARD</span>
            </div>
            <p className="text-sm font-bold font-mono tracking-wider text-black">**** **** **** 8920</p>
            <div className="flex justify-between items-center text-[8px] text-black/80 font-bold">
              <span>ASHWIN N</span>
              <span>EXP: 09/30</span>
            </div>
          </div>

          {/* Asset List */}
          <div className="space-y-1.5 text-left">
            <p className="text-[8px] font-mono text-white/30 uppercase">TRANSACTIONS</p>
            <div className="flex justify-between items-center p-1 bg-white/5 rounded border border-white/5 text-[9px]">
              <span className="font-semibold">Gas Fee Sync</span>
              <span className="text-red-400 font-mono">- $4.12</span>
            </div>
            <div className="flex justify-between items-center p-1 bg-white/5 rounded border border-white/5 text-[9px]">
              <span className="font-semibold">StoreMind Reward</span>
              <span className="text-green-400 font-mono">+ $120.00</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vortex',
      title: 'Vortex AI Generator',
      category: 'AI Agent Playground Dashboard',
      desc: 'Prompt console built for quick agent staging. Features token analyzers, prompt libraries, dynamic progress streams, and copy utilities.',
      renderScreen: () => (
        <div className="w-full h-full bg-[#050512] rounded-2xl p-4 border border-white/10 flex flex-col justify-between font-mono text-[9px] text-white/50 relative overflow-hidden select-none">
          <div className="absolute top-[20%] right-[20%] w-24 h-24 rounded-full bg-cyber-purple/10 blur-xl pointer-events-none" />

          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-cyber-cyan font-bold flex items-center gap-1">⚡ VORTEX_AI_v1</span>
            <span className="bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan px-2 py-0.5 rounded text-[8px]">PROMPT MODE</span>
          </div>

          {/* Prompt input area */}
          <div className="my-2 p-2 bg-white/5 rounded border border-white/5 text-left text-white/70">
            <span className="text-cyber-cyan mr-1.5">›</span>
            <span>Refactor auth controllers into middleware pipeline. Make it fast.</span>
          </div>

          {/* Stream logs */}
          <div className="space-y-1.5 text-left text-[8px] flex-grow text-white/40 pt-1">
            <p>⌾ Connecting to API instance...</p>
            <p className="text-cyber-cyan">⌾ Staging files: controllers/auth.ts</p>
            <p className="text-green-400">✔ Optimization complete (0.35s)</p>
          </div>

          {/* Action footer */}
          <div className="flex justify-between items-center border-t border-white/5 pt-2 text-[8px]">
            <span>TOKENS: 4,812 / 8,000</span>
            <span className="text-cyber-cyan font-bold">DEPLOY READY</span>
          </div>
        </div>
      )
    }
  ]

  const activeConcept = concepts.find(c => c.id === activeTab) || concepts[0]

  return (
    <section id="creative" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[380px] h-[380px] bg-cyber-purple/5 bottom-[20%] right-[30%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">05 // SHOWROOM</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Creative UI Lab</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: UI / Description Concept */}
        <div className="lg:col-span-5 text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan">
            <Layers className="w-3.5 h-3.5" />
            <span>UI/UX & MOTION DESIGN CONCEPTS</span>
          </div>
          
          <h4 className="text-2xl font-bold font-display text-white">
            Blending visual identity with logical code components.
          </h4>
          
          <p className="text-white/60 text-sm leading-relaxed">
            I prototype UI concepts in Figma first, then build them as modular HTML/CSS layers. My design goal is to deliver clean visual balance, sensible contrast paths, and modern spatial depth.
          </p>

          {/* Selector Tabs */}
          <div className="space-y-3 pt-4">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveTab(concept.id)}
                className="w-full flex items-center justify-between p-4 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl transition-all"
                style={{ 
                  borderColor: activeTab === concept.id ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255,255,255,0.05)',
                  boxShadow: activeTab === concept.id ? '0 8px 20px rgba(0, 0, 0, 0.4)' : 'none'
                }}
                data-cursor="interactive"
              >
                <div className="flex items-center gap-3">
                  <span 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: activeTab === concept.id ? '#ffffff' : 'rgba(255,255,255,0.2)' }}
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-normal">{concept.title}</p>
                    <p className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">{concept.category}</p>
                  </div>
                </div>
                <Eye className="w-4 h-4 text-white/30" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Frame Mock Showcase */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="w-full max-w-[480px] h-[340px] md:h-[400px] glow-border p-6 bg-black/30 flex items-center justify-center relative overflow-hidden select-none">
            
            {/* Corner aesthetic brackets */}
            <div className="absolute top-3 left-3 text-[9px] font-mono text-white/30">LAB_SYSTEM: ACTIVE</div>
            <div className="absolute top-3 right-3 text-[9px] font-mono text-white/30">FRAME_0{concepts.findIndex(c => c.id === activeTab) + 1}</div>

            {/* Display Screen with fade animations */}
            <div className="w-full max-w-[280px] h-[380px] scale-90 md:scale-95 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConcept.id}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-[280px] md:h-[300px]"
                >
                  {activeConcept.renderScreen()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Figma reference button indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[9px] text-white/40 font-mono">
              <span className="flex items-center gap-1.5"><FigmaIcon /> Figma Config: Linked</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-cyber-cyan" /> Interactive Frame</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
