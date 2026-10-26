// Formulario para registrar un servicio
import { useState } from 'react'

// Valores iniciales: todos los campos vacíos
const FORMULARIO_VACIO = {
  id: '',
  nombre: '',
  descripcion: '',
  precio: '',
}

function ServicioForm({ onGuardar }) {
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
      <h4 className="mb-4">Nuevo servicio</h4>

      <div className="mb-3">
        <label className="form-label" htmlFor="id">Código</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-hash"></i></span>
          <input
            id="id"
            name="id"
            type="number"
            className="form-control"
            placeholder="Código del servicio"
            value={datos.id}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="nombre">Nombre del servicio</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-wrench-adjustable"></i></span>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="form-control"
            placeholder="Ej: Plomería"
            value={datos.nombre}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="descripcion">Descripción</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-card-text"></i></span>
          <input
            id="descripcion"
            name="descripcion"
            type="text"
            className="form-control"
            placeholder="Describe el servicio"
            value={datos.descripcion}
            onChange={manejarCambio}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="precio">Precio</label>
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
          <input
            id="precio"
            name="precio"
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            placeholder="0.00"
            value={datos.precio}
            onChange={manejarCambio}
            required
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        <i className="bi bi-check-circle"></i> Guardar
      </button>
    </form>
  )
}

export default ServicioForm