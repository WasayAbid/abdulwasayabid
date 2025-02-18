'use client'

import { useEffect, useRef } from 'react'

const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dots: { x: number; y: number; vx: number; vy: number; angle: number }[] = []
    const numDots = 80
    const connectionDistance = 180
    const mouseRadius = 200
    let mouse = { x: 0, y: 0 }
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    const handleMouseMove = (e: MouseEvent) => {
      mouse = {
        x: e.clientX,
        y: e.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Initialize dots with random angles and slower initial velocity
    for (let i = 0; i < numDots; i++) {
      const angle = Math.random() * Math.PI * 2
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * 0.1, // Reduced initial velocity
        vy: Math.sin(angle) * 0.1, // Reduced initial velocity
        angle: angle
      })
    }

    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.001 // Even slower time progression
      
      dots.forEach(dot => {
        // Slower natural flow movement
        const noiseX = Math.sin(time + dot.angle) * 0.08
        const noiseY = Math.cos(time + dot.angle * 1.5) * 0.08
        
        dot.vx += noiseX * 0.01
        dot.vy += noiseY * 0.01

        const dx = mouse.x - dot.x
        const dy = mouse.y - dot.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius
          const repelX = (dx / distance) * force * 0.1
          const repelY = (dy / distance) * force * 0.1
          dot.vx = dot.vx * (1 - force) - repelX
          dot.vy = dot.vy * (1 - force) - repelY
        }

        // Stronger damping for slower movement
        const speed = Math.sqrt(dot.vx * dot.vx + dot.vy * dot.vy)
        if (speed > 0.5) { // Lower speed limit
          dot.vx = (dot.vx / speed) * 0.5
          dot.vy = (dot.vy / speed) * 0.5
        }

        dot.x += dot.vx
        dot.y += dot.vy

        // Smooth wrapping
        if (dot.x < -50) dot.x = canvas.width + 50
        if (dot.x > canvas.width + 50) dot.x = -50
        if (dot.y < -50) dot.y = canvas.height + 50
        if (dot.y > canvas.height + 50) dot.y = -50

        // Larger and brighter dots
        const dotRadius = distance < mouseRadius 
          ? 1.8 + (1 - distance / mouseRadius) * 2
          : 1.8 // Increased base radius

        const gradient = ctx.createRadialGradient(
          dot.x, dot.y, 0,
          dot.x, dot.y, dotRadius * 3
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)') // Increased brightness
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Brighter connections
        dots.forEach(otherDot => {
          const dx = otherDot.x - dot.x
          const dy = otherDot.y - dot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const mouseDistance = Math.sqrt(
              Math.pow(mouse.x - (dot.x + dx/2), 2) + 
              Math.pow(mouse.y - (dot.y + dy/2), 2)
            )
            const mouseInfluence = Math.max(0, 1 - mouseDistance / mouseRadius)
            const baseOpacity = 0.25 * Math.pow(1 - distance / connectionDistance, 2) // Increased base opacity
            const opacity = baseOpacity + mouseInfluence * 0.2

            ctx.beginPath()
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.lineWidth = 0.8 // Slightly thicker lines
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default NetworkAnimation