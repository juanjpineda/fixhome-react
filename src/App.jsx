// Componente principal: define el menú, las rutas y el pie de página
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Usuarios from './pages/Usuarios'
import Servicios from './pages/Servicios'

function App() {
  return (
    <>
      <Navbar />
      <main className="contenido">
        {/* Cada ruta muestra una página distinta sin recargar */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App