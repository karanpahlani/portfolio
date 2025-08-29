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
              Senior Software Engineer with a Master&apos;s degree, specializing in scalable, customer-centric applications. I have successfully driven the architectural evolution from a Java/MongoDB monolith to a distributed system of Go microservices.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Experienced in A/B testing and data-driven optimization to improve user acquisition and deliver business-critical outcomes. Currently at Fetch Rewards, I&apos;ve engineered systems handling over 80,000 RPS and led teams building universal product catalogs.
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
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Languages & Frameworks</h3>
            <p className="text-muted-foreground mb-4">
              Go, Java, Python, JavaScript, TypeScript, React, NodeJS, Ruby on Rails, REST, gRPC
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Platforms & Architecture</h3>
            <p className="text-muted-foreground mb-4">
              AWS (S3, SNS, SQS), Docker, Kubernetes, Kafka, Microservices, Distributed Systems, Terraform
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Databases & Tools</h3>
            <p className="text-muted-foreground mb-4">
              PostgreSQL, DynamoDB, MongoDB, Redis, Snowflake, CI/CD, Grafana, PagerDuty
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}