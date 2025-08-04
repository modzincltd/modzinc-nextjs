'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: { value: 60 },
          size: { value: 2 },
          color: { value: '#ffffff' },
          links: { enable: true, color: '#ffffff', distance: 100 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  )
}
