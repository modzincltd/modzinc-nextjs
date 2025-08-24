'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaMapMarkerAlt } from 'react-icons/fa'
import ParticlesBackground from './ParticlesBackground'
import HeroBackgroundGrid from './HeroBackgroundGrid'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-32 px-6 text-center overflow-hidden">
      <ParticlesBackground />
      <HeroBackgroundGrid />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float1 top-10 left-10" />
        <div className="absolute w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float2 bottom-20 right-20" />
        <div className="absolute w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float3 top-1/2 left-1/3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <FaMapMarkerAlt className="mr-2 text-blue-400" />
            <span className="text-sm font-medium">Northwest England's Premier Web Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            We Build Digital
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Experiences That
            </span>
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Drive Results
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From Liverpool to Manchester and beyond, we craft cutting-edge websites, 
            powerful applications, and intelligent systems that transform businesses 
            across the Northwest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaRocket className="mr-2" />
                Start Your Project
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaCode className="mr-2" />
                View Our Work
              </Link>
            </motion.div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
