// Pie de página con el año actualizado automáticamente
function Footer() {
  return (
    <footer className="pie">
      <div className="container">
        © {new Date().getFullYear()} FixHome · Proyecto formativo SENA
      </div>
    </footer>
  )
}

export default Footer