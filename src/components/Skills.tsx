import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Database, Layout, Settings, Compass } from 'lucide-react'

interface Skill {
  name: string
  level: string
  desc: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}
const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Layout className="w-4.5 h-4.5" />,
    color: '#3b82f6',
    skills: [
      { name: 'HTML', level: 'Advanced', desc: 'Semantic layout structure, accessibility standards, SEO tags' },
      { name: 'CSS', level: 'Advanced', desc: 'Flexbox, CSS Grid systems, custom properties, styling layouts' },
      { name: 'JavaScript', level: 'Advanced', desc: 'ES6+ standards, closures, async/await, DOM APIs' },
      { name: 'React', level: 'Advanced', desc: 'Virtual DOM, custom hooks, state stores, performance optimization' }
    ]
  },
  {
    title: 'Backend',
    icon: <Database className="w-4.5 h-4.5" />,
    color: '#6366f1',
    skills: [
      { name: 'Node.js', level: 'Advanced', desc: 'Event-driven server engines, NPM system registry, script automation' },
      { name: 'Express.js', level: 'Advanced', desc: 'API routing shell, validation systems, custom middleware pipelines' }
    ]
  },
  {
    title: 'Database',
    icon: <Settings className="w-4.5 h-4.5" />,
    color: '#60a5fa',
    skills: [
      { name: 'MongoDB', level: 'Advanced', desc: 'NoSQL collections, document indexing, aggregation pipelines' },
      { name: 'SQL', level: 'Intermediate', desc: 'Relational design tables, query optimization, join execution' }
    ]
  },
  {
    title: 'Programming',
    icon: <Code className="w-4.5 h-4.5" />,
    color: '#a855f7',
    skills: [
      { name: 'C', level: 'Intermediate', desc: 'Structured programming, procedural algorithms, logic execution' },
      { name: 'C++', level: 'Intermediate', desc: 'Object-oriented specifications, templates, memory management' },
      { name: 'Python', level: 'Advanced', desc: 'Data parsing structures, scripting pipelines, backend microservices' },
      { name: 'Java', level: 'Intermediate', desc: 'Compilation cycles, OOP paradigms, modular app structures' }
    ]
  },
  {
    title: 'Tools',
    icon: <Compass className="w-4.5 h-4.5" />,
    color: '#10b981',
    skills: [
      { name: 'Git', level: 'Advanced', desc: 'Version logging, branch mergers, commit specifications' },
      { name: 'GitHub', level: 'Advanced', desc: 'Repository management, PR collaboration, actions workflows' },
      { name: 'VS Code', level: 'Advanced', desc: 'Local work staging, debug interfaces, workspace extensions' },
      { name: 'Figma', level: 'Advanced', desc: 'Prototyping, visual balance grids, layout UI blueprints' }
    ]
  }
]

// Skills list for Orbit Visualization
const orbitalSkills = [
  { name: 'React', color: '#3b82f6', angle: 0 },
  { name: 'Node', color: '#6366f1', angle: 72 },
  { name: 'Python', color: '#a855f7', angle: 144 },
  { name: 'SQL', color: '#60a5fa', angle: 216 },
  { name: 'Figma', color: '#10b981', angle: 288 }
]

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const [hoveredOrbital, setHoveredOrbital] = useState<string | null>(null)

  return (
    <section id="skills" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[400px] h-[400px] bg-cyber-cyan/5 bottom-[10%] left-[5%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">02 // CAPABILITIES</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">The Tech Stack</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      {/* Featured Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10">
        <div className="fallable p-6 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-cyber-cyan/30 transition-all duration-300">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded border border-cyber-cyan/20">CORE STACK</span>
            <h3 className="text-base font-bold text-white font-display pt-2">MERN Full-Stack</h3>
          </div>
          <p className="text-xs text-white/50 leading-relaxed font-sans">
            Specializing in high-performance web applications using MongoDB, Express.js, React, and Node.js. Experienced in designing RESTful APIs, data validation, and clean state stores.
          </p>
        </div>

        <div className="fallable p-6 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-cyber-purple/30 transition-all duration-300">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-cyber-purple bg-cyber-purple/10 px-2 py-0.5 rounded border border-cyber-purple/20">EMERGING FOCUS</span>
            <h3 className="text-base font-bold text-white font-display pt-2">AI Integrations</h3>
          </div>
          <p className="text-xs text-white/50 leading-relaxed font-sans">
            Integrating Large Language Model APIs, custom vector embeddings, and agentic workflows to build interactive chatbots and context-aware backend assistance utilities.
          </p>
        </div>

        <div className="fallable p-6 bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-emerald-500/30 transition-all duration-300">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ALGORITHMS</span>
            <h3 className="text-base font-bold text-white font-display pt-2">Computer Science Core</h3>
          </div>
          <p className="text-xs text-white/50 leading-relaxed font-sans">
            Solid understanding of data structures, search algorithms (Dijkstra, A*), relational schema normalization, and writing clean, optimized systems automation scripts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Orbital Tech Cluster */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] relative rounded-full flex items-center justify-center border border-white/5 bg-black/10 select-none">
            
            {/* Rotating Orbit Path */}
            <div className="absolute w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border border-white/10 orbit-rotate-cw" />
            <div className="absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border border-white/5 orbit-rotate-ccw" />

            {/* Core Pulsating Stack Center */}
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex flex-col items-center justify-center z-10">
              <Compass className="w-6 h-6 text-cyber-cyan animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-[8px] font-mono tracking-tighter text-white/50 mt-1">STACK</span>
            </div>

            {/* Floating Tech Nodes */}
            {orbitalSkills.map((skill) => {
              // Calculate positioning using basic trig values for clean circular distribution
              const radius = 110 // distance from center in px
              const rad = (skill.angle * Math.PI) / 180
              const x = Math.cos(rad) * radius
              const y = Math.sin(rad) * radius

              return (
                <motion.div
                  key={skill.name}
                  className="absolute cursor-pointer z-10"
                  style={{
                    left: `calc(50% + ${x}px - 28px)`,
                    top: `calc(50% + ${y}px - 28px)`
                  }}
                  whileHover={{ scale: 1.15 }}
                  onHoverStart={() => setHoveredOrbital(skill.name)}
                  onHoverEnd={() => setHoveredOrbital(null)}
                  data-cursor="interactive"
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center font-mono text-[10px] font-bold tracking-tight bg-[#09090b] border transition-all duration-300 shadow-xl"
                    style={{ 
                      borderColor: hoveredOrbital === skill.name ? skill.color : 'rgba(255,255,255,0.1)',
                      boxShadow: hoveredOrbital === skill.name ? `0 0 15px ${skill.color}50` : 'none'
                    }}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              )
            })}

            {/* Interactive Tooltip showing core strength details */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-10 w-full flex items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {hoveredOrbital ? (
                  <motion.p
                    key={hoveredOrbital}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-xs font-mono text-cyber-cyan tracking-widest uppercase bg-[#09090b]/80 border border-cyber-cyan/20 px-3 py-1 rounded-md"
                  >
                    ⚡ STACK :: {hoveredOrbital}
                  </motion.p>
                ) : (
                  <motion.p
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-[9px] font-mono tracking-widest text-white/50 uppercase"
                  >
                    Hover nodes to analyze systems
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column: Expandable Skill Cards */}
        <div className="lg:col-span-7 space-y-4 text-left order-1 lg:order-2">
          {skillCategories.map((category, idx) => {
            const isOpen = activeCategory === idx
            return (
              <div
                key={category.title}
                className="fallable glow-border bg-white/[0.01] overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => setActiveCategory(idx)}
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors font-display"
                  data-cursor="interactive"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ 
                        backgroundColor: `${category.color}15`, 
                        color: category.color 
                      }}
                    >
                      {category.icon}
                    </div>
                    <span className="text-sm font-bold tracking-wider text-white">
                      {category.title}
                    </span>
                  </div>
                  
                  {/* Glowing active indicator dot */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-white/30">
                      {category.skills.length} Skills
                    </span>
                    <span 
                      className="w-1.5 h-1.5 rounded-full transition-transform duration-300"
                      style={{ 
                        backgroundColor: isOpen ? category.color : 'rgba(255,255,255,0.1)',
                        transform: isOpen ? 'scale(1.2)' : 'scale(1)'
                      }} 
                    />
                  </div>
                </button>

                {/* Sub Skills Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 bg-black/10">
                        {category.skills.map((skill) => (
                          <div 
                            key={skill.name}
                            className="p-3.5 bg-[#09090b]/40 border border-white/5 rounded-xl space-y-1.5 hover:border-white/10 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-white tracking-wide">{skill.name}</span>
                              <span 
                                className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded border"
                                style={{ 
                                  color: category.color,
                                  borderColor: `${category.color}30`,
                                  backgroundColor: `${category.color}05`
                                }}
                              >
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                              {skill.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
