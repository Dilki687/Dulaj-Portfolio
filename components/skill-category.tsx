"use client"

import type React from "react"

import { motion } from "framer-motion"
import SkillProgress from "./skill-progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  percentage: number
}

interface SkillCategoryProps {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  delay?: number
  color?: string
}

export default function SkillCategory({ title, icon, skills, delay = 0, color = "cyan" }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-slate-800/50 dark:bg-slate-800/50 border-slate-700 dark:border-slate-700 shadow-lg hover:shadow-cyan-900/20 dark:hover:shadow-cyan-900/10 transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <CardTitle className="text-xl text-slate-100 dark:text-white">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {skills.map((skill, index) => (
            <SkillProgress
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={delay + index * 0.1}
              color={color}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
