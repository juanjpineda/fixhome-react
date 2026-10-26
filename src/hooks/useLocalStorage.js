// Hook personalizado: funciona como useState, pero guarda el valor en el navegador
import { useEffect, useState } from 'react'

function useLocalStorage(clave, valorInicial) {
  // Al iniciar, intenta leer lo que ya estaba guardado
  const [valor, setValor] = useState(() => {
    try {
      const guardado = localStorage.getItem(clave)
      return guardado ? JSON.parse(guardado) : valorInicial
    } catch {
      return valorInicial
    }
  })

  // Cada vez que el valor cambia, lo vuelve a guardar
  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor))
  }, [clave, valor])

  return [valor, setValor]
}

export default useLocalStorage