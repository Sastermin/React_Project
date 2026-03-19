import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import peliculasHome from "../detalles.json"
import peliculasCartelera from "../detalles_cartelera.json"

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
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <Link to="/" style={{ display: "inline-block", marginBottom: "16px", color: "#0b5ed7" }}>
        ← Volver
      </Link>

      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{pelicula.descripcion}</p>

      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "16px", color: "green" }}>
          {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalle