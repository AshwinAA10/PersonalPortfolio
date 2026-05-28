import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, X, CheckCircle2 } from 'lucide-react'

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
  internship: boolean
  company?: string
  description: string
  longDescription: string
  tech: string[]
  features: string[]
  github?: string
  demo?: string
  // Visual schematic mock renderer
  renderMockup: () => React.ReactNode
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projectsData: Project[] = [
    {
      id: 'storemind',
      title: 'StoreMind',
      subtitle: 'Inventory Management Platform',
      internship: true,
      company: 'Seasana Industries',
      description: 'An enterprise-level inventory tracker and warehouse system. Optimizes stock auditing flows and metrics logs.',
      longDescription: 'Developed during my internship at Seasana Industries, StoreMind resolves supply tracking bottlenecks. It features real-time inventory adjustments, automatic low-stock notifications, structural log audits, and multi-user access controls. The frontend is built on React to handle heavy data grids smoothly.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Real-time inventory level tracking and automated ledger updates',
        'Intuitive reporting dashboard with automated PDF export tools',
        'Custom alerts triggered on critical threshold items',
        'Granular user permissions for managers and warehouse crew'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      renderMockup: () => (
        <div className="w-full h-full bg-[#050512] flex flex-col justify-between p-4 font-mono text-[9px] text-white/50 border border-white/5 rounded-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-cyber-cyan font-bold">● STORE_MIND_DASHBOARD</span>
            <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-[8px]">ONLINE</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-white/5 p-2 rounded border border-white/5 text-left">
              <p className="text-[8px] text-white/30">TOTAL STOCK</p>
              <p className="text-sm font-bold text-white">4,812</p>
            </div>
            <div className="bg-white/5 p-2 rounded border border-white/5 text-left">
              <p className="text-[8px] text-white/30">LOW ITEMS</p>
              <p className="text-sm font-bold text-orange-400">14</p>
            </div>
            <div className="bg-white/5 p-2 rounded border border-white/5 text-left">
              <p className="text-[8px] text-white/30">AUDITED</p>
              <p className="text-sm font-bold text-cyber-cyan">99.8%</p>
            </div>
          </div>
          <div className="h-10 bg-white/5 rounded border border-white/5 flex items-center justify-around px-2">
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative">
              <div className="h-full bg-cyber-cyan w-[75%]" />
            </div>
            <span className="text-white ml-2">75%</span>
          </div>
        </div>
      )
    },
    {
      id: 'worldofsurya',
      title: 'World of Surya',
      subtitle: 'OTT Movie Streaming UI',
      internship: false,
      description: 'A premium, highly interactive media player and streaming hub layout. Features rich carousel cards and glass controls.',
      longDescription: 'World of Surya is a custom user interface exploration representing a luxury streaming service (OTT platform). It implements fluid layout systems, complex grid sliders, interactive category highlights, and an fully custom video player interface with audio/quality selectors.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Lucide Icons'],
      features: [
        'Immersive media slider with dynamic mouse parallax elements',
        'Glassmorphic custom controller overlays built with backdrop filters',
        'Responsive layout scaling for multiple monitor profiles',
        'Optimized component lazy-loading for fast page loads'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      renderMockup: () => (
        <div className="w-full h-full bg-gradient-to-t from-[#020208] to-[#0d0a21] flex flex-col justify-between p-4 rounded-xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 text-[8px] font-mono font-bold">OTT_UI</div>
          <div className="text-left space-y-1.5 mt-2">
            <p className="text-[9px] text-cyber-cyan font-mono tracking-widest">STREAMING NOW</p>
            <h5 className="text-xs font-bold text-white leading-tight font-display">SURYA: THE CHRONICLES</h5>
            <p className="text-[8px] text-white/60 leading-relaxed max-w-[150px]">Episode 4: Rise of the cybergrid cores.</p>
          </div>
          <div className="flex gap-2 items-center pt-2">
            <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-[9px] font-bold">▶</span>
            <div className="flex-grow bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-cyber-purple h-full w-[40%]" />
            </div>
            <span className="text-[8px] font-mono text-white/40">24:12 / 60:00</span>
          </div>
        </div>
      )
    },
    {
      id: 'seoacademic',
      title: 'Academic SEO Optimization System',
      subtitle: 'Metadata Tuning & Index Optimizer',
      internship: false,
      description: 'An engine built to analyze academic research papers, auto-generate SEO metadata, and optimize indices for citations.',
      longDescription: 'This academic optimization project leverages custom parsing script logic to index PDFs of scholarly publications. It analyzes content clusters, extracts high-value keywords, structures JSON-LD schemas, and outputs search-engine-ready files to boost academic discoverability.',
      tech: ['Python', 'HTML', 'JavaScript', 'CSS', 'SEO Systems'],
      features: [
        'Structural extraction of paper details using pattern parser algorithms',
        'Metadata tag builder generating JSON-LD and OpenGraph templates',
        'Citation graph visualizer detailing linking structures',
        'Automated XML Sitemap structure engine for index submission'
      ],
      github: 'https://github.com',
      renderMockup: () => (
        <div className="w-full h-full bg-[#03030c] flex flex-col justify-between p-4 font-mono text-[9px] text-white/50 border border-white/5 rounded-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-electric-blue">📄 ACADEMIC_INDEX_SYS</span>
            <span className="text-white/30 text-[8px]">V1.0</span>
          </div>
          <div className="space-y-1.5 text-left my-2 flex-grow">
            <div className="flex justify-between border-b border-white/5 py-0.5">
              <span>SEO Score</span>
              <span className="text-green-400 font-bold">98/100</span>
            </div>
            <div className="flex justify-between border-b border-white/5 py-0.5">
              <span>JSON-LD Schema</span>
              <span className="text-cyber-cyan font-bold">VALID</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>Index Status</span>
              <span className="text-white font-bold">SITEMAP_READY</span>
            </div>
          </div>
          <div className="bg-white/5 p-1.5 rounded border border-white/5 text-left text-[7px] text-white/40 leading-normal">
            {"{ \"@context\": \"https://schema.org\", \"@type\": \"ScholarlyArticle\" }"}
          </div>
        </div>
      )
    },
    {
      id: 'draftingtool',
      title: 'Web-based Drafting Tool',
      subtitle: 'Fabric.js Drawing Application',
      internship: false,
      description: 'A browser-based vector drafting tool with support for grid snapping, shapes, layering, and measurement export.',
      longDescription: 'Inspired by AutoCAD, this vector drafting interface is built on Fabric.js. It allows engineering drafts directly in the browser, featuring linear snap grids, coordinate trackers, shape manipulation, path rendering, and precise JSON/SVG exporting capabilities.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Fabric.js', 'Vite'],
      features: [
        'Interactive snapping grid system with mouse coordinate feedback',
        'Full set of drafting utilities (Lines, Polygons, Circles, Dimensions)',
        'Object nesting, locking, and layered depth management',
        'High resolution export formats including raw JSON configurations'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      renderMockup: () => (
        <div className="w-full h-full bg-[#04090b] flex flex-col justify-between p-4 font-mono text-[9px] text-white/50 border border-white/5 rounded-xl relative overflow-hidden">
          {/* Cyber drafting grids */}
          <div className="absolute inset-0 cyber-grid opacity-[0.12] pointer-events-none" />
          <div className="flex justify-between items-center z-10 border-b border-white/5 pb-1">
            <span className="text-cyber-cyan font-bold">📐 FABRIC_CANVAS_DRAFT</span>
            <span className="text-white/40">Grid: 10px</span>
          </div>
          <div className="flex-grow flex items-center justify-center relative my-2 z-10">
            {/* Draw sample layout draft */}
            <svg className="w-24 h-24 stroke-cyber-cyan fill-none" viewBox="0 0 100 100">
              <rect x="15" y="15" width="70" height="70" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="25" strokeWidth="1.5" />
              <line x1="15" y1="50" x2="85" y2="50" strokeWidth="0.8" stroke="rgba(255,255,255,0.4)" />
              <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.8" stroke="rgba(255,255,255,0.4)" />
            </svg>
          </div>
          <div className="flex justify-between items-center z-10 text-[8px] border-t border-white/5 pt-1 text-white/40">
            <span>X: 50.0 // Y: 50.0</span>
            <span>EXPORT: SVG / JSON</span>
          </div>
        </div>
      )
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

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="glow-border p-6 bg-white/[0.01] hover:bg-white/[0.02] flex flex-col justify-between h-[420px] relative overflow-hidden group select-none"
          >
            {/* Project Mockup Header */}
            <div className="h-52 w-full relative overflow-hidden rounded-xl bg-black/40 flex items-center justify-center p-2 mb-6 border border-white/5 group-hover:border-cyber-cyan/20 transition-all duration-300">
              {project.renderMockup()}
            </div>

            {/* Project Copy */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-cyber-cyan tracking-wider uppercase">
                  {project.internship ? `Internship @ ${project.company}` : 'Academic / Creative'}
                </span>
                
                {/* Tech tag highlights */}
                <div className="flex gap-1.5">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="text-[9px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h4 className="text-xl font-bold font-display text-white tracking-tight">
                {project.title}
              </h4>
              
              <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex items-center justify-between pt-6 mt-auto border-t border-white/5">
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
              className="absolute inset-0 bg-[#03030c]/80 backdrop-blur-sm"
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
                  <span className="text-xs font-mono text-cyber-cyan">
                    {selectedProject.internship ? `Internship at ${selectedProject.company}` : 'Independent System'}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-extrabold font-syne text-white tracking-tight">
                    {selectedProject.title}
                  </h4>
                  <p className="text-sm font-semibold text-white/70 font-display">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Schematic Header representation */}
                <div className="h-44 w-full bg-black/40 rounded-xl border border-white/5 flex items-center justify-center p-4">
                  {selectedProject.renderMockup()}
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
                  <h5 className="text-xs font-mono text-white/40 tracking-wider">FUNCTIONALITIES</h5>
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
                    Live Sandbox
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
