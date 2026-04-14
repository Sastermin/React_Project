// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"
import productos from "../data/productos_comida.json"

function Food({ verDetalle }) {

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


export default Food
