// Hook de React para manejar estado
import { useState } from "react"

// Componentes
import Header from "./componentes/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Food from "./pages/Food"

function App() {
  // Estado que controla qué vista se muestra
  const [vistaActual, setVistaActual] = useState("home")

  return (
    // Contenedor raíz de la aplicación
    <div style={{ minHeight: "100vh" }}>
      {/* Header puede cambiar la vista */}
      <Header cambiarVista={setVistaActual} />

      {/* Renderizado condicional de vistas */}
      {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === "comida" && <Food cambiarVista={setVistaActual} />}
      {vistaActual === "detalle" && <Detalle />}
    </div>
  )
}

// Exportamos App
export default App
