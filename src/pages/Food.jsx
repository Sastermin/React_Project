// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"
import "../styles/Food.css"

function Food({ verDetalle }) {
  const productos = [
    {
      id: 201,
      titulo: "Palomitas",
      imagen: "https://www.gastronosfera.com/sites/default/files/styles/wide/public/trending/2023/palomitas.jpg.webp",
      descripcion: ""
    },
    {
      id: 202,
      titulo: "Refresco",
      imagen: "https://ams3.digitaloceanspaces.com/graffica/2023/02/la-ola-de-cocacola.png",
      descripcion: ""
    },
    {
      id: 203,
      titulo: "Dulces",
      imagen: "https://preview.redd.it/whats-your-go-to-candy-to-bring-to-buy-at-a-movie-theater-v0-bnja1b8vjgde1.jpeg?auto=webp&s=0a8b56987039cc5ff965e960271e92f375b5c68a",
      descripcion: ""
    }
  ]

  return (
    <main className="grid-layout">
      {productos.map((producto) => (
        <MovieCard
          key={producto.id}
          title={producto.titulo}
          image={producto.imagen}
          onVerDetalle={() => verDetalle(producto)}
        />
      ))}
    </main>
  )
}

// Exportamos la vista
export default Food
