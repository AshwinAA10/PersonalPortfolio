import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award, Play } from 'lucide-react'

interface Milestone {
  id: number
  date: string
  title: string
  subtitle: string
  type: 'internship' | 'achievement' | 'learning'
  desc: string
  bullets: string[]
}

const milestones: Milestone[] = [
  {
    id: 1,
    date: 'MAY 2026 - PRESENT',
    title: 'Advanced Full-Stack Engineering Studies',
    subtitle: 'Self-Driven Mastery & Project Architecture',
    type: 'learning',
    desc: 'Deep diving into advanced system engineering, micro-frontend layouts, high-performance canvas layers, and complex database aggregation workflows.',
    bullets: ['Fine-tuning React v19 concurrency and asynchronous state rendering patterns.', 'Designing Web Drafting tools and advanced SEO schemas.']
  },
  {
    id: 2,
    date: 'JUNE 2025 - AUGUST 2025',
    title: 'Full-Stack Development Intern',
    subtitle: 'Seasana Industries',
    type: 'internship',
    desc: 'Collaborated with engineering teams to design and build StoreMind, a premium React-based inventory tracking dashboard. Handled heavy frontend performance optimization and client API syncs.',
    bullets: ['Designed modern data grids reducing load latencies by 30%.', 'Integrated secure role-based access tokens for manager profiles.']
  },
  {
    id: 3,
    date: 'FEBRUARY 2025',
    title: 'ICT Learnathon participant',
    subtitle: 'ICT Academy Hackathon Event',
    type: 'achievement',
    desc: 'Participated in a 24-hour sprint developing custom web systems to optimize warehouse logistics routing. Won high recognition scores for layout simplicity and UX responsiveness.',
    bullets: ['Engineered functional dashboards in record time limits.', 'Aligned interface features with direct user test sessions.']
  },
  {
    id: 4,
    date: 'DECEMBER 2024',
    title: 'Industrial Exposure Training',
    subtitle: 'System Architect Workshops',
    type: 'internship',
    desc: 'Completed technical training examining server management, local virtualization containers, databases indexing, and modern automated Git pipelines.',
    bullets: ['Gained deep insight into staging and deployment configurations.', 'Practiced relational schema designs and query testing.']
  },
  {
    id: 5,
    date: '2023 - 2024',
    title: 'Certifications & Coursera achievements',
    subtitle: 'Professional Specialization Tracks',
    type: 'achievement',
    desc: 'Completed specialized courses covering full-stack concepts, JavaScript algorithms, Figma layouts, Python automation script layers, and SQL databases.',
    bullets: ['Meta React Developer Certification curriculum completion.', 'Database administration and scripting automation courses.']
  }
]

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 relative max-w-4xl mx-auto">
      {/* Background glow shadow */}
      <div className="blur-glow w-[350px] h-[350px] bg-cyber-purple/5 top-[40%] right-[10%]" />

      <div className="space-y-4 mb-20 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">04 // TIMELINE</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">The Career Journey</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      {/* Vertical Timeline container */}
      <div className="relative border-l-2 border-white/5 pl-8 ml-4 md:ml-6 space-y-12">
        {milestones.map((milestone, idx) => {
          
          // Set milestone type icons
          const getIcon = () => {
            if (milestone.type === 'internship') return <Briefcase className="w-4 h-4 text-cyber-cyan" />
            if (milestone.type === 'achievement') return <Award className="w-4 h-4 text-cyber-purple" />
            return <Play className="w-4 h-4 text-electric-blue ml-0.5" />
          }

          const getColorClass = () => {
            if (milestone.type === 'internship') return 'bg-cyber-cyan/10 border-cyber-cyan/30'
            if (milestone.type === 'achievement') return 'bg-cyber-purple/10 border-cyber-purple/30'
            return 'bg-electric-blue/10 border-electric-blue/30'
          }

          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative text-left"
            >
              {/* Timeline node */}
              <span className="absolute -left-[45px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#03030c] border-2 border-white/10 group-hover:border-cyber-cyan transition-colors z-10">
                {getIcon()}
              </span>

              {/* Card Container */}
              <div 
                className="glow-border p-6 bg-white/[0.01] hover:bg-white/[0.02] space-y-4 relative overflow-hidden transition-all duration-300"
                data-cursor="interactive"
              >
                {/* Node type color highlights */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div className="space-y-1">
                    <h4 className="text-base md:text-lg font-bold font-display text-white">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-white/50 font-medium">
                      {milestone.subtitle}
                    </p>
                  </div>

                  <span className={`text-[9px] font-mono font-bold tracking-wider px-2.5 py-1 rounded border inline-block shrink-0 max-w-max uppercase ${getColorClass()}`}>
                    {milestone.date}
                  </span>
                </div>

                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  {milestone.desc}
                </p>

                {/* Achievements bullets */}
                <ul className="space-y-1.5 pt-2">
                  {milestone.bullets.map((b, i) => (
                    <li key={i} className="text-[10px] text-white/40 flex items-center gap-2 font-mono">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                      {b}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
