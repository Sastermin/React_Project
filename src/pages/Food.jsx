// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"

function Food({ cambiarVista }) {
  return (
    <main
      style={{
        maxWidth: "1200px", // Controla el ancho en pantallas grandes
        margin: "0 auto",   // Centra el contenido
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Palomitas"
        image=""
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Refresco"
        image=""
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Dulces"
        image=""
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Food
