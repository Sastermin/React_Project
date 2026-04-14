import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import peliculasHome from "../data/detalles.json"
import peliculasCartelera from "../data/detalles_cartelera.json"

// película en ambos JSONs por ID
const todasLasPeliculas = [...peliculasHome, ...peliculasCartelera]

// Vista de detalle de una película
function Detalle() {
  const { id } = useParams()

  // Buscamos la película que coincida con el ID de la URL
  const pelicula = todasLasPeliculas.find((p) => String(p.id) === id)

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")


  // Evento submit/enviar
  function manejarCompra(e) {
    e.preventDefault()

    setMensaje(
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}`
    )

    // Opcional: limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main className="detalle-main">
      <Link to="/" className="detalle-back-link">
        ← Volver
      </Link>

      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        className="detalle-img"
      />

      <p>{pelicula.descripcion}</p>

      <hr className="detalle-divider" />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div className="detalle-form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="detalle-input"
            required
          />
        </div>

        <div className="detalle-form-group">
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            className="detalle-input"
            required
          />
        </div>

        <button
          type="submit"
          className="detalle-btn"
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p className="detalle-msg">
          {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalle