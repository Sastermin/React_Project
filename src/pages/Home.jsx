import MovieCard from "../componentes/MovieCard";
import peliculas from "../detalles.json";

function Home({ verDetalle }) {

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
          description={pelicula.descripcion}
          onVerDetalle={() => verDetalle(pelicula)}
        />
      ))}
    </main>
  );
}

export default Home;