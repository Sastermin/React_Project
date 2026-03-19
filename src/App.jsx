import { Routes, Route } from "react-router-dom"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Food from "./pages/Food"
import Otros from "./pages/Otros"
import Legales from "./pages/Legales"

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/comida" element={<Food />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/legales" element={<Legales />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App