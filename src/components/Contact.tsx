import { useState } from 'react'
import { Mail, Send, Terminal, FileText } from 'lucide-react'

const GithubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'SYSTEM READY. WAITING FOR CLIENT CONTEXT...'
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Log the input changes dynamically inside our simulated terminal output!
    if (terminalLogs.length < 5) {
      setTerminalLogs((prev) => [
        ...prev,
        `[INPUT_LOG]: Capturing keypress on field '${name.toUpperCase()}'...`
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setTerminalLogs((prev) => [
        ...prev,
        '[ERROR]: VALIDATION FAILED. ALL FIELDS REQUIRED.'
      ])
      return
    }

    setIsSubmitting(true)
    setTerminalLogs((prev) => [
      ...prev,
      `[LOG]: Compiling envelope for user ${formData.name}...`,
      `[LOG]: Routing client handshake via SMTP...`,
    ])

    // Simulate database send
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTerminalLogs((prev) => [
        ...prev,
        '✔ [SUCCESS]: HANDSHAKE COMPLETE. ENVELOPE TRANSMITTED SUCCESSFULLY.',
        'SYSTEM IDLE. THANK YOU.'
      ])
      // Reset form fields
      setFormData({ name: '', email: '', message: '' })
    }, 1800)
  }

  const socials = [
    { name: 'Email', value: 'ashwinaa2005@gmail.com', icon: <Mail className="w-4 h-4" />, href: 'mailto:ashwinaa2005@gmail.com' },
    { name: 'LinkedIn', value: 'https://www.linkedin.com/in/ashwinaa10/', icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/ashwinaa10/' },
    { name: 'GitHub', value: 'https://github.com/AshwinAA10', icon: <GithubIcon />, href: 'https://github.com/AshwinAA10' },
    { name: 'Resume', value: 'Download Ashwin_AA_Resume.pdf', icon: <FileText className="w-4 h-4" />, href: '/resume.pdf' }
  ]

  return (
    <section id="contact" className="py-24 px-6 relative max-w-6xl mx-auto">
      {/* Background ambient lighting */}
      <div className="blur-glow w-[400px] h-[400px] bg-cyber-cyan/5 bottom-[10%] left-[5%]" />

      <div className="space-y-4 mb-16 text-left">
        <h3 className="text-xs font-mono uppercase tracking-[0.35em] text-cyber-cyan">06 // CONNECT</h3>
        <h2 className="text-3xl md:text-5xl font-extrabold font-syne tracking-tight">Initiate Handshake</h2>
        <div className="h-[1px] w-20 bg-gradient-to-r from-cyber-cyan to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct channels list */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <h4 className="text-xl font-bold font-display text-white">Let's build serious products together.</h4>
            <p className="text-white/60 text-sm leading-relaxed font-sans">
              I am open to summer internships, contract work, and full-stack software development projects. Get in touch via direct socials or fill out the dashboard console.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="fallable glow-border p-4 bg-white/[0.01] hover:bg-white/[0.02] flex items-center justify-between group transition-all"
                data-cursor="interactive"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-cyber-cyan group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase">{social.name}</p>
                    <p className="text-xs font-bold text-white mt-0.5">{social.value}</p>
                  </div>
                </div>
                <Send className="w-3.5 h-3.5 text-white/30 group-hover:text-cyber-cyan transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Console Form */}
        <div className="fallable lg:col-span-7 bg-[#050512] glow-border p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/5 blur-2xl rounded-full" />
          
          {/* Form Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6 select-none font-mono text-[9px] text-white/30">
            <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-cyber-cyan" /> ENVELOPE_ROUTING_SHELL</span>
            <span>SECURE SSL</span>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-[9px] font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Client Name / ID
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/5 focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,254,0.1)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all"
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[9px] font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Client Email Destination
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-black/40 border border-white/5 focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,254,0.1)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all"
                placeholder="e.g. contact@domain.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[9px] font-mono text-white/40 uppercase tracking-widest mb-1.5">
                Transmission Context
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-black/40 border border-white/5 focus:border-cyber-cyan/50 focus:shadow-[0_0_15px_rgba(0,242,254,0.1)] rounded-lg px-4 py-3 text-xs text-white placeholder-white/20 outline-none transition-all resize-none"
                placeholder="Describe your request..."
                required
              />
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyber-cyan to-electric-blue text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] disabled:opacity-50 disabled:shadow-none transition-all duration-300"
                data-cursor="interactive"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    TRANSMITTING HANDSHAKE...
                  </>
                ) : isSubmitted ? (
                  'TRANSMISSION COMPLETE'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    SEND HANDSHAKE
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Simulated Logs Output Console */}
          <div className="bg-black/80 border border-white/5 rounded-lg p-3.5 font-mono text-[8px] text-white/50 space-y-1.5 text-left mt-6 max-h-24 overflow-y-auto scrollbar-none">
            {terminalLogs.map((log, index) => (
              <p 
                key={index}
                className={
                  log.startsWith('✔') ? 'text-green-400' :
                  log.startsWith('[ERROR]') ? 'text-red-400 font-bold' :
                  log.startsWith('[INPUT') ? 'text-white/30' : 'text-white/60'
                }
              >
                {log}
              </p>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
