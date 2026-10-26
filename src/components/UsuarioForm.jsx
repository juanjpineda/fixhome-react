// Formulario para registrar un usuario
import { useState } from 'react'

// Opciones del campo "Tipo de usuario"
const TIPOS = ['Cliente', 'Técnico', 'Administrador']

// Valores iniciales: todos los campos vacíos
const FORMULARIO_VACIO = {
  id: '',
  nombre: '',
  correo: '',
  telefono: '',
  tipoUsuario: '',
}

function UsuarioForm({ onGuardar }) {
  // Estado: lo que el usuario va escribiendo en el formulario
  const [datos, setDatos] = useState(FORMULARIO_VACIO)

  // Evento onChange: actualiza el campo que cambió
  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setDatos({ ...datos, [name]: value })
  }

  // Evento onSubmit: evita recargar la página y envía los datos
  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const guardado = onGuardar(datos)
    // Solo se limpia el formulario si el registro fue exitoso
    if (guardado) setDatos(FORMULARIO_VACIO)
  }

  return (
    <form className="tarjeta-form" onSubmit={manejarEnvio}>
      <h4 className="mb-4">Nuevo usuario</h4>

      <div className="mb-3">
        <label className="form-label" htmlFor="id">Identificación</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-card-text"></i></span>
          <input
            id="id"
            name="id"
            type="number"
            className="form-control"
            placeholder="Número de documento"
            value={datos.id}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="nombre">Nombre</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-person"></i></span>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Nombre completo"
            value={datos.nombre}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="correo">Correo</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-envelope"></i></span>
          <input
            id="correo"
            name="correo"
            type="email"
            className="form-control"
            placeholder="correo@ejemplo.com"
            value={datos.correo}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="telefono">Teléfono</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-telephone"></i></span>
          <input
            id="telefono"
            name="telefono"
            type="text"
            className="form-control"
            placeholder="300 000 0000"
            value={datos.telefono}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="tipoUsuario">Tipo de usuario</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            className="form-select"
            value={datos.tipoUsuario}
            onChange={manejarCambio}
            required
          >
            <option value="">Seleccione...</option>
            {TIPOS.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        <i className="bi bi-check-circle"></i> Guardar
      </button>
    </form>
  )
}

export default UsuarioForm