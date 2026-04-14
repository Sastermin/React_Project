import { Link } from "react-router-dom"
import Button from "./Button"
import "../styles/MovieCard.css"

function MovieCard({ title, image, movieId }) {
  return (
    <div className="movie-card">
      <img
        src={image}
        alt={title}
        className="movie-card-img"
      />

      <div className="movie-card-content">
        <h3>{title}</h3>

        {movieId && (
          <Link to={`/detalle/${movieId}`} className="movie-card-link">
            <Button text="Ver detalle" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default MovieCard