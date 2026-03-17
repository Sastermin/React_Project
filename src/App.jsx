import { useState } from "react"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"

// Importar las vistas que mostraremos según la navegación
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Food from "./pages/Food"
import Otros from "./pages/Otros"
import Legales from "./pages/Legales"

function App() {
  // Se declara un estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  // Aquí nos permite guardar alguna película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  // Función para ir a detalle enviando datos
  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula)
    setVistaActual("detalle")
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Header controla navegación principal */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional, el triple "=" es para asegurar que solo se cumpla la condición si es exactamente igual */}
      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}

      {vistaActual === "comida" && (
        <Food verDetalle={verDetalle} />
      )}

      {vistaActual === "otro" && (
        <Otros cambiarVista={setVistaActual} />
      )}

      {vistaActual === "legales" && (
        <Legales />
      )}

      <Footer cambiarVista={setVistaActual} />
    </div>
  )
}

export default App