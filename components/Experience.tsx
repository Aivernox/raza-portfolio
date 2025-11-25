'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, Award, Sparkles, TrendingUp } from 'lucide-react'

const experiences = [
  {
    year: '2023 - Present',
    role: 'Senior iOS Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading iOS development for flagship products, mentoring junior developers, and architecting scalable mobile solutions.',
    achievements: [
      'Launched 3 apps with 100K+ downloads',
      'Reduced app crash rate by 40%',
      'Implemented CI/CD pipeline',
    ],
    apps: ['E-Commerce Pro', 'Health Tracker Plus', 'Social Connect'],
  },
  {
    year: '2021 - 2023',
    role: 'iOS Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed and maintained multiple iOS applications using Swift and SwiftUI, collaborating with cross-functional teams.',
    achievements: [
      'Built 5+ production apps',
      'Improved app performance by 35%',
      'Integrated third-party SDKs',
    ],
    apps: ['Finance Manager', 'Travel Guide', 'Food Delivery'],
  },
  {
    year: '2020 - 2021',
    role: 'Junior iOS Developer',
    company: 'StartupHub',
    description: 'Started iOS development journey, worked on various client projects, and learned best practices in mobile development.',
    achievements: [
      'Completed 10+ projects',
      'Learned SwiftUI and modern iOS patterns',
      'Published first app to App Store',
    ],
    apps: ['Task Manager', 'Weather App', 'News Reader'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-white">
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
            <span className="text-sm font-medium text-gray-700">Journey</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            A journey of growth, innovation, and excellence in iOS development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-200 via-accent-300 to-gray-200 transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Animated Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-6 h-6 bg-accent-600 rounded-full border-4 border-white shadow-xl transform md:-translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <motion.div
                    className="glass-effect rounded-3xl p-8 card-hover"
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    <motion.div
                      className="flex items-start gap-4 mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Briefcase className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-1 tracking-tight">{exp.role}</h3>
                        <p className="text-accent-600 font-medium">{exp.company}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-2 text-gray-500 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.year}</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-600 mb-6 leading-relaxed font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {exp.description}
                    </motion.p>

                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                        <Award size={18} className="text-accent-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-gray-600 flex items-start font-light"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                          >
                            <motion.span
                              className="text-accent-600 mr-3 mt-1.5"
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{ delay: index * 0.2 + 0.7 + i * 0.1, duration: 0.5 }}
                            >
                              ✓
                            </motion.span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                    >
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                        <TrendingUp size={18} className="text-accent-600" />
                        Apps Developed:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.apps.map((app, i) => (
                          <motion.span
                            key={app}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.9 + i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.1, backgroundColor: '#e0f2fe' }}
                          >
                            {app}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
