'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const partners = [
  { name: 'Crosby Athletic', src: '/clients/crosby-athletic.jpg', link: 'https://www.crosbyathletic.club/', category: 'Sports & Recreation' },
  { name: 'AA Fencing', src: '/clients/aa-fencing.png', link: 'https://www.aafencing.co.uk/', category: 'E-commerce' },
  { name: 'Vant Glass', src: '/clients/vant-glass.webp', link: 'https://www.vant.glass/gb/', category: 'E-commerce' },
  { name: 'CAZ Kitchen', src: '/clients/caz-logo.webp', link: 'https://www.cazskitchen.co.uk/', category: 'Hospitality' },
  { name: 'J Price Group', src: '/clients/jprice-group.webp', link: 'https://www.jprice-group.co.uk/', category: 'Corporate' },
  { name: 'Blinds by Post', src: '/clients/blinds-by-post.webp', link: 'https://www.blindsbypost.co.uk/', category: 'E-commerce' },
]

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Trusted by Businesses Across the Northwest
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped companies of all sizes transform their digital presence and achieve remarkable results
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-max gap-16 px-6 animate-scroll-left">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center min-w-[200px] group cursor-pointer"
              >
                <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative p-6 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={200}
                      height={80}
                      className="h-16 w-auto filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.category}
                    </div>
                  </div>
                </Link>
                <span className="mt-3 text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results with a custom digital solution
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
