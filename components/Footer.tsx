'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-4 font-light"
          >
            Made with <Heart className="inline text-red-500 mx-1" size={16} /> by Malik Muhammad Raza
          </motion.p>
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
