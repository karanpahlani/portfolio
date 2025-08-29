"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

const projects = [
  {
    id: 1,
    title: "Receipt Processing System",
    description: "Engineered a resilient, asynchronous receipt processing system handling 80,000+ RPS during Super Bowl traffic.",
    technologies: ["Go", "Java", "AWS SQS", "DynamoDB", "Redis"],
    achievements: "10x traffic increase handling, $30K monthly cost savings",
    company: "Fetch Rewards"
  },
  {
    id: 2,
    title: "Universal Product Catalog",
    description: "Architected a universal product catalog using Go microservices with PostgreSQL and DynamoDB.",
    technologies: ["Go", "Java Spring Boot", "PostgreSQL", "DynamoDB", "React"],
    achievements: "35% boost in offer matching accuracy, 60% faster partner data processing",
    company: "Fetch Rewards"
  },
  {
    id: 3,
    title: "Self-Service Partner Platform",
    description: "Developed a comprehensive partner platform with Go authentication microservice (OIDC/SAML) and React dashboard.",
    technologies: ["Go", "OIDC/SAML", "PostgreSQL", "React"],
    achievements: "90% reduction in integration time, 20% boost in engagement",
    company: "Fetch Rewards"
  },
  {
    id: 4,
    title: "Resume Scraping & Scoring Tool",
    description: "Built a full-stack resume scraping and scoring tool that automated candidate sourcing for recruitment processes.",
    technologies: ["React", "Node.js", "Machine Learning", "Web Scraping"],
    achievements: "40% reduction in initial screening time",
    company: "Edammo Inc"
  }
]

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen lg:flex">
      {/* Profile Card */}
      <div className="lg:sticky lg:top-4 lg:h-screen lg:w-96 lg:flex-shrink-0">
        <div className="px-4 lg:px-8 py-10 lg:py-20 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-zinc-900 rounded-3xl p-6 shadow-soft relative overflow-hidden w-full max-w-sm mx-auto lg:max-w-none lg:w-80 lg:h-[85vh] lg:min-h-[650px]"
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
              A Software Engineer who has developed countless innovative solutions.
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
            </div>
          </motion.div>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 lg:ml-8" style={{ maxWidth: '1140px' }}>
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
                Passionate about creating intuitive and engaging experiences. I specialize in transforming ideas into
                beautifully crafted products.
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
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">+6</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">YEARS OF<br/>EXPERIENCE</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">+46</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">PROJECTS<br/>COMPLETED</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2">+20</div>
                <div className="text-xs lg:text-sm text-white/60 leading-tight">WORLDWIDE<br/>CLIENTS</div>
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
                <div className="font-semibold leading-tight text-lg lg:text-xl relative z-10">MICROSERVICES,<br/>SYSTEM DESIGN</div>
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
                <div className="font-semibold leading-tight text-lg lg:text-xl relative z-10">GO, DYNAMODB,<br/>AWS, KUBERNETES</div>
              </button>
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
                Senior Software Engineer with a Master&apos;s degree, specializing in scalable, customer-centric applications. 
                I have successfully driven the architectural evolution from a Java/MongoDB monolith to a distributed system of Go microservices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">Languages & Frameworks</h3>
                <p className="text-white/70 text-sm">
                  Go, Java, Python, JavaScript, TypeScript, React, NodeJS, Ruby on Rails, REST, gRPC
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">Platforms & Architecture</h3>
                <p className="text-white/70 text-sm">
                  AWS (S3, SNS, SQS), Docker, Kubernetes, Kafka, Microservices, Distributed Systems, Terraform
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl p-6 border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">Databases & Tools</h3>
                <p className="text-white/70 text-sm">
                  PostgreSQL, DynamoDB, MongoDB, Redis, Snowflake, CI/CD, Grafana, PagerDuty
                </p>
              </motion.div>
            </div>
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
              <h2 className="display-1 font-extrabold text-white">RECENT</h2>
              <h2 className="display-2 font-extrabold text-white/30 mb-6">PROJECTS</h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="px-3 py-1 rounded-full bg-[var(--accent)] text-zinc-900 text-xs font-semibold">
                      {project.company}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[var(--acid)] mb-3">
                      🎯 {project.achievements}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="display-1 font-extrabold mb-6 text-white">CONTACT</h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Have a project in mind or looking for a senior engineer? I&apos;d love to hear from you. Let&apos;s create something impactful together!
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-3xl p-8 border border-white/10 bg-white/5"
              >
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors text-white placeholder-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors text-white placeholder-white/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors text-white placeholder-white/50"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-colors resize-none text-white placeholder-white/50"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[var(--accent)] text-zinc-900 hover:bg-[var(--accent)]/90 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Let&apos;s Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-white/70">pahlani@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-white/70">(319) 383-5548</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-white/70">Seattle, WA</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://linkedin.com/in/karanpahlani"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[var(--accent)]/20 rounded-full flex items-center justify-center hover:bg-[var(--accent)]/30 transition-colors"
                    >
                      <svg className="w-5 h-5 text-[var(--accent)]" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
