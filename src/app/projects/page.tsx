"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Receipt Processing System",
    description: "Engineered a resilient, asynchronous receipt processing system handling 80,000+ RPS during Super Bowl traffic. Built with Java/Go microservices, AWS SQS, DynamoDB, and Redis.",
    technologies: ["Go", "Java", "AWS SQS", "DynamoDB", "Redis"],
    achievements: "10x traffic increase handling, $30K monthly cost savings",
    company: "Fetch Rewards"
  },
  {
    id: 2,
    title: "Universal Product Catalog",
    description: "Architected a universal product catalog using Go microservices with PostgreSQL and DynamoDB. Built Java Spring Batch ingestion pipeline and React dashboard for partner data management.",
    technologies: ["Go", "Java Spring Boot", "PostgreSQL", "DynamoDB", "React"],
    achievements: "35% boost in offer matching accuracy, 60% faster partner data processing",
    company: "Fetch Rewards"
  },
  {
    id: 3,
    title: "Self-Service Partner Platform",
    description: "Developed a comprehensive partner platform with Go authentication microservice (OIDC/SAML) and React dashboard for campaign management and real-time monitoring.",
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

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Key Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Highlighting major engineering achievements and systems I&apos;ve built that delivered significant business impact.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-card rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-32 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-semibold text-sm text-primary">{project.company}</h4>
                <p className="text-xs text-muted-foreground mt-1">Enterprise Project</p>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                  🎯 {project.achievements}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}