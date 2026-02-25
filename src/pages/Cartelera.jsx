import MovieCard from "../componentes/MovieCard"
import peliculas from "../detalles_cartelera.json";

function Cartelera({ verDetalle }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  )
}

export default Cartelera