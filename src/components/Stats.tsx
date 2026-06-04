import React from 'react'
import { motion } from 'framer-motion'
import { CheckSquare, FileText, Code2, Briefcase } from 'lucide-react'

interface StatItem {
  value: string
  label: string
  desc: string
  icon: React.ReactNode
  color: string
}

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: '8+',
      label: 'Projects Completed',
      desc: 'Full-stack applications & tools',
      icon: <CheckSquare className="w-5 h-5" />,
      color: 'from-blue-400 to-indigo-400'
    },
    {
      value: '12+',
      label: 'Certifications Earned',
      desc: 'Meta, Google & Coursera tracks',
      icon: <FileText className="w-5 h-5" />,
      color: 'from-indigo-400 to-purple-400'
    },
    {
      value: '15+',
      label: 'Technologies Learned',
      desc: 'Languages, frameworks & libraries',
      icon: <Code2 className="w-5 h-5" />,
      color: 'from-purple-400 to-pink-400'
    },
    {
      value: '1',
      label: 'Internship Experience',
      desc: 'At Seasana Industries',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-emerald-400 to-teal-400'
    }
  ]

  return (
    <section className="py-12 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[300px] h-[300px] bg-cyber-cyan/5 top-[10%] left-[20%]" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="fallable glow-border p-6 bg-white/[0.01] flex flex-col justify-between space-y-4 text-left group select-none cursor-pointer"
            data-cursor="interactive"
          >
            {/* Stat Header Icon */}
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-cyber-cyan/30 group-hover:bg-cyber-cyan/5"
            >
              <span className="text-white/60 group-hover:text-cyber-cyan transition-colors">
                {stat.icon}
              </span>
            </div>

            {/* Stat Body */}
            <div className="space-y-1">
              <h4 
                className={`text-4xl font-extrabold font-syne tracking-tight bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </h4>
              <p className="text-sm font-bold text-white font-display tracking-wide">{stat.label}</p>
              <p className="text-xs text-white/50 leading-relaxed font-sans">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
