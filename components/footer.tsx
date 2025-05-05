"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-900 border-t border-slate-800 dark:border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-slate-100 dark:text-white mb-4 block">
              <span className="text-cyan-400">D</span>ulaj Bopitiya
            </Link>
            <p className="text-slate-400 dark:text-slate-400 mb-4 max-w-md">
              Embedded & Firmware Developer specializing in PCB design, IoT systems, and automation solutions.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800 dark:hover:bg-slate-800"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800 dark:hover:bg-slate-800"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800 dark:hover:bg-slate-800"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-slate-100 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cv.pdf"
                  download
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Download CV
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-slate-400 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-slate-800 dark:border-slate-800 mt-8 pt-8 text-center text-slate-500 dark:text-slate-500 text-sm"
        >
          <p>&copy; {currentYear} Dulaj Bopitiya. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
