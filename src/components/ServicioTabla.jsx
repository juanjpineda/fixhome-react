// Tabla de servicios con buscador y botón para eliminar
import { useState } from 'react'

function ServicioTabla({ servicios, onEliminar }) {
  // Estado: texto escrito en el buscador
  const [busqueda, setBusqueda] = useState('')

  // Filtra los servicios que coinciden con la búsqueda
  const texto = busqueda.toLowerCase()
  const filtrados = servicios.filter((s) =>
    `${s.id} ${s.nombre} ${s.descripcion}`.toLowerCase().includes(texto)
  )

  return (
    <div className="tarjeta-tabla">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <h4 className="m-0">
          Servicios registrados <span className="text-muted fs-6">({servicios.length})</span>
        </h4>
        <input
          type="search"
          className="form-control buscador-tabla"
          placeholder="Buscar..."
          aria-label="Buscar servicio"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Estado vacío: aún no hay servicios registrados */}
      {servicios.length === 0 ? (
        <div className="vacio">
          <i className="bi bi-tools"></i>
          <h5>Aún no hay servicios</h5>
          <p>Registra el primero con el formulario.</p>
        </div>
      ) : filtrados.length === 0 ? (
        // Estado sin resultados: la búsqueda no coincide con ninguno
        <div className="vacio">
          <i className="bi bi-search"></i>
          <h5>Sin resultados</h5>
          <p>No hay servicios que coincidan con la búsqueda.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Registro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.nombre}</td>
                  <td>{s.descripcion || '—'}</td>
                  <td className="precio">$ {Number(s.precio).toLocaleString('es-CO')}</td>
                  <td>{new Date(s.fechaRegistro).toLocaleString('es-CO')}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onEliminar(s.id)}
                    >
                      <i className="bi bi-trash"></i> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ServicioTabla