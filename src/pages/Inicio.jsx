// Página de inicio: presenta FixHome y da acceso a los dos módulos
import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <h1>Soluciones para tu hogar, <span>en un solo lugar</span></h1>
          <p>Administra los usuarios y los servicios de FixHome de forma rápida y ordenada.</p>
        </div>
      </header>

      <section className="container modulos">
        <div className="row justify-content-center g-4">
          <div className="col-md-5">
            <div className="tarjeta-modulo">
              <div className="icono-modulo"><i className="bi bi-people-fill"></i></div>
              <h4>Usuarios</h4>
              <p className="text-muted">Registra y consulta clientes y técnicos.</p>
              <Link to="/usuarios" className="btn btn-primary">Ir a usuarios</Link>
            </div>
          </div>
          <div className="col-md-5">
            <div className="tarjeta-modulo">
              <div className="icono-modulo"><i className="bi bi-tools"></i></div>
              <h4>Servicios</h4>
              <p className="text-muted">Registra y consulta los servicios disponibles.</p>
              <Link to="/servicios" className="btn btn-primary">Ir a servicios</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio