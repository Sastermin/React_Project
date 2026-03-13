import MovieCard from "../componentes/MovieCard";
import MovieCarousel from "../componentes/MovieCarousel";
import peliculas from "../detalles.json";

function Home({ verDetalle }) {
  return (
    <>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px"
        }}
      >
        <h2>ESTRENOS</h2>
        <MovieCarousel movies={peliculas} verDetalle={verDetalle} />
      </section>

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
            description={pelicula.descripcion}
            onVerDetalle={() => verDetalle(pelicula)}
          />
        ))}
      </main>
    </>
  );
}

export default Home;