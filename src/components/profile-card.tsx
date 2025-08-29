"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Github, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

interface ProfileCardProps {
  name: string
  title: string
  description: string
  imageSrc: string
  socialLinks: SocialLink[]
}

export function ProfileCard({
  name,
  title,
  description,
  imageSrc,
  socialLinks
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
    >
      {/* Main Card Rectangle */}
      <div className="bg-[rgb(21,19,18)] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto mb-4 sm:mb-6 relative overflow-hidden rounded-2xl"
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-2"
        >
          {name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-white/70 text-center mb-3 sm:mb-4 font-medium"
        >
          {title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs sm:text-sm lg:text-base text-white/60 text-center mb-6 sm:mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                aria-label={link.label}
              >
                <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {link.icon}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/90 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {link.label}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-white/5 blur-xl" />
    </motion.div>
  )
}

// Default social links
export const defaultSocialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
    href: "https://linkedin.com/in/karanpahlani",
    label: "LinkedIn"
  },
  {
    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
    href: "https://github.com/karanpahlani",
    label: "GitHub"
  },
  {
    icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
    href: "https://www.instagram.com/karanpahlani/",
    label: "Instagram"
  },
  {
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
    href: "mailto:pahlani@gmail.com",
    label: "Email"
  }
]