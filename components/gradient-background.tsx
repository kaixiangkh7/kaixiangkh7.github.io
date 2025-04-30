"use client"

import { useEffect, useRef } from "react"

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    // Add mouse event listeners directly to the canvas for more accurate tracking
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    // Also add to window as a fallback
    window.addEventListener("mousemove", handleMouseMove)

    // Canvas width and height for safe use in the Particle class
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    // Color palette for particles
    const colors = [
      { r: 255, g: 255, b: 255 },  // White
      { r: 173, g: 216, b: 230 },  // Light blue
      { r: 186, g: 85, b: 211 },   // Medium purple
      { r: 135, g: 206, b: 250 },  // Light sky blue
      { r: 147, g: 112, b: 219 },  // Medium purple
    ]

    // Base particle class
    class BaseParticle {
      x: number
      y: number
      size: number
      baseSize: number
      opacity: number
      color: {r: number, g: number, b: number}
      pulseSpeed: number
      pulseAmount: number
      pulseOffset: number
      
      constructor() {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.baseSize = Math.random() * 2.5 + 0.5
        this.size = this.baseSize
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = colors[Math.floor(Math.random() * colors.length)]
        // Pulsing effect
        this.pulseSpeed = Math.random() * 0.02 + 0.005
        this.pulseAmount = Math.random() * 0.7 + 0.3
        this.pulseOffset = Math.random() * Math.PI * 2
      }

      update(time: number) {
        // Pulsing size effect
        this.size = Math.max(0.1, this.baseSize + Math.sin(time * this.pulseSpeed + this.pulseOffset) * this.pulseAmount * 0.5)
      }

      draw() {
        const { r, g, b } = this.color
        ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    // Interactive particle that follows cursor
    class InteractiveParticle extends BaseParticle {
      speedX: number
      speedY: number
      originX: number
      originY: number
      easing: number
      mouseRadius: number
      depth: number  // For depth effect, 0=far, 1=close

      constructor() {
        super()
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        // Store original position for return behavior
        this.originX = this.x
        this.originY = this.y
        this.easing = Math.random() * 0.02 + 0.01
        this.mouseRadius = Math.random() * 250 + 200
        this.depth = Math.random()  // Random depth
        
        // Make size affected by depth (distant particles are smaller)
        this.baseSize = this.baseSize * (0.5 + this.depth * 0.5)
        this.size = this.baseSize
        
        // Make opacity affected by depth (distant particles are more transparent)
        this.opacity = this.opacity * (0.3 + this.depth * 0.7)
      }

      update(time: number) {
        super.update(time)
        
        // Check if mouse is active
        if (mouseRef.current.active) {
          // Calculate distance to mouse
          const dx = mouseRef.current.x - this.x
          const dy = mouseRef.current.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Move towards mouse if within radius - more aggressively now
          if (distance < this.mouseRadius) {
            const forceDirectionX = dx / distance || 0
            const forceDirectionY = dy / distance || 0
            const force = (this.mouseRadius - distance) / this.mouseRadius
            
            // Increased force for particles closer to us (higher depth)
            const depthForce = 0.5 + this.depth * 1.5
            
            // Movement based on depth (closer particles move faster)
            const directionX = forceDirectionX * force * depthForce
            const directionY = forceDirectionY * force * depthForce
            
            this.x += directionX
            this.y += directionY
          } else {
            // Return to original position when outside mouse radius
            const dx = this.originX - this.x
            const dy = this.originY - this.y
            
            this.x += dx * this.easing
            this.y += dy * this.easing
            
            // Add slight random movement
            this.x += this.speedX * 0.5 * this.depth
            this.y += this.speedY * 0.5 * this.depth
          }
        } else {
          // Free movement when mouse is not active
          // Move slightly in random direction, based on depth
          this.x += this.speedX * this.depth
          this.y += this.speedY * this.depth
          
          // Gradually return to original position
          const dx = this.originX - this.x
          const dy = this.originY - this.y
          
          this.x += dx * this.easing
          this.y += dy * this.easing
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < 0) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = 0
      }
    }

    // Linear moving particle that moves in a consistent direction
    class LinearParticle extends BaseParticle {
      speedX: number
      speedY: number
      depth: number

      constructor() {
        super()
        this.depth = Math.random()
        
        // Create stronger directional movement
        const angle = Math.random() * Math.PI * 2
        const speed = (Math.random() * 0.8 + 0.2) * (0.3 + this.depth * 0.7)
        this.speedX = Math.cos(angle) * speed
        this.speedY = Math.sin(angle) * speed
        
        // Make size affected by depth
        this.baseSize = (Math.random() * 3 + 1) * (0.5 + this.depth * 0.5)
        this.size = this.baseSize
        
        // Particles nearer to camera are brighter
        this.opacity = this.opacity * (0.3 + this.depth * 0.7)
        
        // Closer particles are more likely to be white
        if (this.depth > 0.8) {
          this.color = colors[0] // White
        }
      }

      update(time: number) {
        super.update(time)
        
        // Move linearly across the screen, speed depends on depth
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvasWidth
        if (this.x > canvasWidth) this.x = 0
        if (this.y < 0) this.y = canvasHeight
        if (this.y > canvasHeight) this.y = 0
      }
    }

    // Create particle arrays - mixed types of particles
    const interactiveCount = 360
    const linearCount = 180
    const particles: BaseParticle[] = []
    
    // Create interactive particles
    for (let i = 0; i < interactiveCount; i++) {
      particles.push(new InteractiveParticle())
    }
    
    // Create linear movement particles
    for (let i = 0; i < linearCount; i++) {
      particles.push(new LinearParticle())
    }

    // For time-based animations
    let time = 0

    // Animation loop
    const animate = () => {
      time += 0.01
      
      // Clear canvas with transparent fill
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles, sorted by depth (far to near)
      particles.sort((a, b) => {
        const aDepth = 'depth' in a ? (a as any).depth : 0.5
        const bDepth = 'depth' in b ? (b as any).depth : 0.5
        return aDepth - bDepth
      })
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update(time)
        particle.draw()
      })

      // Add connecting lines between nearby particles
      // Only connect particles that are close in depth
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 0.2
      for (let i = 0; i < particles.length; i++) {
        const particleA = particles[i] as any
        const depthA = particleA.depth || 0.5
        
        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j] as any
          const depthB = particleB.depth || 0.5
          
          // Skip if particles are too far apart in depth
          if (Math.abs(depthA - depthB) > 0.3) continue
          
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          // Connection distance is affected by depth
          const connectionDistance = 50 + 50 * ((depthA + depthB) / 2)
          
          if (distance < connectionDistance) {
            // Line opacity based on distance and particle opacity
            const opacity = 0.05 * (1 - distance / connectionDistance) * 
                          ((particleA.opacity + particleB.opacity) / 2)
            
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10" 
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #6366f1 100%)",
        }}
        aria-hidden="true"
      />
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10 opacity-90" 
        aria-hidden="true" 
      />
    </>
  )
}

