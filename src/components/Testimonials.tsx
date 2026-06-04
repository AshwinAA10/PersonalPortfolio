import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Quote } from 'lucide-react'

interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  avatarLetter: string
  color: string
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      quote: "Ashwin demonstrated exceptional technical aptitude during his industrial training. He took complete ownership of the StoreMind dashboard, developing a reliable database inventory layer and improving tracking workflows for our operations.",
      author: "K. Rajasekaran",
      role: "Operations Director",
      company: "Seasana Industries",
      avatarLetter: "R",
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-400"
    },
    {
      quote: "Ashwin combines solid computer science foundations with excellent full stack implementation skills. His independent projects, particularly MediAlert and the Pathfinding Visualizer, showcase a disciplined approach to structured coding and user experience design.",
      author: "Prof. A. Jeevarathinam",
      role: "Assisstant Professor",
      company: "Sri Krishna Arts and Science College",
      avatarLetter: "J",
      color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-indigo-400"
    }
  ]

  return (
    <section className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[350px] h-[350px] bg-cyber-purple/5 top-[15%] left-[10%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-purple">06 // RECOMMENDATIONS</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Professional Endorsements</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-purple to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="fallable glow-border p-8 bg-white/[0.01] hover:bg-white/[0.02] flex flex-col justify-between space-y-6 relative select-none text-left"
          >
            {/* Top Quote Icon */}
            <div className="flex justify-between items-start">
              <span className={`p-2 rounded-xl bg-white/5 border border-white/10 ${item.color.split(' ').pop()}`}>
                <MessageSquare className="w-5 h-5" />
              </span>
              <Quote className="w-8 h-8 text-white/5" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-sm text-white/70 italic leading-relaxed font-sans flex-grow">
              "{item.quote}"
            </p>

            {/* Author Metadata */}
            <div className="flex items-center gap-3.5 border-t border-white/5 pt-4">
              <div 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white font-mono text-sm uppercase"
              >
                {item.avatarLetter}
              </div>
              <div>
                <p className="text-sm font-bold text-white font-display">{item.author}</p>
                <p className="text-xs text-white/50">{item.role} // <span className="text-cyber-cyan">{item.company}</span></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
