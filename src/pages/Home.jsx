import MovieCard from "../componentes/MovieCard";
import MovieCarousel from "../componentes/MovieCarousel";
import peliculas from "../data/detalles.json";
import "../styles/Home.css"

function Home() {
  return (
    <>
      <section className="page-container">
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={peliculas} />
      </section>

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
    </>
  );
}

export default Home;