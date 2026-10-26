// Página de usuarios: reúne el formulario y la tabla, y guarda los datos
import { useState } from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import Mensaje from '../components/Mensaje'
import UsuarioForm from '../components/UsuarioForm'
import UsuarioTabla from '../components/UsuarioTabla'

function Usuarios() {
  // Lista de usuarios guardada en el navegador
  const [usuarios, setUsuarios] = useLocalStorage('fixhome_usuarios', [])
  // Mensaje de éxito o error que se muestra arriba
  const [mensaje, setMensaje] = useState(null)

  // Muestra un mensaje y lo oculta a los 3 segundos
  const mostrarMensaje = (texto, tipo) => {
    setMensaje({ texto, tipo })
    setTimeout(() => setMensaje(null), 3000)
  }

  // Valida y guarda un usuario nuevo. Devuelve true si se guardó
  const guardarUsuario = (datos) => {
    const id = Number(datos.id)

    if (!Number.isInteger(id) || id <= 0) {
      mostrarMensaje('La identificación debe ser un número válido', 'danger')
      return false
    }
    if (usuarios.some((u) => u.id === id)) {
      mostrarMensaje('No fue posible registrar. La identificación ya existe', 'danger')
      return false
    }

    const nuevo = { ...datos, id, fechaRegistro: new Date().toISOString() }
    setUsuarios([...usuarios, nuevo])
    mostrarMensaje('Usuario registrado correctamente', 'success')
    return true
  }

  // Elimina un usuario después de pedir confirmación
  const eliminarUsuario = (id) => {
    if (!window.confirm('¿Seguro que deseas eliminar este usuario?')) return

    setUsuarios(usuarios.filter((u) => u.id !== id))
    mostrarMensaje('Usuario eliminado correctamente', 'success')
  }

  return (
    <div className="container my-5">
      <h1 className="titulo text-center mb-4">Usuarios</h1>

      <Mensaje mensaje={mensaje} />

      <div className="row g-4">
        <div className="col-lg-5">
          <UsuarioForm onGuardar={guardarUsuario} />
        </div>
        <div className="col-lg-7">
          <UsuarioTabla usuarios={usuarios} onEliminar={eliminarUsuario} />
        </div>
      </div>
    </div>
  )
}

export default Usuarios