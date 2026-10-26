// Barra de navegación principal de FixHome
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  // Estado: indica si el menú está abierto en pantallas pequeñas
  const [abierto, setAbierto] = useState(false)

  // Cierra el menú después de hacer clic en un enlace
  const cerrarMenu = () => setAbierto(false)

  return (
    <nav className="navbar-fixhome">
      <div className="container nav-inner">
        <Link className="marca" to="/" onClick={cerrarMenu}>
          <i className="bi bi-house-gear-fill"></i> FixHome
        </Link>

        {/* Botón de hamburguesa: solo se ve en celulares */}
        <button
          className="nav-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* NavLink marca como activo el enlace de la página actual */}
        <div className={`nav-collapse ${abierto ? 'abierto' : ''}`}>
          <div className="enlaces">
            <NavLink to="/" end onClick={cerrarMenu}>Inicio</NavLink>
            <NavLink to="/usuarios" onClick={cerrarMenu}>Usuarios</NavLink>
            <NavLink to="/servicios" onClick={cerrarMenu}>Servicios</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar