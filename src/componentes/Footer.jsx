function Footer({ cambiarVista }) {
  return (
    <footer style={{
      backgroundColor: "#0d1b2a",
      color: "#a8b2c8",
      padding: "40px 32px 20px",
      fontFamily: "system-ui, sans-serif",
    }}>

      {/* Columnas */}
      <div style={{ display: "flex", gap: "64px", flexWrap: "wrap", marginBottom: "32px" }}>

        {/* Cartelera */}
        <div>
          <h4 style={{ color: "#fff", margin: "0 0 12px" }}>Cartelera</h4>
          <p style={{ margin: "6px 0" }}>Próximos estrenos</p>
          <p style={{ margin: "6px 0" }}>En cartelera</p>
          <p style={{ margin: "6px 0" }}>Preventas</p>
        </div>

        {/* Legales */}
        <div>
          <h4
            style={{ color: "#fff", margin: "0 0 12px", cursor: "pointer" }}
            onClick={() => cambiarVista("legales")}
          >
            Legales
          </h4>
          <p style={{ margin: "6px 0" }}>Términos y condiciones</p>
          <p style={{ margin: "6px 0" }}>Aviso de privacidad</p>
        </div>

        {/* Contacto */}
        <div>
          <h4 style={{ color: "#fff", margin: "0 0 12px" }}>Contacto</h4>
          <p style={{ margin: "6px 0" }}>contacto@cineprueba.com</p>
          <p style={{ margin: "6px 0" }}>Tel. 552 122 6060</p>
        </div>

      </div>

      {/* Línea divisoria y copyright */}
      <hr style={{ borderColor: "#1e3048", margin: "0 0 16px" }} />
      <p style={{ margin: 0, fontSize: "0.8rem", color: "#5a6a80" }}>
        © 2026 CinePrueba — Proyecto educativo
      </p>

    </footer>
  )
}

export default Footer
