"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="w-40 h-40 mx-auto mb-12 relative overflow-hidden rounded-full border-2 border-primary/30">
              <Image
                src="/karan.png"
                alt="Karan Pahlani"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
            >
              <span className="block text-white">KARAN</span>
              <span className="block text-primary">PAHLANI</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
            >
              Senior Software Engineer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light mb-16 leading-relaxed"
            >
              Specializing in scalable, customer-centric applications. Expert in driving architectural evolution from monoliths to distributed microservices.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 min-w-[200px] text-center"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-primary/30 hover:border-primary hover:bg-primary/10 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 min-w-[200px] text-center"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center gap-8"
          >
            <Link
              href="https://linkedin.com/in/karanpahlani"
              className="text-muted-foreground hover:text-primary transition-colors p-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link
              href="mailto:pahlani@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-3"
            >
              <Mail className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              TECHNICAL
              <span className="block text-primary">EXPERTISE</span>
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Core competencies in product-focused engineering and distributed systems architecture
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "Go", "Java", "Python", "JavaScript",
              "React", "PostgreSQL", "AWS", "Kubernetes"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted/20 p-8 rounded-2xl border border-border/50 text-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg text-white">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
