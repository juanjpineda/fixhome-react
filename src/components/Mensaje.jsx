// Muestra un aviso de éxito o error. Si no hay mensaje, no muestra nada
function Mensaje({ mensaje }) {
  if (!mensaje) return null

  return (
    <div className={`alert alert-${mensaje.tipo}`} role="alert">
      {mensaje.texto}
    </div>
  )
}

export default Mensaje