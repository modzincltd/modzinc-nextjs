'use client'

import { motion } from 'framer-motion'

export default function HeroBackgroundGrid() {
  const blocks = Array.from({ length: 120 })

  return (
    <div className="absolute inset-0 -z-10 grid grid-cols-12 gap-2 p-8 pointer-events-none">
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-white/20 rounded-sm"
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.05,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
