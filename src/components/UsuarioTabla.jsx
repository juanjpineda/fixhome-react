// Tabla de usuarios con buscador y botón para eliminar
import { useState } from 'react'

// Devuelve la clase de color según el tipo (sin tilde: Técnico -> tecnico)
const claseTipo = (tipo) => `tipo-${tipo.toLowerCase().replace('é', 'e')}`

function UsuarioTabla({ usuarios, onEliminar }) {
  // Estado: texto escrito en el buscador
  const [busqueda, setBusqueda] = useState('')

  // Filtra los usuarios que coinciden con la búsqueda
  const texto = busqueda.toLowerCase()
  const filtrados = usuarios.filter((u) =>
    `${u.id} ${u.nombre} ${u.correo} ${u.telefono} ${u.tipoUsuario}`
      .toLowerCase()
      .includes(texto)
  )

  return (
    <div className="tarjeta-tabla">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
        <h4 className="m-0">
          Usuarios registrados <span className="text-muted fs-6">({usuarios.length})</span>
        </h4>
        <input
          type="search"
          className="form-control buscador-tabla"
          placeholder="Buscar..."
          aria-label="Buscar usuario"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Estado vacío: aún no hay usuarios registrados */}
      {usuarios.length === 0 ? (
        <div className="vacio">
          <i className="bi bi-people"></i>
          <h5>Aún no hay usuarios</h5>
          <p>Registra el primero con el formulario.</p>
        </div>
      ) : filtrados.length === 0 ? (
        // Estado sin resultados: la búsqueda no coincide con nadie
        <div className="vacio">
          <i className="bi bi-search"></i>
          <h5>Sin resultados</h5>
          <p>No hay usuarios que coincidan con la búsqueda.</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Tipo</th>
                <th>Registro</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nombre}</td>
                  <td>{u.correo || '—'}</td>
                  <td>{u.telefono || '—'}</td>
                  <td>
                    <span className={`badge-tipo ${claseTipo(u.tipoUsuario)}`}>
                      {u.tipoUsuario}
                    </span>
                  </td>
                  <td>{new Date(u.fechaRegistro).toLocaleString('es-CO')}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onEliminar(u.id)}
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

export default UsuarioTabla