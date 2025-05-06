"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, X } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  featured: boolean
  details: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Poultry Farming Automation System",
      description: "A fully integrated automation system for poultry farms with dual ESP32 architecture.",
      image: "/images/projects/poultry-automation.png",
      tech: ["ESP32", "LVGL", "UART", "JSON", "OTA", "FreeRTOS"],
      featured: true,
      details:
        "This project is a fully integrated poultry farming automation system designed to optimize feeding schedules, monitor environmental conditions, and provide real-time remote control through a smart, user-friendly interface. The system leverages modern embedded technologies, wireless communication, and graphical UI frameworks to streamline poultry farm management and enhance reliability. It features dual ESP32 architecture, real-time communication via UART + JSON, Wi-Fi enabled OTA updates, time-based feeding control, motorized feeding mechanism, and environmental monitoring capabilities.",
    },
    {
      id: 2,
      title: "Micromouse v1",
      description: "First generation maze-solving robot with dual ATmega328 setup.",
      image: "/images/projects/micromouse-v1.png",
      tech: ["ATmega328", "IR Sensors", "Motor Drivers", "EasyEDA"],
      featured: true,
      details:
        "This is the first Micromouse robot developed by me and my team as part of our embedded systems and robotics initiative. I was primarily responsible for designing the main hardware architecture and flashing the firmware to the microcontroller units. The robot is based on a dual ATmega328 setup—one microcontroller is dedicated to executing the core maze-solving algorithm, while the other handles communication and sensor data processing. This dual-processor approach improves modularity and responsiveness by separating high-level decision-making from real-time sensor interfacing.",
    },
    {
      id: 3,
      title: "Micromouse v2",
      description: "Advanced maze-solving robot with ESP32-S3 and improved capabilities.",
      image: "/images/projects/micromouse-v2.png",
      tech: ["ESP32-S3", "KiCad", "PID Control", "FreeRTOS", "ToF Sensors"],
      featured: true,
      details:
        "This is the second-generation Micromouse robot, designed with significant improvements in processing power, communication, and real-time performance. The core of the system is powered by an ESP32-S3 microcontroller, which offers dual-core processing, increased memory, and integrated Wi-Fi and Bluetooth capabilities. This upgrade allows for more advanced algorithms, such as flood-fill pathfinding, dynamic wall mapping, and wireless debugging or control. The design features a modular architecture with dedicated PCBs for sensor arrays, motor drivers, and power management.",
    },
    {
      id: 4,
      title: "Li-Po Charger with Boost",
      description: "Battery charging module with integrated protection and power management.",
      image: "/images/projects/li-po.png",
      tech: ["TP4056", "Battery Protection", "Boost Converter"],
      featured: false,
      details:
        "This is a custom-designed Li-Po/Li-Ion battery charging module featuring integrated battery protection and power management functionalities. Based on the widely used TP4056 charging IC, the module includes built-in safeguards against overcharging, over-discharging, and short-circuit conditions, ensuring reliable and safe operation. In addition to its charging capabilities, the design also incorporates an onboard boost converter, allowing the output voltage to be stepped up for powering external devices.",
    },
    {
      id: 5,
      title: "IR Tracker / TCRT5000 Sensor Arrays",
      description: "Custom-designed line-tracking sensor modules for robotics.",
      image: "/images/projects/TCRT5000-arrays.png",
      tech: ["LM393", "TCRT5000", "IR Sensors"],
      featured: false,
      details:
        "This is a custom-designed line-tracking sensor module developed specifically for line-following robotic applications. It is built around the LM393 quad comparator and integrates multiple TCRT5000 infrared reflective sensors for accurate line detection. The LM393 provides fast and reliable signal comparison, converting analog reflectivity data from the IR sensors into clear digital outputs. This modular design ensures consistent performance across different surface types and lighting conditions, making it ideal for robotics competitions, educational projects, and autonomous navigation systems.",
    },
    {
      id: 6,
      title: "PICKIT2 Programmer",
      description: "Custom-made universal programmer for Microchip PIC microcontrollers.",
      image: "/images/projects/PICKIT2.png",
      tech: ["PIC12F", "ICSP", "MPLAB IDE"],
      featured: false,
      details:
        "This is a custom-made PICkit 2 universal programmer, designed specifically for programming and debugging Microchip PIC microcontrollers. Based on the PIC12F series architecture, this programmer replicates the functionality of the original PICkit 2 while maintaining compatibility with a wide range of 8-bit, 16-bit, and some 32-bit PIC devices. It supports in-circuit serial programming (ICSP) and can be used to write, read, and verify firmware directly onto target microcontrollers.",
    },
    {
      id: 7,
      title: "Esp32 based RC Plane Flight Controller",
      description: "A custom 4-layer PCB-based flight controller for an RC plane with advanced sensor fusion.",
      image: "/images/projects/PLANE-CONTROL-BOARD.png",
      tech: ["ESP32", "PCB Design", "Sensor Fusion", "MPU9250", "Barometer"],
      featured: false,
      details: "Developed a custom RC plane controller board using a 4-layer PCB, ensuring signal integrity, noise isolation, and power distribution. Integrated dual MPU9250 IMUs and two barometric pressure sensors for precise orientation and altitude estimation. Employed advanced routing practices such as impedance control and optimal decoupling capacitor placement to ensure stable operation in high-vibration environments. Supported real-time telemetry and expandability for GPS and RF modules, showcasing expertise in PCB design, embedded systems, and multi-sensor data fusion for aerial platforms.",
    },    
    {
      id: 8,
      title: "ESP32 GPS Monitoring System",
      description: "Advanced monitoring system with integrated GPS and sensor modulation.",
      image: "/images/projects/GPS-SYSTEM.png",
      tech: ["ESP32", "GPS", "Sensor Modulation"],
      featured: false,
      details: "An advanced monitoring system based on ESP32 with integrated GPS and sensor modulation capabilities.",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 dark:text-white">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-slate-300 dark:text-slate-200 max-w-2xl mx-auto">
            A showcase of my work in embedded systems, firmware development, and hardware design.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-300">Featured Projects</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="group"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div
                  className="bg-slate-800 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 dark:border-slate-700 h-full flex flex-col cursor-pointer transform transition-all duration-300 hover:shadow-cyan-900/30 hover:shadow-xl"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-semibold mb-2 text-cyan-300">{project.title}</h4>
                    <p className="text-slate-300 dark:text-slate-200 mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-slate-700/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-900/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="bg-slate-700/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-900/50"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-700/50 p-0 flex items-center justify-start group"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      View Details{" "}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-300">Other Projects</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div
                  className="bg-slate-800 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md border border-slate-700 dark:border-slate-700 h-full flex flex-col cursor-pointer transform transition-all duration-300 hover:shadow-cyan-900/30"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-1 text-cyan-300">{project.title}</h4>
                    <p className="text-sm text-slate-300 dark:text-slate-200 mb-2 flex-1">{project.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-slate-700/50 p-0 flex items-center justify-start text-sm group"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project)
                      }}
                    >
                      Details <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => {
            if (!open) setSelectedProject(null)
          }}
        >
          <DialogContent className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700 text-slate-100 dark:text-white max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-cyan-300">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="relative h-64 md:h-80 my-4 rounded-lg overflow-hidden">
              {selectedProject && (
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <DialogDescription className="text-slate-300 dark:text-slate-200 text-base">
              {selectedProject?.details}
            </DialogDescription>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-slate-200 dark:text-slate-100">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-slate-700/50 dark:bg-slate-700/50 text-cyan-300 border-cyan-900/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 hover:bg-slate-700/50"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
