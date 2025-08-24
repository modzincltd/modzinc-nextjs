'use client'

import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your digital goals. 
            Get in touch for a free consultation and quote.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaPhone className="mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-blue-100">0151 440 2730</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-100">barry@modzinc.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-blue-200" />
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-blue-100">Liverpool, Northwest England</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <h4 className="font-semibold mb-3">What's Included in Your Free Consultation:</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Project scope and requirements analysis</li>
                  <li>• Technology recommendations</li>
                  <li>• Timeline and cost estimates</li>
                  <li>• Competitive analysis</li>
                  <li>• Strategy recommendations</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Contact Form</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Service</option>
                  <option>Website Development</option>
                  <option>E-commerce Solution</option>
                  <option>Custom Application</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
