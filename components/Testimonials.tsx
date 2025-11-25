'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Sparkles } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc.',
    content: 'Malik is an exceptional iOS developer. His attention to detail and ability to deliver high-quality apps on time is remarkable. He transformed our mobile strategy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Solutions Ltd.',
    content: 'Working with Malik was a game-changer. His expertise in SwiftUI and modern iOS architecture helped us build scalable, maintainable applications.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StartupHub',
    content: 'Malik brought our vision to life with his exceptional iOS development skills. His apps are not just functional but beautifully designed and user-friendly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-white">
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
            <span className="text-sm font-medium text-gray-700">Testimonials</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-effect rounded-3xl p-8 card-hover"
            >
              <Quote className="text-accent-400 mb-6" size={32} />
              <p className="text-gray-600 mb-6 leading-relaxed font-light">{testimonial.content}</p>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 tracking-tight">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-light">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
