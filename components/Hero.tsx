'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-accent-50/30">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0, 0, 0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Animated Background Orbs - Apple Style */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-200/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-300/15 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content with Profile Picture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Profile Picture - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-10 relative"
            >
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Malik Muhammad Raza"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-white" size={24} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 glass-effect rounded-full shadow-sm"
            >
              <Sparkles className="text-accent-600" size={16} />
              <span className="text-sm font-semibold text-gray-800">iOS Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient block mt-3">Malik Muhammad Raza</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 leading-relaxed font-light max-w-2xl"
            >
              Professional iOS Developer with{' '}
              <span className="font-semibold text-gray-900">4+ years</span> of experience
              crafting beautiful, performant mobile applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="apple-button-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.a
                href="#projects"
                className="apple-button-secondary inline-flex items-center justify-center gap-2 text-base px-8 py-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowDown size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Modern iPhone 15 Pro Mockup with App Screens */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* iPhone 15 Pro Frame - Modern Design */}
              <motion.div
                className="relative w-[340px] md:w-[420px] mx-auto"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* iPhone Frame with Titanium Finish */}
                <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[4rem] p-3 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-[3.5rem] overflow-hidden">
                    {/* Dynamic Island - iPhone 15 Pro */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-full z-30 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Status Bar */}
                    <div className="h-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-between px-10 text-white text-xs font-medium pt-4">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
                        <div className="w-1 h-1 bg-white rounded-full ml-0.5"></div>
                        <div className="w-6 h-3 border border-white rounded-sm ml-2">
                          <div className="w-full h-full bg-white rounded-sm" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* App Screen Content - Real App Look */}
                    <div className="relative bg-gradient-to-b from-accent-50 via-white to-white min-h-[700px]">
                      {/* App Header */}
                      <div className="px-6 pt-6 pb-4">
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.6 }}
                          className="flex items-center justify-between mb-4"
                        >
                          <h2 className="text-2xl font-bold text-gray-900">My Apps</h2>
                          <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                            <span className="text-accent-600 font-semibold">MM</span>
                          </div>
                        </motion.div>
                      </div>

                      {/* App Icons Grid - Modern iOS Style */}
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2, duration: 0.6 }}
                          className="grid grid-cols-4 gap-4"
                        >
                          {[
                            { name: 'Shop', gradient: 'bg-gradient-to-br from-blue-500 to-blue-600' },
                            { name: 'Health', gradient: 'bg-gradient-to-br from-red-500 to-pink-600' },
                            { name: 'Social', gradient: 'bg-gradient-to-br from-purple-500 to-purple-600' },
                            { name: 'Travel', gradient: 'bg-gradient-to-br from-green-500 to-green-600' },
                            { name: 'Finance', gradient: 'bg-gradient-to-br from-yellow-500 to-orange-600' },
                            { name: 'Food', gradient: 'bg-gradient-to-br from-orange-500 to-red-600' },
                            { name: 'Music', gradient: 'bg-gradient-to-br from-pink-500 to-rose-600' },
                            { name: 'News', gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600' },
                          ].map((app, i) => (
                            <motion.div
                              key={i}
                              className={`aspect-square ${app.gradient} rounded-3xl flex flex-col items-center justify-center shadow-lg`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <div className="w-12 h-12 bg-white/30 rounded-2xl mb-2 backdrop-blur-sm"></div>
                              <span className="text-white text-xs font-semibold">{app.name}</span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Featured App Showcase */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="mx-6 mb-6"
                      >
                        <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                          <div className="h-48 bg-gradient-to-br from-accent-500 via-accent-400 to-accent-600 rounded-2xl mb-4 shadow-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800')] bg-cover bg-center opacity-80"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white text-xl font-bold mb-1">E-Commerce Pro</h3>
                              <p className="text-white/90 text-sm">Featured App</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-gray-600 text-sm font-light">4.9 ⭐ Rating</p>
                              <p className="text-gray-400 text-xs">100K+ Downloads</p>
                            </div>
                            <div className="px-4 py-2 bg-accent-600 text-white rounded-full text-sm font-semibold">
                              View
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Accent Elements */}
              <motion.div
                className="absolute -top-12 -right-12 w-32 h-32 bg-accent-200/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-12 -left-12 w-24 h-24 bg-accent-300/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="text-gray-400" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
