import { useEffect, useRef } from "react"
import { debounce } from "lodash-es"

export function useCanvas(draw: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) {
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

    const render = () => {
      c.clearRect(0, 0, canvas.width, canvas.height)

      draw(c, canvas);
      requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(render as any)
      window.removeEventListener("resize", resizeCanvas)
    }

  }, [draw])

  return canvasRef
}