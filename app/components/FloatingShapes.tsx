'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Shape 1 */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
        initial={{ y: -50, x: -50 }}
        animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', left: '10%' }}
      />
      {/* Shape 2 */}
      <motion.div
        className="absolute w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"
        initial={{ y: 0, x: 0 }}
        animate={{ y: [-20, 0, -20], x: [-20, 0, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ bottom: '15%', right: '15%' }}
      />
      {/* Shape 3 */}
      <motion.div
        className="absolute w-20 h-20 bg-white/5 rounded-full blur-lg"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '50%', left: '30%' }}
      />
    </div>
  )
}
