'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaCode, FaPalette, FaChartLine, FaAward, FaUsers } from 'react-icons/fa'

export default function ServicesSection() {
  const services = [
    {
      icon: <FaCode className="text-4xl" />,
      title: 'Custom Web Development',
      description: 'Bespoke websites and web applications built with modern frameworks like Next.js, React, and Node.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Scalable Architecture']
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and drive conversions.',
      features: ['User-Centered Design', 'Brand Consistency', 'Interactive Prototypes', 'Accessibility First']
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with seamless payment processing and inventory management.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics & Reporting']
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase visibility and drive qualified leads.',
      features: ['SEO & PPC', 'Social Media', 'Content Marketing', 'Conversion Optimization']
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: 'Business Applications',
      description: 'Custom software solutions that streamline operations and boost productivity.',
      features: ['CRM Systems', 'Automation Tools', 'API Integration', 'Cloud Deployment']
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and support to keep your digital assets performing optimally.',
      features: ['24/7 Monitoring', 'Regular Updates', 'Security Patches', 'Performance Optimization']
    }
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we handle every aspect of your digital presence 
            with cutting-edge technology and creative excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
