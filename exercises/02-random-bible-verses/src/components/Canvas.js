import React, { useRef, useEffect } from 'react'

const CanvasComponent = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Crear una nueva imagen
    const img = new Image()
    img.src = 'ruta/a/tu/imagen.jpg' // Reemplaza con la ruta a tu imagen

    img.onload = () => {
      // Dibujar la imagen en el canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Configurar el estilo del texto
      ctx.font = '30px Arial'
      ctx.fillStyle = 'white' // Color del texto

      // Dibujar el texto en el canvas
      ctx.fillText('Tu texto aquí', 50, 50) // Ajusta la posición del texto (x, y)
    }
  }, [])

  return <canvas ref={canvasRef} width={500} height={300}></canvas>
}

export default CanvasComponent
