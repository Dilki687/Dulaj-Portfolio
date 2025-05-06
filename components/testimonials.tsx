"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Dulaj's professionalism and deep understanding in Electronics Engineering truly exceeded my expectations. Not only was the work top-notch, but Dulaj was also incredibly polite and went above and beyond throughout the project. HIGHLY recommend! 👍",
      name: "kingfisherwebau",
      title: "Client",
      initials: "C",
    },
    {
      quote:
        "Dulaj's expertise in code is unparalleled. His cooperation, politeness, and language fluency made the entire process seamless and enjoyable. Highly recommend working with him! 😊",
      name: "rosspawnbrokers",
      title: "Client",
      initials: "C",
    },
    {
      quote:
        "Very talented, Knows what he is doing. He was extremely quick in understanding the requirements and delivered in time. Really impressed with the level of understanding and agility to implement. Looking forward to work with him again for future projects.",
      name: "sujaysshenoy",
      title: "Client",
      initials: "C",
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 dark:text-white">
            <span className="text-cyan-400">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-slate-300 dark:text-slate-200 max-w-2xl mx-auto">
            What others say about my work and collaboration.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700 shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                    <Quote className="text-cyan-400 mb-4 h-8 w-8" />
                  </motion.div>
                  <p className="text-slate-300 dark:text-slate-200 mb-6 flex-1 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 bg-cyan-800">
                      <AvatarFallback className="bg-cyan-800 text-cyan-100">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-200 dark:text-slate-100">{testimonial.name}</p>
                      <p className="text-sm text-slate-400 dark:text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
