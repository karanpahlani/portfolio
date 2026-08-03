"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Karan</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Software Engineer on SoFi&apos;s Home Loans team, with 5+ years at Fetch Rewards as a Senior Software Engineer and Team Lead specializing in scalable, customer-centric backend systems. I drove the multi-year migration of a monolithic Java/MongoDB application to a distributed ecosystem of Go microservices, using a polyglot persistence strategy with PostgreSQL, DynamoDB, and Redis to optimize for performance and cost.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              I believe the best software comes from a deep understanding of the business problem paired with a collaborative, team-oriented approach. I&apos;m always looking for opportunities to mentor teammates, improve engineering processes, and build products with real, lasting impact.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-full">
                <Image
                  src="/karan.png"
                  alt="Karan Pahlani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">🚀 Extreme Scalability</h3>
            <p className="text-muted-foreground">
              Engineered systems to handle over 80,000 RPS (a 10x increase) during Super Bowl ad campaigns, ensuring flawless performance under massive load.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">💰 Cost Optimization</h3>
            <p className="text-muted-foreground">
              Architected a data aggregation service that cut monthly cloud costs by over $30K while simultaneously improving data accuracy for partners.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">⚙️ Developer Velocity</h3>
            <p className="text-muted-foreground">
              Built a self-service authentication platform that empowered 25+ partners to onboard independently, reducing engineering integration time by 90%.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold mb-2">📈 Product Impact</h3>
            <p className="text-muted-foreground">
              Led the development of a universal product catalog that became the central source of truth for product data, boosting offer matching accuracy by 35%.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Languages</h3>
            <p className="text-muted-foreground mb-4">
              Go, Java, Python, TypeScript, React
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Databases</h3>
            <p className="text-muted-foreground mb-4">
              PostgreSQL, DynamoDB, Redis, Snowflake, MongoDB
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Infrastructure & DevOps</h3>
            <p className="text-muted-foreground mb-4">
              Kubernetes, Docker, Kafka, Terraform, CI/CD
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Observability</h3>
            <p className="text-muted-foreground mb-4">
              OpenTelemetry, Grafana, PagerDuty, Hosted Graphite
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}