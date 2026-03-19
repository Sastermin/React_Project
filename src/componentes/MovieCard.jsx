import { Link } from "react-router-dom"
import Button from "./Button"

function MovieCard({ title, image, movieId }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3>{title}</h3>

        {movieId && (
          <Link to={`/detalle/${movieId}`} style={{ textDecoration: "none" }}>
            <Button text="Ver detalle" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default MovieCard