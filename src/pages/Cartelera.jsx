import MovieCard from "../componentes/MovieCard"
import peliculas from "../data/detalles_cartelera.json";

function Cartelera() {
  return (
    <main className="grid-layout">
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          movieId={pelicula.id}
        />
      ))}
    </main>
  )
}

export default Cartelera