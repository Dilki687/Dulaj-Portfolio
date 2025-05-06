"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    const { name, email, message } = formData
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
  
    const mailtoLink = `mailto:dulajbopitiya111@gmail.com?subject=${subject}&body=${body}`
  
    window.location.href = mailtoLink
  
    // Optionally reset the form
    setFormData({ name: "", email: "", message: "" })
  }
  
  const contactItems = [
    {
      icon: <Mail className="text-cyan-400" />,
      title: "Email",
      value: "dulajbopitiya111@gmail.com",
      link: "mailto:dulajbopitiya111@gmail.com",
    },
    {
      icon: <Github className="text-cyan-400" />,
      title: "GitHub",
      value: "github.com/DulajBopitiya",
      link: "https://github.com/DulajBopitiya",
    },
    {
      icon: <Linkedin className="text-cyan-400" />,
      title: "LinkedIn",
      value: "linkedin.com/in/dulaj-bopitiya",
      link: "https://www.linkedin.com/in/dulaj-bopitiya/",
    },
    {
      icon: <MapPin className="text-cyan-400" />,
      title: "Location",
      value: "Sri Lanka",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-800/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 dark:text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-slate-300 dark:text-slate-200 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="bg-slate-700/30 dark:bg-slate-800/30 border-slate-600 dark:border-slate-700 hover:border-cyan-800/50 transition-colors">
                    <CardContent className="flex items-center p-4">
                      <div className="mr-4 h-10 w-10 flex items-center justify-center bg-slate-800/50 dark:bg-slate-700/50 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 dark:text-slate-400">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-200 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-200 dark:text-slate-200">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047271.2999762353!2d78.46006531249995!3d7.851731749999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sus!4v1651825200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Sri Lanka"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-300">Send Me a Message</h3>
            <Card className="bg-slate-700/30 dark:bg-slate-800/30 border-slate-600 dark:border-slate-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-slate-800/50 dark:bg-slate-700/50 border-slate-600 dark:border-slate-600 text-slate-100 dark:text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 dark:text-slate-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-slate-800/50 dark:bg-slate-700/50 border-slate-600 dark:border-slate-600 text-slate-100 dark:text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 dark:text-slate-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      className="min-h-32 bg-slate-800/50 dark:bg-slate-700/50 border-slate-600 dark:border-slate-600 text-slate-100 dark:text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
