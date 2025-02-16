import { useEffect, useRef } from "react"

export function CanvasHook() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const c = canvas.getContext("2d");
    if (!c) return

    // set canvas size dynamically
    canvas.width = document.documentElement.clientWidth
    canvas.height = document.documentElement.clientHeight

    // Example: Draw a moving circle
    let x = canvas.width / 2
    let y = canvas.height / 2
    let dx = 2
    let dy = 2
    const radius = 30

    const animate = () => {
      c.clearRect(0, 0, canvas.width, canvas.height)
      c.beginPath();
      c.arc(x, y, radius, 0, Math.PI * 2)
      c.fillStyle = "blue"
      c.fill()
      c.closePath()
      // Move the circle
      x += dx
      y += dy

      if (x + radius > canvas.width || x - radius < 0) dx = -dx
      if (y + radius > canvas.width || y - radius < 0) dy = -dy

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animate as any)
    }

  }, [])


  return (
    <canvas ref={canvasRef}></canvas>)
}