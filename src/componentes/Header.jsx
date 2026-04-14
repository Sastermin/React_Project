import { NavLink } from "react-router-dom"
import "../styles/Header.css"

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          <h1 className="header-title">CinePrueba</h1>
        </NavLink>

        <nav className="header-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/cartelera"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Cartelera
          </NavLink>

          <NavLink
            to="/comida"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Comida
          </NavLink>

          <NavLink
            to="/otros"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Otros
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header