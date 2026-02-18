import MovieCard from "../componentes/MovieCard"

function Cartelera({ cambiarVista, seleccionarPelicula }) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr)",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Shingeki No Kyojin: The Final Season",
            image: "https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg",
            sinopsis: "La humanidad vive encerrada dentro de tres enormes murallas debido a los Titanes, gigantescas criaturas humanoides que devoran personas. En esta temporada final, Eren Jaeger desata un plan radical que pondrá en peligro tanto a enemigos como aliados."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="El Menú"
        image="https://m.media-amazon.com/images/S/pv-target-images/5c1cd8ffc76417c344acaafe878a45950e2fb4ca2bb72bc2d4e09df58c46c5d9.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "El Menú",
            image: "https://m.media-amazon.com/images/S/pv-target-images/5c1cd8ffc76417c344acaafe878a45950e2fb4ca2bb72bc2d4e09df58c46c5d9.jpg",
            sinopsis: "Una joven pareja viaja a una isla remota para cenar en un exclusivo restaurante dirigido por un famoso chef. Pero el lujoso menú esconde oscuros y sorprendentes secretos que convertirán la velada en una experiencia aterradora."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Spider-Man: Across the Spider-Verse"
        image="https://m.media-amazon.com/images/I/91x4nWCLbwL._AC_UF1000,1000_QL80_.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Spider-Man: Across the Spider-Verse",
            image: "https://m.media-amazon.com/images/I/91x4nWCLbwL._AC_UF1000,1000_QL80_.jpg",
            sinopsis: "Miles Morales regresa para una nueva aventura a través del multiverso, donde se encuentra con un equipo de Spider-People encargados de proteger su propia existencia. Pero cuando los héroes se enfrentan sobre cómo manejar una amenaza, Miles debe redefinir lo que significa ser un héroe."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Parasite"
        image="https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894,1000_QL80_.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Parasite",
            image: "https://m.media-amazon.com/images/I/91KArYP03YL._AC_UF894,1000_QL80_.jpg",
            sinopsis: "La familia Kim, que vive en un semisótano, idea un plan para infiltrarse en la vida de la adinerada familia Park. Lo que comienza como una ingeniosa estafa se convierte en una impredecible cadena de eventos con consecuencias devastadoras."
          })
          cambiarVista("detalle")
        }}
      />
    </main >
  )
}

export default Cartelera