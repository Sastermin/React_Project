import { Swiper, SwiperSlide } from "swiper/react"
// módulo de navegación para habilitar flechas en el carrusel
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import MovieCard from "./MovieCard"
import "../styles/MovieCarousel.css"

function MovieCarousel({ movies }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      spaceBetween={10}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            title={movie.titulo}
            image={movie.imagen}
            movieId={movie.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MovieCarousel
