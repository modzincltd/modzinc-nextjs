'use client'

import { FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMedusa, SiGoogleads, SiHtml5, SiCss3, SiSequelize, SiStripe, SiMagento, SiWordpress, SiShopify, SiPayloadcms
    ,SiJavascript, SiTypescript, SiRedux, SiMysql, SiPostgresql, SiDocker
} from 'react-icons/si'
import { motion } from 'framer-motion'

const tech = [
  { name: 'Next.js', icon: <SiNextdotjs size={40} />, color: 'text-black' },
  { name: 'React', icon: <FaReact size={40} />, color: 'text-blue-500' },
  { name: 'TypeScript', icon: <SiTypescript size={40} />, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: 'text-cyan-500' },
  { name: 'Medusa.js', icon: <SiMedusa size={40} />, color: 'text-purple-600' },
  { name: 'Stripe', icon: <SiStripe size={40} />, color: 'text-purple-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} />, color: 'text-blue-700' },
  { name: 'Docker', icon: <SiDocker size={40} />, color: 'text-blue-600' },
  { name: 'Shopify', icon: <SiShopify size={40} />, color: 'text-green-600' },
  { name: 'WordPress', icon: <SiWordpress size={40} />, color: 'text-blue-600' },
  { name: 'Magento', icon: <SiMagento size={40} />, color: 'text-orange-600' },
  { name: 'Redux', icon: <SiRedux size={40} />, color: 'text-purple-500' },
  { name: 'MySQL', icon: <SiMysql size={40} />, color: 'text-blue-600' },
  { name: 'HTML5', icon: <SiHtml5 size={40} />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <SiCss3 size={40} />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, color: 'text-yellow-500' },
  { name: 'Google Ads', icon: <SiGoogleads size={40} />, color: 'text-red-500' },
  { name: 'Payload CMS', icon: <SiPayloadcms size={40} />, color: 'text-gray-700' },
]

export default function TechCarousel() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and secure digital solutions
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div className="flex w-max animate-scroll-left gap-12 px-6">
            {[...tech, ...tech].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="flex flex-col items-center text-gray-700 min-w-[120px] group cursor-pointer"
              >
                <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                  {item.name}
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
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            And many more technologies to meet your specific needs
          </p>
        </motion.div>
      </div>
    </section>
  )
} 