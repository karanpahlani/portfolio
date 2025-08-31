"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "🏈 Super Bowl Traffic Resilience",
    description: "Led architectural transformation from synchronous to asynchronous receipt processing during Fetch's Super Bowl ad campaign. Built resilient distributed system using Kafka & SQS replay mechanisms to handle 13x traffic surge (6,000 RPS → 80K RPS).",
    technologies: ["Go", "Kafka", "AWS SQS", "DynamoDB", "Real-time Monitoring"],
    achievements: "13x traffic scaling during Super Bowl ad, Zero downtime, Real-time incident response",
    company: "Fetch Rewards",
    category: "superbowl"
  },
  {
    id: 2,
    title: "🧾 eReceipts DigiDetector Platform",
    description: "Architected ML-powered receipt processing platform handling 80M+ weekly receipts from Amazon, Walmart, Target, Gmail, Outlook. Built Python microservices with SageMaker ML models achieving 97% item identification accuracy.",
    technologies: ["Python", "AWS SageMaker", "Go Microservices", "ML Models", "Email Integration"],
    achievements: "97% accuracy, 80M+ weekly receipts, 100x duplicate blocking improvement, 99.99% SLA",
    company: "Fetch Rewards",
    category: "digidetector"
  },
  {
    id: 3,
    title: "📋 Universal Product Catalog",
    description: "Engineered million-product catalog with fuzzy matching algorithms and FIDO unique identifiers (solving UPC length/format issues). Multi-source ingestion (XLSX, CSV, web scraping) with real-time updates and ML-powered deduplication.",
    technologies: ["Go", "Java Spring Boot", "PostgreSQL", "DynamoDB", "Fuzzy Matching", "Web Scraping"],
    achievements: "35% better receipt matching, 60% faster processing, 20% user engagement boost, revenue increase",
    company: "Fetch Rewards",
    category: "catalog"
  },
  {
    id: 4,
    title: "🤝 Self-Service Partner Platform",
    description: "Architected business.fetch.com - a comprehensive B2B platform enabling major CPGs (Pepsi, Kimberly Clark, Unilever) to self-service campaigns. Built plug-and-play Go microservice for external IDPs (Okta, PingID) with real-time Grafana monitoring.",
    technologies: ["Go", "OIDC/SAML", "Okta/PingID", "React", "Grafana", "PostgreSQL"],
    achievements: "20+ enterprise partners onboarded, Pepsi doubled ad spend, 90% faster integration",
    company: "Fetch Rewards",
    category: "platform"
  },
  {
    id: 5,
    title: "Resume Scraping & Scoring Tool",
    description: "Built a full-stack resume scraping and scoring tool that automated candidate sourcing for recruitment processes.",
    technologies: ["React", "Node.js", "Machine Learning", "Web Scraping"],
    achievements: "40% reduction in initial screening time",
    company: "Edammo Inc"
  }
]

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      honeypot: formData.get('honeypot') as string
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      // Always try to parse as JSON since our API now always returns JSON
      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send message')
      }

      // Success
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      // Handle network errors and JSON parsing errors
      if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
        setError('Network error. Please check your connection and try again.')
      } else if (err instanceof SyntaxError) {
        setError('Server error. Please try again later.')
      } else {
        setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let&apos;s build something amazing together. Open to Senior Engineer, Staff Engineer, and Technical Leadership roles.
          </p>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#FF6A3D]" />
            <a href="mailto:pahlani@gmail.com" className="text-white/80 hover:text-white transition-colors">
              pahlani@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#FF6A3D]" />
            <a href="tel:+13193835548" className="text-white/80 hover:text-white transition-colors">
              (319) 383-5548
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#FF6A3D]" />
            <span className="text-white/80">Seattle, WA</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#FF6A3D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <a href="https://calendly.com/pahlani/30min" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              Schedule a Call
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field for spam protection - hidden from users */}
              <input
                type="text"
                name="honeypot"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF6A3D] focus:border-[#FF6A3D] transition-all text-white placeholder-white/50 hover:border-white/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF6A3D] focus:border-[#FF6A3D] transition-all text-white placeholder-white/50 hover:border-white/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-3 text-white">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FF6A3D] focus:border-[#FF6A3D] transition-all text-white placeholder-white/50 hover:border-white/30"
                  placeholder="Project Discussion"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all resize-none text-white placeholder-white/50 hover:border-white/30"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6A3D] text-zinc-900 hover:bg-[#FF6A3D]/90 px-6 py-4 rounded-xl font-bold transition-all hover:transform hover:scale-[1.02] focus:ring-4 focus:ring-[#FF6A3D]/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
              
              {/* Success message */}
              {submitted && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <p className="text-green-300 text-center font-medium">
                    ✓ Your message has been sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Error message */}
              {error && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                  <p className="text-red-300 text-center">
                    ✗ {error}
                  </p>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen lg:flex lg:justify-center lg:max-w-7xl lg:mx-auto">
      {/* Profile Card */}
      <div className="lg:sticky lg:top-4 lg:h-screen lg:w-96 xl:w-[400px] 2xl:w-[420px] lg:flex-shrink-0">
        <div className="px-4 lg:px-8 xl:px-10 2xl:px-12 py-10 lg:py-16 h-full flex items-start lg:items-center lg:justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-zinc-900 rounded-3xl p-6 shadow-soft relative overflow-hidden w-full max-w-sm mx-auto lg:max-w-none lg:w-80 lg:h-fit lg:min-h-[500px] lg:max-h-[85vh] xl:max-h-[80vh] 2xl:max-h-[75vh]"
          >
            {/* Dotted curve decoration */}
            <svg className="absolute -left-4 top-8 w-40 h-40 rotate-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="curve" d="M10 150 C70 20, 130 20, 190 150" stroke="#FF6A3D" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            
            <div className="rounded-2xl overflow-hidden mb-8 relative z-10">
              <div className="aspect-[4/3] grid place-items-center bg-gradient-to-br from-[#FF5C00] via-[#FF6A3D] to-[#B32600]">
                <Image
                  src="/karan-headshot.png"
                  alt="Karan Pahlani"
                  width={320}
                  height={240}
                  className="h-full w-full object-cover scale-125 object-top"
                  priority
                />
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-10 relative z-10 text-center whitespace-nowrap">Karan Pahlani</h2>
            <p className="mb-8 text-sm lg:text-base text-zinc-600 leading-relaxed relative z-10 text-center">
              Software Engineer passionate about building scalable solutions and creating meaningful impact.
            </p>
            
            {/* Socials */}
            <div className="flex items-center justify-center gap-4 text-[#FF6A3D] relative z-10">
              {/* GitHub */}
              <Link href="https://github.com/karanpahlani" target="_blank" rel="noopener noreferrer" className="hover:text-[#E55A33] transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              
              {/* LinkedIn */}
              <Link href="https://linkedin.com/in/karanpahlani" target="_blank" rel="noopener noreferrer" className="hover:text-[#E55A33] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
              
              {/* Instagram */}
              <Link href="https://instagram.com/karanpahlani" target="_blank" rel="noopener noreferrer" className="hover:text-[#E55A33] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.25-.95a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z"/>
                </svg>
              </Link>
              
              {/* Gmail */}
              <Link href="mailto:pahlani@gmail.com" className="hover:text-[#E55A33] transition-all hover:scale-110" aria-label="Gmail">
                <svg className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </Link>
              
              {/* Calendly */}
              <Link href="https://calendly.com/pahlani/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[#E55A33] transition-all hover:scale-110" aria-label="Schedule a Call">
                <svg className="w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 lg:ml-12 xl:ml-16 2xl:ml-20 lg:max-w-4xl">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
          <div className="w-full max-w-5xl mx-auto">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12 pt-16 lg:pt-20"
            >
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-extrabold tracking-tight text-white leading-none">SOFTWARE</div>
              <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px] font-extrabold tracking-tight text-white/20 mb-8 leading-none">ENGINEER</div>
              <p className="max-w-3xl text-lg lg:text-xl text-white/70 leading-relaxed">
                Senior Software Engineer & Technical Leader who scaled Fetch Rewards from 1M to 12M+ monthly active users. Architected resilient systems handling 80K+ RPS, led engineering pods, and delivered $30K monthly cost savings through innovative solutions.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 grid grid-cols-3 gap-4 lg:gap-6"
            >
              <div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">6+</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">YEARS OF<br/>EXPERIENCE</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">12M</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">MONTHLY<br/>ACTIVE USERS</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">80M</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">WEEKLY<br/>RECEIPTS</div>
              </div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            >
              {/* Orange card */}
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative rounded-3xl p-6 lg:p-8 bg-[#FF6A3D] text-zinc-900 overflow-hidden hover:bg-[#FF6A3D]/90 transition-all"
              >
                <svg className="absolute right-0 top-0 opacity-30" width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 90 C50 30, 150 150, 200 70" stroke="#000" strokeOpacity=".15" strokeWidth="16" fill="none"/>
                  <path d="M0 60 C60 10, 140 130, 200 40" stroke="#000" strokeOpacity=".12" strokeWidth="16" fill="none"/>
                </svg>
                <div className="flex items-center justify-between gap-4 mb-8 lg:mb-10 relative z-10">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-zinc-900/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900/80">
                      <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/>
                    </svg>
                  </div>
                  <div className="h-9 w-9 grid place-items-center rounded-xl border border-zinc-900/20 group-hover:bg-zinc-900/10 transition">
                    <ArrowDown className="w-4 h-4 rotate-45" />
                  </div>
                </div>
                <div className="font-semibold leading-tight text-lg lg:text-xl relative z-10">PRODUCT-FOCUSED<br/>DATA-DRIVEN<br/>APPLIED AI</div>
              </button>

              {/* Green card */}
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative rounded-3xl p-6 lg:p-8 bg-[#C9FF00] text-zinc-900 overflow-hidden hover:bg-[#C9FF00]/90 transition-all"
              >
                <svg className="absolute -right-10 -top-6 opacity-30" width="260" height="160" viewBox="0 0 260 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 30 L50 60 L100 20 L150 70 L200 30 L250 80" stroke="#000" strokeOpacity=".12" strokeWidth="18" fill="none"/>
                </svg>
                <div className="flex items-center justify-between gap-4 mb-8 lg:mb-10 relative z-10">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-zinc-900/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900/80">
                      <path d="M4 4h7v7H4V4Zm0 9h7v7H4v-7Zm9-9h7v7h-7V4Zm0 9h7v7h-7v-7Z"/>
                    </svg>
                  </div>
                  <div className="h-9 w-9 grid place-items-center rounded-xl border border-zinc-900/20 group-hover:bg-zinc-900/10 transition">
                    <ArrowDown className="w-4 h-4 rotate-45" />
                  </div>
                </div>
                <div className="font-semibold leading-tight text-lg lg:text-xl relative z-10">AWS • KUBERNETES<br/>MICROSERVICES<br/>DISTRIBUTED SYSTEMS</div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Super Bowl Impact Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white flex items-center justify-center gap-4">
                🏈 SUPER BOWL IMPACT
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Led the technical transformation that enabled Fetch Rewards to handle unprecedented Super Bowl ad traffic surge while maintaining zero downtime and delivering seamless user experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-8 border border-white/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl font-extrabold text-white mb-2">13x</div>
                  <div className="text-sm text-white/60">TRAFFIC SURGE HANDLED</div>
                  <div className="text-xs text-white/50 mt-1">6K RPS → 80K RPS</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">🎯 Lead Architect Role</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Built resilience using Kafka & SQS replay mechanisms</li>
                  <li>• Transformed synchronous to asynchronous processing</li>
                  <li>• Orchestrated infrastructure scaling pre/post event</li>
                  <li>• Provided real-time monitoring & incident response</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-8 border border-white/20 bg-gradient-to-br from-green-500/10 to-blue-500/10"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl font-extrabold text-white mb-2">0</div>
                  <div className="text-sm text-white/60">MINUTES DOWNTIME</div>
                  <div className="text-xs text-white/50 mt-1">During peak traffic</div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">⚡ Technical Innovation</h3>
                <ul className="text-white/70 text-sm space-y-2">
                  <li>• Months of preparation & system optimization</li>
                  <li>• Email & direct receipt integration scaling during ad</li>
                  <li>• Provider connectivity (Amazon, Gmail, Target, Walmart)</li>
                  <li>• Performance monitoring during live event</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DigiDetector Platform Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-white flex items-center justify-center gap-4">
                🧾 DIGIDETECTOR PLATFORM
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Engineered ML-powered receipt processing platform serving millions of users with industry-leading accuracy and scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-1">97%</div>
                <div className="text-xs text-white/60">ACCURACY RATE</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-1">80M</div>
                <div className="text-xs text-white/60">WEEKLY RECEIPTS</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-1">100x</div>
                <div className="text-xs text-white/60">DUPLICATE BLOCKING</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-1">99.99%</div>
                <div className="text-xs text-white/60">SLA MAINTAINED</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl p-8 border border-white/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">🎯 Technical Architecture</h3>
                  <ul className="text-white/70 space-y-2 mb-6">
                    <li>• AWS SageMaker ML models for item identification</li>
                    <li>• Python microservices for receipt processing</li>
                    <li>• Go microservices for high-performance APIs</li>
                    <li>• Email integration (Gmail, Outlook, Yahoo)</li>
                    <li>• Direct retailer APIs (Amazon, Walmart, Target)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">🚀 Business Impact</h3>
                  <ul className="text-white/70 space-y-2 mb-6">
                    <li>• 97% accuracy in item identification</li>
                    <li>• Processing 80M+ receipts weekly</li>
                    <li>• 100x improvement in duplicate detection</li>
                    <li>• Maintained 99.99% reliability SLA</li>
                    <li>• Enabled platform scaling to 12M+ MAU</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="display-1 font-extrabold mb-6 text-white">ABOUT</h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Technical Leader & Senior Software Engineer who scaled consumer platforms from 1M to 12M+ monthly active users. 
                Led engineering pods, mentored junior developers, and drove the architectural evolution from Java/MongoDB monoliths to distributed Go microservices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  💻 Core Technologies
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-white font-medium">Backend:</span>
                    <span className="text-white/70 ml-2">Go, Java, Python, Node.js, Ruby on Rails</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">Frontend:</span>
                    <span className="text-white/70 ml-2">React, TypeScript, JavaScript</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">APIs:</span>
                    <span className="text-white/70 ml-2">REST, gRPC, GraphQL</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                  ☁️ Infrastructure & Data
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-white font-medium">Cloud:</span>
                    <span className="text-white/70 ml-2">AWS (SQS, S3, SageMaker), Docker, Kubernetes</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">Databases:</span>
                    <span className="text-white/70 ml-2">PostgreSQL, DynamoDB, MongoDB, Redis</span>
                  </div>
                  <div>
                    <span className="text-white font-medium">Messaging:</span>
                    <span className="text-white/70 ml-2">Kafka, AWS SQS, Event-Driven Architecture</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl p-8 border border-white/20 bg-gradient-to-r from-orange-500/10 to-red-500/10"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                👥 Leadership & Impact
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Led small engineering pods and drove cross-team initiatives, mentoring junior engineers and setting coding/design standards. 
                Focused on setting clear goals, building trust, and empowering engineers to take ownership rather than micromanaging.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-white">$30K</div>
                  <div className="text-xs text-white/60">Monthly Savings Achieved</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-white">1M→12M</div>
                  <div className="text-xs text-white/60">User Growth Enabled</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-white/60">Engineers Mentored</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="display-1 font-extrabold text-white">WORK</h2>
              <h2 className="display-2 font-extrabold text-white/30 mb-6">EXPERIENCE</h2>
            </motion.div>
            
            {/* Fetch Rewards Featured Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="rounded-3xl p-8 border border-white/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 relative overflow-hidden">
                {/* Fetch Rewards Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2">
                      <svg height="42" viewBox="0 0 104 65" fill="#FFA900" xmlns="http://www.w3.org/2000/svg">
                        <path d="M103.776 43.1256C103.516 39.5207 101.823 35.2209 92.0128 38.0006C86.934 39.4339 82.2894 39.5207 80.2492 37.5229C80.0039 37.24 79.7859 36.9346 79.5981 36.6108C78.8167 35.0472 79.164 32.7453 81.0739 29.4878C81.4905 28.5858 82.1686 27.83 83.0202 27.3188C83.8717 26.8076 84.8574 26.5645 85.8488 26.6213C87.4115 26.6213 89.2347 26.9253 91.4051 26.8819C98.2202 26.8819 100.825 22.5386 100.564 18.5429C100.564 17.3267 98.9147 17.7176 95.9195 16.9793C92.9244 16.2409 90.5803 16.6318 90.016 12.636C89.6557 11.4566 88.9502 10.4123 87.9907 9.63808C87.0312 8.86386 85.8618 8.39525 84.6334 8.29279C82.2459 7.90189 77.1238 5.46968 73.3039 8.50995L70.0048 7.07668C67.791 6.55549 67.9647 8.07562 65.664 8.81398C63.3634 9.55233 60.1512 7.72817 61.3232 10.1604C62.0424 11.5866 63.245 12.7104 64.7162 13.331C66.1873 13.9516 67.8311 14.0286 69.3537 13.5481C67.0097 25.4052 55.5933 28.098 46.1303 27.7071C43.1046 27.6015 40.13 26.8948 37.3798 25.6282C34.6295 24.3616 32.1585 22.5604 30.1104 20.3293C28.0624 18.0983 26.4783 15.482 25.4503 12.6326C24.4223 9.78332 23.9709 6.75788 24.1224 3.73238C24.1224 0.0840462 23.0372 -0.958334 21.9086 0.909263C21.4685 1.71764 21.1331 2.57872 20.9102 3.47178C20.6931 3.81924 20.6931 4.25357 20.6931 4.68789C20.0833 8.90588 20.5879 13.2101 22.1567 17.1724C23.7255 21.1347 26.3038 24.617 29.6352 27.2728C27.6625 29.0892 26.2982 31.4705 25.7285 34.0917C25.346 35.9543 25.346 37.8753 25.7285 39.7379L25.9455 40.5197C26.7703 44.4286 19.4777 47.0346 16.3089 47.5558H15.6144C15.1814 47.5993 14.7451 47.5993 14.3121 47.5558C13.8505 47.607 13.3847 47.607 12.9231 47.5558C11.0131 47.5558 9.62403 47.5558 8.58224 52.4636C6.84591 59.1088 1.81056 57.6321 0.595127 59.4997C-1.27143 62.54 1.55011 64.7985 4.93595 64.9722C6.10472 65.066 7.28038 64.9219 8.39199 64.5487C9.5036 64.1755 10.5281 63.5808 11.4038 62.8006C17.6111 57.1978 14.616 54.7221 20.7799 55.113C21.6047 55.113 22.5163 55.113 23.6449 55.417C30.46 56.3291 35.3217 57.719 42.05 50.4657C42.4125 49.9399 42.8191 49.4458 43.2654 48.989C43.6171 48.6971 44.0126 48.4626 44.4374 48.2941C44.838 48.2085 45.2522 48.2085 45.6528 48.2941C50.3987 50.3964 55.5776 51.3345 60.7589 51.0304C63.3542 50.0888 65.7211 48.6086 67.7042 46.6871C67.7042 46.6871 68.746 45.775 69.4405 46.6871C70.1351 47.5992 71.2203 49.3799 72.2187 50.4223C74.5627 52.9848 74.6061 51.9424 79.5981 49.9011L81.4646 48.989C94.4871 44.2549 94.2266 42.7347 96.7877 47.9032C97.2652 48.8587 98.9581 48.9456 100.564 48.2941C101.617 47.8922 102.516 47.1674 103.131 46.2234C103.747 45.2795 104.049 44.1647 103.993 43.0388"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Fetch Rewards</h3>
                      <p className="text-white/60">5 Years of Professional Growth • July 2020 - Present</p>
                      <a href="https://fetch.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                        fetch.com ↗
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-white mb-1">80K+</div>
                    <div className="text-xs text-white/60">RPS Handled</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-white mb-1">$30K</div>
                    <div className="text-xs text-white/60">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-white mb-1">90%</div>
                    <div className="text-xs text-white/60">Faster Integration</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-white mb-1">1M→12M</div>
                    <div className="text-xs text-white/60">Users Scaled</div>
                  </div>
                </div>
                
                {/* Featured Projects Grid */}
                <div className="space-y-6">
                  {/* Super Bowl & DigiDetector - Featured */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {projects.filter(p => p.category === 'superbowl' || p.category === 'digidetector').map((project) => (
                      <div
                        key={project.id}
                        className="rounded-2xl p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
                      >
                        <h4 className="text-xl font-bold mb-3 text-white">{project.title}</h4>
                        <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="mb-4 p-3 bg-white/10 rounded-lg">
                          <p className="text-sm font-medium text-purple-200 mb-1">
                            🚀 Impact:
                          </p>
                          <p className="text-xs text-purple-100">{project.achievements}</p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-purple-500/30 text-purple-100 px-2 py-1 rounded text-xs font-medium border border-purple-400/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Core Platform Projects */}
                  <div className="space-y-8">
                    {/* Partner Platform */}
                    {projects.filter(p => p.category === 'platform').map((project) => (
                      <div key={project.id} className="rounded-2xl p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                          <a 
                            href="https://business.fetch.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-4 py-2 bg-green-500/20 text-green-200 rounded-lg hover:bg-green-500/30 transition-colors text-sm font-medium border border-green-400/30"
                          >
                            business.fetch.com ↗
                          </a>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">🏢 Enterprise Partners</h5>
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium">Pepsi</span>
                              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium">Kimberly Clark</span>
                              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium">Unilever</span>
                              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium">+17 More</span>
                            </div>
                            <p className="text-white/70 text-sm">{project.description}</p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="p-4 bg-white/10 rounded-lg">
                              <div className="text-3xl font-bold text-white mb-1">2x</div>
                              <div className="text-sm text-green-200">Pepsi Ad Spend Increase</div>
                            </div>
                            <div className="p-4 bg-white/10 rounded-lg">
                              <div className="text-3xl font-bold text-white mb-1">20+</div>
                              <div className="text-sm text-green-200">External IDP Integrations</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-green-300 mb-3">
                            🎯 Impact: {project.achievements}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-green-500/20 text-green-200 px-2 py-1 rounded text-xs font-medium border border-green-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Product Catalog */}
                    {projects.filter(p => p.category === 'catalog').map((project) => (
                      <div key={project.id} className="rounded-2xl p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30">
                        <h4 className="text-2xl font-bold text-white mb-6">{project.title}</h4>
                        
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                          <div className="text-center p-4 bg-white/10 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">Millions</div>
                            <div className="text-xs text-blue-200">Products Catalogued</div>
                          </div>
                          <div className="text-center p-4 bg-white/10 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">Real-time</div>
                            <div className="text-xs text-blue-200">Updates & Ingestion</div>
                          </div>
                          <div className="text-center p-4 bg-white/10 rounded-xl">
                            <div className="text-3xl font-bold text-white mb-1">FIDO</div>
                            <div className="text-xs text-blue-200">Unique ID System</div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">🔧 Technical Innovation</h5>
                            <ul className="text-white/70 text-sm space-y-2">
                              <li>• Multi-source ingestion (XLSX, CSV, web scraping)</li>
                              <li>• Fuzzy matching algorithms for product identification</li>
                              <li>• ML-powered deduplication & consolidation</li>
                              <li>• FIDO system solving UPC length/format issues</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">📊 Business Impact</h5>
                            <ul className="text-white/70 text-sm space-y-2">
                              <li>• 35% improvement in receipt-to-product matching</li>
                              <li>• 60% faster partner data processing pipeline</li>
                              <li>• 20% user engagement boost via search/recommendations</li>
                              <li>• Enhanced partner confidence & reporting accuracy</li>
                              <li>• Direct revenue increase through better matching</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm font-medium text-blue-300 mb-3">
                            🎯 Results: {project.achievements}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded text-xs font-medium border border-blue-400/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Other Projects */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {projects.filter(p => p.company === 'Fetch Rewards' && !p.category).map((project) => (
                        <div key={project.id} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <h4 className="text-lg font-semibold mb-3 text-white">{project.title}</h4>
                          <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                          
                          <div className="mb-4">
                            <p className="text-sm font-medium text-purple-300 mb-3">
                              🎯 {project.achievements}
                            </p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-xs font-medium border border-purple-400/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Key Technologies & Consumer Impact */}
                <div className="mt-8 p-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl border border-white/20">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    🎆 Consumer-First Engineering Excellence
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">👥 Consumer Impact</h5>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Scaled platform from 1M → 12M monthly active users</li>
                        <li>• Processed 80M+ receipts weekly with 99.99% reliability</li>
                        <li>• Enabled seamless receipt scanning during Super Bowl</li>
                        <li>• Delivered 97% accuracy in receipt item identification</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">🔧 Technical Excellence</h5>
                      <ul className="text-white/70 text-sm space-y-1">
                        <li>• Monolith → Microservices transformation</li>
                        <li>• Event-driven architecture with Kafka & SQS</li>
                        <li>• ML-powered processing with AWS SageMaker</li>
                        <li>• Multi-provider integrations (Amazon, Gmail, Target)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">Go Microservices</span>
                    <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm font-medium">AWS SageMaker</span>
                    <span className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-sm font-medium">Kafka + SQS</span>
                    <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm font-medium">Python ML</span>
                    <span className="bg-pink-500/20 text-pink-200 px-3 py-1 rounded-full text-sm font-medium">Receipt Processing</span>
                    <span className="bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full text-sm font-medium">Partner APIs</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Previous Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl p-8 border border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
            >
              <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                💼 Previous Experience & Innovation
              </h4>
              {projects.filter(p => p.company !== 'Fetch Rewards').map((project) => (
                <div key={project.id} className="border-l-4 border-orange-500 pl-6 mb-6 last:mb-0 bg-white/5 rounded-r-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <h5 className="text-xl font-semibold text-white">🤖 {project.title}</h5>
                    <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-200 text-xs font-medium border border-orange-400/30">
                      {project.company}
                    </span>
                  </div>
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="mb-4 p-3 bg-white/10 rounded-lg">
                    <p className="text-sm font-medium text-green-300">
                      🚀 Business Impact: {project.achievements}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded text-xs font-medium border border-indigo-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Career Progression Highlight */}
              <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  📈 Career Trajectory
                </h5>
                <p className="text-white/70 text-sm leading-relaxed">
                  Progressed from building recruitment automation tools to leading large-scale consumer platforms. 
                  Consistently delivered measurable business impact through technical innovation and leadership.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />

        {/* Calendly Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Schedule a Call</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Ready to discuss your next project or explore opportunities? Book a time that works for you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="calendly-inline-widget" data-url="https://calendly.com/pahlani/30min?background_color=0a0a0a&text_color=ffffff&primary_color=ff6a3d" style={{ minWidth: '320px', height: '500px' }}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </motion.div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-white/70 text-sm font-medium mr-2">Follow me:</span>
                <Link 
                  href="https://github.com/karanpahlani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent)]/20 hover:text-[var(--accent)] transition-all duration-300 text-white/70 group"
                  title="GitHub"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>

                <Link 
                  href="https://linkedin.com/in/karanpahlani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent)]/20 hover:text-[var(--accent)] transition-all duration-300 text-white/70 group"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>

                <Link 
                  href="https://instagram.com/karanpahlani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--accent)]/20 hover:text-[var(--accent)] transition-all duration-300 text-white/70 group"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.25-.95a.95.95 0 1 1-1.9 0 .95.95 0 0 1 1.9 0Z"/>
                  </svg>
                </Link>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-white/50 text-sm mb-1">© 2024 Karan Pahlani</p>
                <p className="text-white/30 text-xs">Built with Next.js & Tailwind CSS</p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}
