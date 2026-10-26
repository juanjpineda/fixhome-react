// Página de servicios: reúne el formulario y la tabla, y guarda los datos
import { useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Mensaje from '../components/Mensaje'
import ServicioForm from '../components/ServicioForm'
import ServicioTabla from '../components/ServicioTabla'

function Servicios() {
  // Lista de servicios guardada en el navegador
  const [servicios, setServicios] = useLocalStorage('fixhome_servicios', [])
  // Mensaje de éxito o error que se muestra arriba
  const [mensaje, setMensaje] = useState(null)

  // Muestra un mensaje y lo oculta a los 3 segundos
  const mostrarMensaje = (texto, tipo) => {
    setMensaje({ texto, tipo })
    setTimeout(() => setMensaje(null), 3000)
  }

  // Valida y guarda un servicio nuevo. Devuelve true si se guardó
  const guardarServicio = (datos) => {
    const id = Number(datos.id)
    const precio = Number(datos.precio)

    if (!Number.isInteger(id) || id <= 0) {
      mostrarMensaje('El código debe ser un número válido', 'danger')
      return false
    }
    if (Number.isNaN(precio) || precio < 0) {
      mostrarMensaje('El precio debe ser un número válido', 'danger')
      return false
    }
    if (servicios.some((s) => s.id === id)) {
      mostrarMensaje('No fue posible registrar. El código ya existe', 'danger')
      return false
    }

    const nuevo = { ...datos, id, precio, fechaRegistro: new Date().toISOString() }
    setServicios([...servicios, nuevo])
    mostrarMensaje('Servicio registrado correctamente', 'success')
    return true
  }

  // Elimina un servicio después de pedir confirmación
  const eliminarServicio = (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este servicio?')) return

    setServicios(servicios.filter((s) => s.id !== id))
    mostrarMensaje('Servicio eliminado correctamente', 'success')
  }

  return (
    <div className="container my-5">
      <h1 className="titulo text-center mb-4">Servicios</h1>

      <Mensaje mensaje={mensaje} />

      <div className="row g-4">
        <div className="col-lg-5">
          <ServicioForm onGuardar={guardarServicio} />
        </div>
        <div className="col-lg-7">
          <ServicioTabla servicios={servicios} onEliminar={eliminarServicio} />
        </div>
      </div>
    </div>
  )
}

export default Servicios