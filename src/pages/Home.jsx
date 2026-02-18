// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"

function Home({ cambiarVista, seleccionarPelicula }) {
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
        title="Avatar: Fuego y Cenizas"
        image="https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Avatar: Fuego y Cenizas",
            image: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            sinopsis: "Avatar: Fuego y Cenizas (Avatar: Fire and Ash) sigue a Jake Sully, Neytiri y su familia tras la devastadora guerra contra la RDA, enfrentándolos al Pueblo de las Cenizas, una tribu Na'vi agresiva y aliada de los humanos, liderada por Varang. Esta tercera entrega explora nuevas facetas de Pandora con conflictos internos, dilemas morales y batallas intensas."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Marty supreme"
        image="https://m.media-amazon.com/images/S/pv-target-images/98deb1238c562b7229eb1d3605c7697f93c4e6537702b80fb787785652004a1e.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Marty supreme",
            image: "https://m.media-amazon.com/images/S/pv-target-images/98deb1238c562b7229eb1d3605c7697f93c4e6537702b80fb787785652004a1e.jpg",
            sinopsis: "Marty Supreme (2025), dirigida por Josh Safdie y protagonizada por Timothée Chalamet, es un drama deportivo inspirado vagamente en el legendario jugador de tenis de mesa Marty Reisman. La trama sigue a Marty Mauser, un talentoso y ambicioso buscavidas neoyorquino de los años 50 que pasa de estafar en las calles a conquistar títulos nacionales, explorando la obsesión por la fama, la redención y el alto precio de la gloria deportiva."
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Arco"
        image="https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Arco",
            image: "https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg",
            sinopsis: "Arco (2025) es una película animada de ciencia ficción dirigida por Ugo Bienvenu y producida por Natalie Portman, que sigue a un niño de 10 años del futuro lejano (año 2932) que cae por accidente en el año 2075. Allí conoce a Iris, una niña que lo ayuda a intentar regresar a casa mientras enfrentan desafíos en un mundo en peligro ambiental."
          })
          cambiarVista("detalle")
        }}
      />
    </main>
  )
}

// Exportamos la vista
export default Home
