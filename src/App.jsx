// Hook de React para manejar estado
import { useState } from "react"

// Componentes
import Header from "./componentes/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Food from "./pages/Food"
import Otros from "./pages/Otros"

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")
  // Estado que guarda la película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null)

  return (
    // Contenedor raíz de la aplicación
    <div style={{ minHeight: "100vh" }}>
      {/* Header puede cambiar la vista */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && <Home cambiarVista={setVistaActual} seleccionarPelicula={setPeliculaSeleccionada} />}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} seleccionarPelicula={setPeliculaSeleccionada} />}
      {vistaActual === "comida" && <Food cambiarVista={setVistaActual} seleccionarPelicula={setPeliculaSeleccionada} />}
      {vistaActual === "detalle" && <Detalle pelicula={peliculaSeleccionada} cambiarVista={setVistaActual} />}
      {vistaActual === "otro" && <Otros cambiarVista={setVistaActual} />}
    </div>
  )
}

// Exportamos App
export default App
