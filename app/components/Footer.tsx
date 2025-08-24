'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'E-commerce Solutions', href: '#services' },
      { name: 'Custom Applications', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'UI/UX Design', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '#blog' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Support', href: '#support' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook size={20} />, href: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter size={20} />, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: <FaInstagram size={20} />, href: 'https://instagram.com' },
    { name: 'GitHub', icon: <FaGithub size={20} />, href: 'https://github.com' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div>
                  <span className="text-2xl font-bold">MODZINC</span>
                  <div className="text-sm text-gray-300">Web Development Agency</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Northwest England's premier web development agency. We create cutting-edge digital solutions 
                that drive real business results for companies across the region.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="text-gray-300">Liverpool, Northwest England</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-400" />
                  <span className="text-gray-300">0151 440 2730</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400" />
                  <span className="text-gray-300">barry@modzinc.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Modzinc. All rights reserved. | Northwest England's Premier Web Agency
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-white/20 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

