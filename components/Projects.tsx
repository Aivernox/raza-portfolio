'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play, Github, Sparkles } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    description: 'A full-featured e-commerce iOS app with real-time inventory, secure payments, and AR product preview.',
    tech: ['SwiftUI', 'Combine', 'Core Data', 'ARKit'],
    appScreens: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Health & Fitness Tracker',
    description: 'Comprehensive health monitoring app with HealthKit integration, workout tracking, and personalized insights.',
    tech: ['Swift', 'HealthKit', 'Core ML', 'Charts'],
    appScreens: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Media Platform',
    description: 'Modern social networking app with real-time messaging, stories, and content discovery features.',
    tech: ['SwiftUI', 'Firebase', 'WebSocket', 'Combine'],
    appScreens: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Travel Companion App',
    description: 'AI-powered travel assistant with itinerary planning, local recommendations, and offline maps.',
    tech: ['Swift', 'MapKit', 'Core ML', 'Core Location'],
    appScreens: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Finance Management App',
    description: 'Personal finance tracker with budgeting, expense categorization, and financial analytics.',
    tech: ['SwiftUI', 'Core Data', 'Charts', 'WidgetKit'],
    appScreens: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'On-demand food delivery platform with real-time tracking, multiple payment options, and order management.',
    tech: ['Swift', 'MapKit', 'Firebase', 'Stripe'],
    appScreens: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
    ],
    appStoreLink: '#',
    demoVideo: '#',
    githubLink: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-white via-accent-50/20 to-white">
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
            <span className="text-sm font-medium text-gray-700">Portfolio</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Showcasing innovative iOS applications built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* iPhone Mockups */}
              <motion.div
                className={`relative flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
              >
                <div className="relative flex gap-4">
                  {project.appScreens.map((screen, screenIndex) => (
                    <motion.div
                      key={screenIndex}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        opacity: { delay: index * 0.1 + screenIndex * 0.1, duration: 0.6 },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          delay: screenIndex * 0.3,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      {/* iPhone 15 Pro Frame */}
                      <div className="relative w-[200px] md:w-[240px]">
                        <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2.5 shadow-2xl">
                          {/* Dynamic Island */}
                          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-full"></div>
                          </div>
                          
                          {/* Screen */}
                          <div className="bg-black rounded-[2.5rem] overflow-hidden">
                            <div className="relative h-[400px] md:h-[480px]">
                              <Image
                                src={screen}
                                alt={`${project.title} - Screen ${screenIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                className={`glass-effect rounded-3xl p-10 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
              >
                <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-6 py-3 apple-button-primary text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    App Store
                  </motion.a>
                  <motion.a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 apple-button-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 apple-button-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
