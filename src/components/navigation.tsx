"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Floating Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3"
      >
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="flex items-center justify-center w-12 h-12 rounded-xl hover:bg-white/20 transition-all duration-300 group"
            title={item.name}
          >
            <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </button>
        ))}
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute top-14 left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition-all text-white/70 hover:text-white"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}