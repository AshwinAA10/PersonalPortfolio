import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, X, CheckCircle2, Award } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  featured?: boolean
  internship?: boolean
  company?: string
  impact?: string
  description: string
  longDescription: string
  tech: string[]
  features: string[]
  github?: string
  demo?: string
  image: string
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projectsData: Project[] = [
    {
      id: 'storemind',
      title: 'StoreMind',
      subtitle: 'Inventory Management Platform',
      category: 'Full Stack',
      featured: true,
      internship: true,
      company: 'Seasana Industries',
      impact: '30% Audit Efficiency Gain',
      description: 'Inventory management platform developed during internship for inventory tracking and management.',
      longDescription: 'Developed during my internship at Seasana Industries, StoreMind resolves tracking bottlenecks. It features real-time inventory tracking, automatic low-stock notifications, structural log audits, and multi-user access controls. The frontend is built on React to handle heavy data grids smoothly.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Real-time inventory level tracking and automated ledger updates',
        'Intuitive reporting dashboard with automated PDF export tools',
        'Custom alerts triggered on critical threshold items',
        'Granular user permissions for managers and warehouse crew'
      ],
      github: 'https://github.com/AshwinAA10/StoreMind---Inventory-Management-System',
      demo: 'https://github.com/AshwinAA10/StoreMind---Inventory-Management-System',
      image: '/storemind.png'
    },
    {
      id: 'medialert',
      title: 'MediAlert',
      subtitle: 'Healthcare Notification Application',
      category: 'Healthcare Application',
      impact: '0.1s Notification Broadcast',
      description: 'Healthcare-focused application designed to improve medical information accessibility and notifications.',
      longDescription: 'A mobile-first notification and emergency client designed to improve patient-doctor synchronization. It handles emergency SMS triggers, medical schedule tracking alerts, drug dose reminders, and secure local records indexing.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Expo', 'Twilio API'],
      features: [
        'Medication calendar with precise push notification reminders',
        'Emergency trigger broadcasting SMS alerts with map locations',
        'Encrypted database store for health card statistics',
        'Accessible, high-contrast, larger typeface scaling options'
      ],
      github: 'https://github.com/AshwinAA10',
      demo: 'https://github.com/AshwinAA10',
      image: '/medialert.png'
    },
    {
      id: 'moviemate-ai',
      title: 'MovieMate AI',
      subtitle: 'AI Movie Assistant & Analytics',
      category: 'AI Application',
      impact: '94% Sentiment Accuracy',
      description: 'AI-powered movie assistant for recommendations and movie insights.',
      longDescription: 'An interactive chatbot assistant designed to scan media data. It parses ratings, searches cast credentials, translates summaries, analyzes critical reception reception metrics, and outputs structured movie cards.',
      tech: ['React', 'Express.js', 'OpenAI API', 'TMDB API', 'Framer Motion'],
      features: [
        'Conversational search supporting complex logic filters',
        'Visual card grid displaying poster metrics and scores',
        'Sentiment log summarizer analyzing Rotten Tomatoes credentials',
        'Interactive trailer modal layout'
      ],
      github: 'https://github.com/AshwinAA10',
      demo: 'https://github.com/AshwinAA10',
      image: '/moviemate.png'
    },
    {
      id: 'worldofsurya',
      title: 'World of Surya',
      subtitle: 'OTT Movie Streaming UI',
      category: 'Streaming Platform',
      impact: '60fps UI Playback',
      description: 'Movie streaming platform with premium membership plans and responsive UI.',
      longDescription: 'World of Surya is a custom OTT streaming client interface exploration. It implements responsive media grids, high-performance carousel sliders, glassmorphic player overlays, audio channel selections, and premium subscription portal sheets.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
      features: [
        'Immersive media slider with dynamic mouse parallax elements',
        'Glassmorphic custom controller overlays built with backdrop filters',
        'Responsive layout scaling for mobile and desktop screens',
        'Optimized component lazy-loading for fast page loads'
      ],
      github: 'https://github.com/AshwinAA10/World-of-Surya',
      demo: 'https://github.com/AshwinAA10/World-of-Surya',
      image: '/worldofsurya.png'
    },
    {
      id: 'pathfinder',
      title: 'Pathfinding Visualizer',
      subtitle: 'Interactive Graph Traversal Concept',
      category: 'Algorithm Visualizer',
      impact: '100% Real-time Solving',
      description: 'Interactive visualization of pathfinding algorithms and graph traversal concepts.',
      longDescription: 'An educational visualizer designed to plot route adjustments across coordinate systems. It displays step-by-step algorithms (Dijkstra, A*, DFS, BFS) expanding nodes, placing wall boundaries, mapping obstacles, and finding the shortest pathway line.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Graph Algorithms'],
      features: [
        'Real-time path calculation on start/end node dragging',
        'Wall drawing tools to test algorithm behavior under blockades',
        'Adjustable animation speed settings for educational inspection',
        'Visual highlights demonstrating visited node expansions'
      ],
      github: 'https://github.com/AshwinAA10',
      demo: 'https://github.com/AshwinAA10',
      image: '/pathfinder.png'
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background glow lighting */}
      <div className="blur-glow w-[380px] h-[380px] bg-cyber-cyan/5 top-[30%] left-[40%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">03 // ENGINEERING</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Technical Projects</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className={`fallable glow-border p-6 bg-white/[0.01] hover:bg-white/[0.02] flex flex-col justify-between min-h-[420px] relative overflow-hidden group select-none ${
              project.featured ? 'md:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-8 lg:min-h-[380px]' : ''
            }`}
          >
            {/* Project Screenshot Header */}
            <div className={`relative overflow-hidden rounded-xl bg-black/40 flex items-center justify-center mb-6 border border-white/5 group-hover:border-cyber-cyan/20 transition-all duration-300 w-full ${
              project.featured ? 'h-52 lg:h-[280px] lg:w-1/2 lg:mb-0' : 'h-52'
            }`}>
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Project Copy */}
            <div className={`space-y-4 text-left flex-grow flex flex-col justify-between ${project.featured ? 'lg:w-1/2' : ''}`}>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyber-cyan tracking-wider uppercase flex items-center gap-1.5">
                    {project.featured && (
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-2 py-0.5 rounded font-bold inline-flex items-center gap-1">
                        <Award className="w-3 h-3" /> FEATURED
                      </span>
                    )}
                    {project.category}
                  </span>
                  
                  {/* Tech tag highlights & Impact badge */}
                  <div className="flex items-center gap-2">
                    {project.impact && (
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/25 font-bold uppercase tracking-wider shrink-0">
                        {project.impact}
                      </span>
                    )}
                    <div className="flex gap-1.5">
                      {project.tech.slice(0, 2).map((t) => (
                        <span key={t} className="text-[9px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold font-display text-white tracking-tight flex items-center gap-2">
                  {project.title}
                  {project.internship && <span className="text-xs text-white/40 font-normal">({project.company})</span>}
                </h4>
                
                <p className="text-xs text-white/60 leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[10px] font-semibold uppercase tracking-wider text-cyber-cyan hover:underline inline-flex items-center gap-1"
                  data-cursor="interactive"
                >
                  Inspect Specs
                  <ArrowUpRight className="w-3 h-3" />
                </button>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 hover:text-cyber-cyan transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                      data-cursor="interactive"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/60 hover:text-cyber-cyan transition-colors"
                      aria-label={`${project.title} live demo`}
                      data-cursor="interactive"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Slide-out Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex justify-end font-sans">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-sm"
            />

            {/* Slide out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-lg h-full bg-[#050512] border-l border-white/5 shadow-2xl p-8 relative flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Header controls */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono text-cyber-cyan tracking-[0.2em]">SPECS_INSPECTION_LOG</span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/70"
                    data-cursor="interactive"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* General Title Info */}
                <div className="text-left space-y-2">
                  <span className="text-xs font-mono text-cyber-cyan flex items-center gap-1.5">
                    {selectedProject.featured && <Award className="w-3.5 h-3.5 text-amber-400" />}
                    {selectedProject.category} {selectedProject.internship ? `at ${selectedProject.company}` : ''}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-extrabold font-syne text-white tracking-tight">
                    {selectedProject.title}
                  </h4>
                  <p className="text-sm font-semibold text-white/70 font-display">
                    {selectedProject.subtitle}
                  </p>
                  {selectedProject.impact && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400 font-mono font-bold uppercase max-w-max">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Key Impact: {selectedProject.impact}
                    </div>
                  )}
                </div>

                {/* Visual Header representation */}
                <div className="h-44 w-full bg-black/40 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={`${selectedProject.title} screenshot`} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Long Description Text */}
                <div className="text-left space-y-4">
                  <h5 className="text-xs font-mono text-white/40 tracking-wider">PROJECT SUMMARY</h5>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Core features bullet highlights */}
                <div className="text-left space-y-4">
                  <h5 className="text-xs font-mono text-white/40 tracking-wider">KEY DELIVERABLES</h5>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat) => (
                      <div key={feat} className="flex gap-2.5 items-start text-xs text-white/60 leading-normal">
                        <CheckCircle2 className="w-4.5 h-4.5 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Built Tech stack badges */}
                <div className="text-left space-y-4">
                  <h5 className="text-xs font-mono text-white/40 tracking-wider">BUILT STACK</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono text-white/80 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer action buttons */}
              <div className="grid grid-cols-2 gap-4 pt-8 mt-12 border-t border-white/5">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all inline-flex justify-center items-center gap-2"
                    data-cursor="interactive"
                  >
                    <GithubIcon />
                    Source Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center py-3 bg-gradient-to-r from-cyber-cyan to-electric-blue text-black font-semibold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all inline-flex justify-center items-center gap-2"
                    data-cursor="interactive"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
