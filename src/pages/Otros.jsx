// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"

function Otros({ cambiarVista }) {
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
        title="Promociones"
        image=""
        onVerDetalle={() => cambiarVista("")}
      />

      <MovieCard
        title="Membresías"
        image=""
        onVerDetalle={() => cambiarVista("")}
      />

      <MovieCard
        title="Preventas"
        image=""
        onVerDetalle={() => cambiarVista("")}
      />
    </main>
  )
}

// Exportamos la vista
export default Otros
