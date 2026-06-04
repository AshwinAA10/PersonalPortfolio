import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, GitCommit } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export const GithubContributions: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null)

  // Generate mock commit calendar squares (53 weeks * 7 days = 371 squares)
  // We'll vary the contribution intensity (0 to 4) to make it look authentic
  const totalDays = 371
  const gridData = Array.from({ length: totalDays }, (_, i) => {
    // Generate organic-looking contribution distributions
    // Higher commits around weekdays, lower on weekends, some active streaks
    const dayOfWeek = i % 7
    const weekIndex = Math.floor(i / 7)
    let intensity = 0
    
    // Create random but grouped streaks
    const seed = Math.sin(i * 0.15) * Math.cos(weekIndex * 0.05)
    if (seed > 0.4) intensity = 4
    else if (seed > 0.1) intensity = 3
    else if (seed > -0.2) intensity = 2
    else if (seed > -0.6) intensity = 1
    
    // Reduce weekend activity slightly for realism
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      intensity = Math.max(0, intensity - 2)
    }

    const commitCounts = [0, 1, 3, 6, 12]
    const count = commitCounts[intensity]

    // Create a date string representing days in the past
    const daysAgo = totalDays - i
    const dateObj = new Date()
    dateObj.setDate(dateObj.getDate() - daysAgo)
    const formattedDate = dateObj.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })

    return { intensity, count, date: formattedDate }
  })

  // Get color code matching GitHub's contribution colors
  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return 'bg-zinc-900 border border-white/[0.02]'
      case 1: return 'bg-emerald-950/40 border border-emerald-900/10'
      case 2: return 'bg-emerald-800/40 border border-emerald-700/10'
      case 3: return 'bg-emerald-600/50 border border-emerald-500/10'
      case 4: return 'bg-emerald-400 border border-emerald-300/15 shadow-[0_0_10px_rgba(52,211,153,0.15)]'
      default: return 'bg-zinc-900'
    }
  }

  return (
    <section className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[350px] h-[350px] bg-emerald-500/5 bottom-[10%] right-[15%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-emerald-400">05 // ENGAGEMENT</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Open Source Contribution</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-emerald-500 to-transparent" />
      </div>

      <div className="fallable glow-border p-8 bg-white/[0.01] relative overflow-hidden select-none text-left">
        {/* Subtle grid pattern inside card */}
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Stats Metadata Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <GithubIcon />
              </div>
              <div>
                <h4 className="text-base font-bold text-white font-display">AshwinAA10</h4>
                <p className="text-xs text-white/50">Active commit log</p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-sans">
              I maintain a consistent coding frequency, delivering clean commits and collaborating on full stack applications. Hover over the activity calendar to inspect my daily logs.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl space-y-0.5">
                <p className="text-[10px] text-white/40 font-mono flex items-center gap-1"><GitCommit className="w-3 h-3 text-emerald-400" /> TOTAL COMMITS</p>
                <p className="text-lg font-bold text-white font-mono">1,482+</p>
              </div>
              <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl space-y-0.5">
                <p className="text-[10px] text-white/40 font-mono flex items-center gap-1"><Calendar className="w-3 h-3 text-emerald-400" /> ACTIVE DAYS</p>
                <p className="text-lg font-bold text-white font-mono">312 Days</p>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/AshwinAA10"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-emerald-400 hover:text-white hover:underline transition-colors"
                data-cursor="interactive"
              >
                Inspect GitHub Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Graphical Calendar Grid Column */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
            <div className="w-full overflow-x-auto scrollbar-none pb-2">
              <div className="min-w-[700px] flex flex-col gap-1">
                {/* 7 rows representing Days of Week */}
                {Array.from({ length: 7 }).map((_, dayIdx) => (
                  <div key={dayIdx} className="flex gap-1 justify-start">
                    {/* Map squares corresponding to weeks */}
                    {Array.from({ length: 53 }).map((_, weekIdx) => {
                      const squareIdx = weekIdx * 7 + dayIdx
                      const dayData = gridData[squareIdx]

                      return (
                        <motion.div
                          key={weekIdx}
                          className={`w-[10px] h-[10px] rounded-[2px] transition-all cursor-pointer ${getColorClass(dayData.intensity)}`}
                          whileHover={{ scale: 1.35, zIndex: 30 }}
                          onMouseEnter={() => setHoveredDay({ count: dayData.count, date: dayData.date })}
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Footer details */}
            <div className="flex items-center justify-between text-[9px] font-mono text-white/40">
              <div className="flex items-center gap-1">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-900 border border-white/[0.02]" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-950/40" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800/40" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600/50" />
                <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                <span>More</span>
              </div>

              {/* Tooltip dynamic info panel */}
              <div className="h-4 flex items-center justify-end font-semibold text-emerald-400 font-mono tracking-wider min-w-[200px]">
                {hoveredDay ? (
                  <span>{hoveredDay.count} COMMITS ON {hoveredDay.date.toUpperCase()}</span>
                ) : (
                  <span className="opacity-50">HOVER BLOCKS FOR DETAIL LOG</span>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
