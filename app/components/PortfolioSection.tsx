'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/lib/sanity'

interface Client {
  _id: string
  name: string
  company?: string
  logo?: any
  industry?: string
  location?: string
  description?: string
  services?: string[]
  featured?: boolean
  order?: number
}

interface PortfolioSectionProps {
  clients: Client[]
}

export default function PortfolioSection({ clients }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Our Latest Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across the Northwest transform their digital presence 
            and achieve remarkable results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                {client.logo ? (
                  <Image 
                    src={urlFor(client.logo).url()} 
                    alt={client.name} 
                    width={600} 
                    height={400} 
                    className="w-full pt-12 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{client.name}</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    {client.industry || 'Client'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{client.name}</h3>
                {client.company && (
                  <p className="text-sm text-gray-500 mb-2">{client.company}</p>
                )}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {client.description || `Professional services for ${client.name}`}
                </p>
                {client.services && client.services.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {client.services.slice(0, 3).map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-600 font-medium">
                    {client.location || 'Northwest England'}
                  </span>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
