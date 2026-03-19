import { NavLink } from "react-router-dom"

// Estilo base de los links de navegación
const linkStyle = {
  cursor: "pointer",
  color: "inherit",
  textDecoration: "none",
}

// Estilo cuando el link está activo (ruta actual)
const activeLinkStyle = {
  ...linkStyle,
  fontWeight: "bold",
  textDecoration: "underline",
}

function Header() {
  return (
    <header
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#0b5ed7",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 24px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
      >
        <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
          <h1 style={{ margin: 0 }}>CinePrueba</h1>
        </NavLink>

        <nav
          style={{
            display: "flex",
            gap: "24px"
          }}
        >
          <NavLink
            to="/"
            end
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/cartelera"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Cartelera
          </NavLink>

          <NavLink
            to="/comida"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Comida
          </NavLink>

          <NavLink
            to="/otros"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Otros
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header