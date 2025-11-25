'use client'

import { motion } from 'framer-motion'
import { Code, Smartphone, Layers, Wrench, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['Swift', 'Objective-C', 'SwiftUI', 'UIKit'],
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Frameworks',
    skills: ['Core Data', 'Combine', 'ARKit', 'Core ML', 'HealthKit', 'MapKit'],
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Layers,
    title: 'Architecture',
    skills: ['MVVM', 'MVC', 'VIPER', 'Clean Architecture', 'Protocol-Oriented'],
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: Wrench,
    title: 'Tools & Others',
    skills: ['Xcode', 'Git', 'CI/CD', 'TestFlight', 'App Store Connect', 'Firebase'],
    gradient: 'from-orange-500 to-orange-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
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
            <span className="text-sm font-medium text-gray-700">Expertise</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            A comprehensive toolkit for building exceptional iOS applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group glass-effect rounded-3xl p-8 card-hover"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <category.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 tracking-tight">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-600 flex items-center text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 glass-effect rounded-3xl p-12"
        >
          <h3 className="text-3xl font-semibold mb-12 text-center text-gray-900 tracking-tight">
            Years of Experience
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'iOS Development', years: '4+' },
              { label: 'Swift', years: '4+' },
              { label: 'SwiftUI', years: '3+' },
              { label: 'App Store', years: '4+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-semibold text-accent-600 mb-3 tracking-tight">
                  {stat.years}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
