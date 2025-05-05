"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, CircuitBoardIcon as Circuit, Layers, Settings } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Cpu className="h-12 w-12 text-cyan-400" />,
      title: "PCB Design",
      description:
        "Custom PCB design for embedded systems, from simple circuits to complex multi-layer boards using KiCad and EasyEDA.",
    },
    {
      icon: <Circuit className="h-12 w-12 text-cyan-400" />,
      title: "Embedded Firmware Development",
      description:
        "Development of efficient and reliable firmware for microcontrollers including ESP32, STM32, and Arduino platforms.",
    },
    {
      icon: <Layers className="h-12 w-12 text-cyan-400" />,
      title: "IoT Systems Integration",
      description:
        "End-to-end IoT solutions with seamless integration of hardware, firmware, and cloud services for connected devices.",
    },
    {
      icon: <Settings className="h-12 w-12 text-cyan-400" />,
      title: "Automation Solutions",
      description:
        "Custom automation systems for industrial and agricultural applications with remote monitoring and control capabilities.",
    },
  ]

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

  return (
    <section id="services" className="py-20 bg-slate-800/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 dark:text-white">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-slate-300 dark:text-slate-200 max-w-2xl mx-auto">
            Specialized services in embedded systems, firmware development, and hardware design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="bg-slate-700/30 dark:bg-slate-800/30 border-slate-600 dark:border-slate-700 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <motion.div
                    className="mb-4"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-cyan-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 dark:text-slate-200">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
