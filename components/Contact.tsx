'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, Sparkles } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white via-accent-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-effect rounded-full"
          >
            <Sparkles className="text-accent-600" size={16} />
            <span className="text-sm font-medium text-gray-700">Get in Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Have a project in mind? Let's discuss how we can bring your iOS app idea to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 tracking-tight">Get in Touch</h3>
                <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href="mailto:malik.raza@example.com"
                  className="flex items-center gap-5 p-5 glass-effect rounded-2xl card-hover group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Email</p>
                    <p className="font-semibold text-gray-900">malik.raza@example.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-5 p-5 glass-effect rounded-2xl card-hover group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Phone</p>
                    <p className="font-semibold text-gray-900">+1 (234) 567-890</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-5 p-5 glass-effect rounded-2xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Location</p>
                    <p className="font-semibold text-gray-900">Available for Remote Work</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <p className="text-gray-600 mb-5 font-medium">Follow me on</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-accent-600 text-white rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 transition-all bg-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 transition-all bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/20 transition-all resize-none bg-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 apple-button-primary inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
