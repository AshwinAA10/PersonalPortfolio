import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Award, GraduationCap, CheckCircle2 } from 'lucide-react'

interface Job {
  role: string
  company: string
  date: string
  desc: string
  bullets: string[]
}

interface Education {
  degree: string
  school: string
  date: string
  desc: string
  bullets: string[]
}

interface Certification {
  name: string
  issuer: string
  date: string
  desc: string
}

export const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      role: 'Industrial Exposure Trainee',
      company: 'Seasana Industries',
      date: 'MAY 2025 - AUGUST 2025',
      desc: 'Took responsibility for designing and deploying production-ready business solutions to streamline internal logistics and stock auditing.',
      bullets: [
        'Developed StoreMind Inventory Management System using MERN stack (React, Node.js, Express.js, MongoDB).',
        'Improved inventory tracking workflow, reducing stock audit delays by 30%.',
        'Built real-time stock counting dashboard with automatic alert flags for critical item levels.'
      ]
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Zenvlo',
      date: 'MAY 2026 - PRESENT',
      desc: 'Contributing to the development of Zenvlo, a modern web platform focused on delivering professional digital solutions and scalable web experiences.',
      bullets: [
        'Developed responsive frontend interfaces and reusable UI components using modern web technologies.',
        'Worked on backend integrations, feature implementation, and performance optimization.',
        'Collaborated on product enhancements, deployment workflows, and overall user experience improvements.'
      ]
    }
  ]

  const education: Education[] = [
    {
      degree: 'BSc in Computer Science',
      school: 'Sri Krishna Arts and Science College',
      date: '2023 - 2026',
      desc: 'Core computer science theories combined with hands-on labs. Focused on building standard algorithmic efficiency and relational database structures.',
      bullets: [
        'Maintained high academic focus with specialized electives in Web Engineering & Systems design.',
        'Active contributor in coding circles and technical symposiums.'
      ]
    }
  ]

  const certifications: Certification[] = [
    {
      name: 'Meta React Developer Certificate',
      issuer: 'Meta (via Coursera)',
      date: '2024',
      desc: 'Comprehensive training in React components, virtual DOM, custom hooks, and state stores.'
    },
    {
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2024',
      desc: 'Validated core knowledge in object-oriented programming, data structures, and functional algorithms.'
    },
    {
      name: 'Relational Database Design & SQL',
      issuer: 'Specialization Track',
      date: '2024',
      desc: 'Covered normalization rules, writing optimized SQL joins, and indexing structures.'
    },
    {
      name: 'Python Automation & Scripting',
      issuer: 'Specialization Track',
      date: '2023',
      desc: 'Learned system automation, file manipulation scripting, and data scraping libraries.'
    }
  ]

  return (
    <section id="experience" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background glow shadow */}
      <div className="blur-glow w-[400px] h-[400px] bg-cyber-purple/5 top-[30%] right-[5%]" />

      <div className="space-y-4 mb-20 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">04 // CREDENTIALS</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Experience & Academics</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

        {/* Column A: Professional Experience */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6 text-left">
            <div className="p-2.5 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-xl">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">Professional Career</h3>
              <p className="text-xs text-white/40">Internships & practical exposure</p>
            </div>
          </div>

          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-10">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative text-left"
              >
                {/* Timeline node dot */}
                <span className="absolute -left-[31px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#09090b] border border-white/20 text-cyber-cyan z-10">
                  <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                </span>

                <div
                  className="fallable glow-border p-5 bg-white/[0.01] hover:bg-white/[0.02] space-y-3 relative overflow-hidden transition-all duration-300"
                  data-cursor="interactive"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                    <div>
                      <h4 className="text-sm font-bold font-display text-white">{job.role}</h4>
                      <p className="text-[11px] text-white/50">{job.company}</p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-2.5 py-1.5 rounded uppercase shrink-0 max-w-max">
                      {job.date}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 leading-relaxed font-sans">{job.desc}</p>

                  <ul className="space-y-1.5 pt-1">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-[10px] text-white/45 flex items-start gap-2 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column B: Education & Certifications */}
        <div className="space-y-8">
          {/* Education Timeline Block */}
          <div>
            <div className="flex items-center gap-3 mb-6 text-left">
              <div className="p-2.5 bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">Education Timeline</h3>
                <p className="text-xs text-white/40">Academic credentials</p>
              </div>
            </div>

            <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative text-left"
                >
                  {/* Timeline node dot */}
                  <span className="absolute -left-[31px] top-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#09090b] border border-white/20 text-cyber-purple z-10">
                    <span className="w-2 h-2 rounded-full bg-cyber-purple" />
                  </span>

                  <div
                    className="fallable glow-border p-5 bg-white/[0.01] hover:bg-white/[0.02] space-y-3 relative overflow-hidden transition-all duration-300"
                    data-cursor="interactive"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-2">
                      <div>
                        <h4 className="text-sm font-bold font-display text-white">{edu.degree}</h4>
                        <p className="text-[11px] text-white/50">{edu.school}</p>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-cyber-purple bg-cyber-purple/5 border border-cyber-purple/20 px-2.5 py-1.5 rounded uppercase shrink-0 max-w-max">
                        {edu.date}
                      </span>
                    </div>

                    <p className="text-xs text-white/60 leading-relaxed font-sans">{edu.desc}</p>
                    <ul className="space-y-1.5 pt-1">
                      {edu.bullets.map((bullet, i) => (
                        <li key={i} className="text-[10px] text-white/45 flex items-start gap-2 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyber-purple shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-6 text-left">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">Certifications</h3>
                <p className="text-xs text-white/40">Verified skills specialization</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="fallable glow-border p-4 bg-white/[0.01] hover:bg-white/[0.02] text-left flex flex-col justify-between space-y-2 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 relative group"
                  data-cursor="interactive"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold shrink-0">
                        {cert.date}
                      </span>
                      <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">{cert.issuer}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                      {cert.name}
                    </h4>
                  </div>
                  <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
