"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface SkillProgressProps {
  name: string
  percentage: number
  color?: string
  delay?: number
}

export default function SkillProgress({ name, percentage, color = "cyan", delay = 0 }: SkillProgressProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const currentElement = document.getElementById(`skill-${name.replace(/\s+/g, "-").toLowerCase()}`)
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [name])

  const colorClasses = {
    cyan: "bg-cyan-500 dark:bg-cyan-400",
    blue: "bg-blue-500 dark:bg-blue-400",
    teal: "bg-teal-500 dark:bg-teal-400",
    green: "bg-green-500 dark:bg-green-400",
    purple: "bg-purple-500 dark:bg-purple-400",
  }

  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan

  return (
    <div id={`skill-${name.replace(/\s+/g, "-").toLowerCase()}`} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-300 dark:text-slate-200">{name}</span>
        <span className="text-sm font-medium text-slate-300 dark:text-slate-200">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-700 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${colorClass}`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
