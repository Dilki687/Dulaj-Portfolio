"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="mb-4">
          <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold mb-4 text-slate-100 dark:text-white">
            <span className="text-cyan-400">Dulaj</span> Bopitiya
          </motion.h1>
          <motion.h2
            variants={item}
            className="text-xl md:text-2xl font-medium text-slate-300 dark:text-slate-200 mb-6"
          >
            Embedded & Firmware Developer
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-400 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Bridging Hardware with Smart Software
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 relative overflow-hidden group">
              <Link href="#projects">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-cyan-500 transition-all duration-300 group-hover:h-full -z-0"></span>
              </Link>
            </Button>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              className="border-cyan-600 text-cyan-400 hover:bg-cyan-950/30 px-6 relative overflow-hidden group"
            >
              <Link href="/CV.pdf" download>
                <span className="relative z-10 flex items-center">
                  Download CV <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-full bg-cyan-950/30 transition-all duration-300 group-hover:w-full -z-0"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-400 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
