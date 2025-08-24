'use client'

import { useEffect, useRef } from 'react'

const HeroBackgroundGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gridSize = 50
    let time = 0

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + 0.02 * Math.sin(time + x * 0.01)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + 0.02 * Math.sin(time + y * 0.01)})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      time += 0.01
      requestAnimationFrame(drawGrid)
    }

    drawGrid()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default HeroBackgroundGrid
