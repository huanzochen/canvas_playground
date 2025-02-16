import { useEffect, useRef } from "react"
import { debounce } from "lodash-es"

export function CanvasHook() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const c = canvas.getContext("2d");
    if (!c) return

    const resizeCanvas = debounce(() => {
      // set canvas size dynamically
      canvas.width = canvas.parentElement?.clientWidth || document.documentElement.clientWidth
      canvas.height = canvas.parentElement?.clientHeight || document.documentElement.clientHeight
    }, 100, { 'leading': true })
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas)

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
      if (y + radius > canvas.height || y - radius < 0) dy = -dy

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animate as any)
      window.removeEventListener("resize", resizeCanvas)
    }

  }, [])


  return (
    <canvas ref={canvasRef} className="w-full h-full"></canvas>)
}