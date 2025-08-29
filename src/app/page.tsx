"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 relative overflow-hidden rounded-full border-4 border-primary/20">
              <Image
                src="/karan.png"
                alt="Karan Pahlani"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Karan Pahlani
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Senior Software Engineer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Senior Software Engineer specializing in scalable, customer-centric applications. 
              Expert in driving architectural evolution from monoliths to distributed microservices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-6 mb-16"
          >
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="border border-gray-200 dark:border-gray-800 hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              href="https://linkedin.com/in/karanpahlani"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:pahlani@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">
              Core competencies in product-focused engineering and distributed systems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              "Go", "Java", "Python", "JavaScript",
              "React", "PostgreSQL", "AWS", "Kubernetes"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold">{skill}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
