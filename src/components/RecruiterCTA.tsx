import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Send, Mail, Briefcase } from 'lucide-react'

export const RecruiterCTA: React.FC = () => {
  return (
    <section className="py-16 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[400px] h-[300px] bg-cyber-cyan/5 top-[10%] left-[30%]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="fallable glow-border p-8 md:p-12 bg-gradient-to-r from-white/[0.01] to-cyber-cyan/[0.005] border border-white/5 relative overflow-hidden select-none text-left"
      >
        {/* Subtle grid pattern inside */}
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          {/* Status availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-[9px] font-mono tracking-widest text-emerald-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Recruitment Active for Summer 2026 Internships & Positions
          </div>

          <h3 className="text-3xl md:text-5xl font-extrabold font-syne text-white tracking-tight leading-tight">
            Ready to bring engineering ownership to your development team?
          </h3>
          
          <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans max-w-2xl">
            I am currently open to summer internships, full-time placements, and engineering contracts. If you are a recruiter looking for a disciplined developer who takes pride in building practical business interfaces, let's establish contact immediately.
          </p>

          {/* Connect Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-white/95 rounded-xl hover:shadow-[0_10px_35px_rgba(255,255,255,0.15)] transition-all duration-300"
              data-cursor="interactive"
            >
              <Send className="w-4 h-4" />
              Initiate Handshake
            </a>

            <a
              href="/resume.pdf"
              download="Ashwin_AA_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
              data-cursor="interactive"
            >
              <FileText className="w-4 h-4 text-cyber-cyan" />
              Download Resume PDF
            </a>

            <a
              href="mailto:ashwinaa2005@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300"
              data-cursor="interactive"
            >
              <Mail className="w-4 h-4" />
              Direct Email
            </a>
          </div>
        </div>

        {/* Floating subtle graphics */}
        <div className="absolute right-[5%] bottom-0 opacity-10 pointer-events-none hidden lg:block">
          <Briefcase className="w-64 h-64 text-white" />
        </div>
      </motion.div>
    </section>
  )
}
