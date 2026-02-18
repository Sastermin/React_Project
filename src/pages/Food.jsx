// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"

function Food({ cambiarVista, seleccionarPelicula }) {
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
        image="https://www.gastronosfera.com/sites/default/files/styles/wide/public/trending/2023/palomitas.jpg.webp"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Palomitas acarameladas",
            image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/93135B2C-F156-4D48-B07A-6D51D73545A3/Derivates/c229f6d2-ffef-47a1-82e7-f5d48bea13f1.jpg",
            sinopsis: ""
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Refresco"
        image="https://ams3.digitaloceanspaces.com/graffica/2023/02/la-ola-de-cocacola.png"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Coca-cola",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg",
            sinopsis: ""
          })
          cambiarVista("detalle")
        }}
      />

      <MovieCard
        title="Dulces"
        image="https://preview.redd.it/whats-your-go-to-candy-to-bring-to-buy-at-a-movie-theater-v0-bnja1b8vjgde1.jpeg?auto=webp&s=0a8b56987039cc5ff965e960271e92f375b5c68a"
        onVerDetalle={() => {
          seleccionarPelicula({
            title: "Crunch",
            image: "https://www.laranitadelapaz.com.mx/images/thumbs/0008565_chocolate-crunch-6-barras-de-40-g-ieps-inc_625.jpeg",
            sinopsis: ""
          })
          cambiarVista("detalle")
        }}
      />
    </main>
  )
}

// Exportamos la vista
export default Food
