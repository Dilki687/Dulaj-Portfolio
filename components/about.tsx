"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PenToolIcon as Tool, Award, Code, Wrench, MicroscopeIcon as Microchip } from "lucide-react"
import SkillCategory from "./skill-category"

export default function About() {
  const tools = ["MPLAB", "PlatformIO", "VS Code", "SquareLine Studio", "Logic Analyzers"]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const technicalSkills = [
    { name: "ESP32", percentage: 95 },
    { name: "STM32", percentage: 90 },
    { name: "Arduino", percentage: 98 },
    { name: "FPGA", percentage: 85 },
  ]

  const programmingSkills = [
    { name: "C/C++", percentage: 92 },
    { name: "LVGL", percentage: 88 },
    { name: "FreeRTOS", percentage: 85 },
    { name: "Python", percentage: 75 },
  ]

  const designSkills = [
    { name: "KiCad", percentage: 90 },
    { name: "EasyEDA", percentage: 95 },
    { name: "PCB Design", percentage: 92 },
    { name: "Circuit Design", percentage: 88 },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 dark:text-white">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-slate-300 dark:text-slate-200 leading-relaxed">
              Dulaj Bopitiya is an innovative and detail-oriented Electrical and Electronics Engineering undergraduate
              with a passion for embedded systems, PCB design, robotics, and IoT development. He excels in using ESP32,
              STM32, Arduino, and FPGA platforms and has worked on real-world systems like automation platforms,
              biomedical wearables, and robotic controllers.
            </p>
            <p className="text-slate-300 dark:text-slate-200 leading-relaxed">
              Dulaj blends modern tools like LVGL, FreeRTOS, UART/JSON protocols, and OTA systems to build scalable
              smart systems.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-slate-700/50 dark:bg-slate-800/50 border-slate-600 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Tool className="text-cyan-400 mr-2" size={20} />
                    <h3 className="text-xl font-semibold text-slate-100 dark:text-white">Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <motion.div key={tool} variants={item}>
                        <Badge
                          variant="outline"
                          className="bg-slate-800/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-800 hover:bg-slate-700 dark:hover:bg-slate-600"
                        >
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="bg-slate-700/50 dark:bg-slate-800/50 border-slate-600 dark:border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Award className="text-cyan-400 mr-2" size={20} />
                    <h3 className="text-xl font-semibold text-slate-100 dark:text-white">Certifications</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <motion.div variants={item}>
                      <Badge
                        variant="outline"
                        className="bg-slate-800/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-800 hover:bg-slate-700 dark:hover:bg-slate-600"
                      >
                        Embedded Systems
                      </Badge>
                    </motion.div>
                    <motion.div variants={item}>
                      <Badge
                        variant="outline"
                        className="bg-slate-800/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-800 hover:bg-slate-700 dark:hover:bg-slate-600"
                      >
                        PCB Design
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <SkillCategory
              title="Microcontrollers & Hardware"
              icon={<Microchip className="h-6 w-6 text-cyan-400" />}
              skills={technicalSkills}
              delay={0.1}
              color="cyan"
            />

            <SkillCategory
              title="Programming & Firmware"
              icon={<Code className="h-6 w-6 text-teal-400" />}
              skills={programmingSkills}
              delay={0.3}
              color="teal"
            />

            <SkillCategory
              title="Design & Tools"
              icon={<Wrench className="h-6 w-6 text-blue-400" />}
              skills={designSkills}
              delay={0.5}
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
