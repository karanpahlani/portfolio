"use client"

import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function Resume() {
  useEffect(() => {
    // Redirect to the static HTML file for exact formatting
    window.location.href = '/resume.html'
  }, [])

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Redirecting to Resume...</h1>
          <p className="text-white/70">
            If you are not automatically redirected, 
            <a href="/resume.html" className="text-[#FF6A3D] hover:underline ml-1">
              click here
            </a>
          </p>
        </div>
      </div>
    </>
  )
}