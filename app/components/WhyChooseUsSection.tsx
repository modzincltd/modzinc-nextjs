'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaCode, FaUsers, FaRocket, FaAward, FaChartLine } from 'react-icons/fa'

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Northwest Expertise',
      description: 'Based in Liverpool, serving businesses across Manchester, Cheshire, Lancashire, and beyond. We understand the local market and business landscape.',
      highlight: 'Local Knowledge'
    },
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest tech stacks including Next.js 15, React, Node.js, and modern cloud solutions to build fast, scalable, and secure applications.',
      highlight: 'Modern Stack'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Personal Service',
      description: 'Direct access to your development team. No account managers or middlemen - just clear communication and transparent project management.',
      highlight: 'Direct Access'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Results-Driven Approach',
      description: 'We don\'t just build websites - we create digital solutions that drive real business results, from increased sales to improved efficiency.',
      highlight: 'Proven Results'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Award-Winning Quality',
      description: 'Our work has been recognized for excellence in design, development, and user experience across multiple industries.',
      highlight: 'Quality Assured'
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Ongoing Partnership',
      description: 'We\'re here for the long haul. From initial concept to ongoing support and growth, we\'re committed to your continued success.',
      highlight: 'Long-term Support'
    }
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Modzinc?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another web agency. We're your strategic partner in digital success, 
            with deep roots in the Northwest and a passion for delivering exceptional results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                {feature.highlight}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
