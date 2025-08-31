"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail, FileText, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "#home", homeHref: "/#home", icon: Home, type: "scroll" as const },
  { name: "About", href: "#about", homeHref: "/#about", icon: User, type: "scroll" as const },
  { name: "Experience", href: "#projects", homeHref: "/#projects", icon: Briefcase, type: "scroll" as const },
  { name: "Resume", href: "/resume", homeHref: "/resume", icon: FileText, type: "link" as const },
  { name: "Contact", href: "#contact", homeHref: "/#contact", icon: Mail, type: "scroll" as const },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])


  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4 sm:px-6">
        {/* Clean Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex items-center gap-8 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 rounded-2xl px-10 py-2 mx-auto w-fit"
        >
          {navItems.map((item) => (
            item.type === "link" ? (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/15 transition-colors duration-200 group"
                title={item.name}
              >
                <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </Link>
            ) : isHomePage ? (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/15 transition-colors duration-200 group"
                title={item.name}
              >
                <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.homeHref}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/15 transition-colors duration-200 group"
                title={item.name}
              >
                <item.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </Link>
            )
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center w-14 h-14 bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 rounded-2xl text-white hover:bg-zinc-800/90 transition-all active:scale-95"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-20 left-4 right-4 sm:left-6 sm:right-6 bg-zinc-900/95 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-4 sm:p-6 z-50 md:hidden shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {item.type === "link" ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 active:bg-white/15 transition-all text-white/80 hover:text-white touch-manipulation min-h-[56px]"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-base font-medium">{item.name}</span>
                      </Link>
                    ) : isHomePage ? (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 active:bg-white/15 transition-all text-white/80 hover:text-white touch-manipulation min-h-[56px] w-full text-left"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-base font-medium">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.homeHref}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/10 active:bg-white/15 transition-all text-white/80 hover:text-white touch-manipulation min-h-[56px]"
                      >
                        <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-xl">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-base font-medium">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}