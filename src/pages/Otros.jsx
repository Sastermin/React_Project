// Importamos la tarjeta reutilizable
import MovieCard from "../componentes/MovieCard"
import "../styles/Otros.css"

function Otros() {
  return (
    <main className="grid-layout">
      <MovieCard
        title="Promociones"
        image=""
      />

      <MovieCard
        title="Membresías"
        image=""
      />

      <MovieCard
        title="Preventas"
        image=""
      />
    </main>
  )
}


export default Otros
