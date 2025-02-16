import { useCanvas } from './useCanvas'

export function CanvasHook() {

  // 用閉包來管理 x, y 的狀態
  const draw = (() => {
    // Example: Draw a moving circle
    let x = 0
    let y = 0
    let dx = 2
    let dy = 2
    const radius = 30
    let init = false

    return (c: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // 初始化圓心位置
      if (!init) {
        x = canvas.width / 2
        y = canvas.height / 2
        init = true
      }

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

    }
  })()

  const canvasRef = useCanvas(draw)

  return (
    <canvas ref={canvasRef} className="w-full h-full"></canvas>)
}