import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer-container">

      {/* Columnas */}
      <div className="footer-columns">

        {/* Cartelera */}
        <div>
          <h4 className="footer-column-title">
            <Link to="/cartelera" className="footer-link">Cartelera</Link>
          </h4>
          <p className="footer-text">Próximos estrenos</p>
          <p className="footer-text">En cartelera</p>
          <p className="footer-text">Preventas</p>
        </div>

        {/* Legales */}
        <div>
          <h4 className="footer-column-title-pointer">
            <Link to="/legales" className="footer-link">Legales</Link>
          </h4>
          <p className="footer-text">Términos y condiciones</p>
          <p className="footer-text">Aviso de privacidad</p>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="footer-column-title">Contacto</h4>
          <p className="footer-text">contacto@cineprueba.com</p>
          <p className="footer-text">Tel. 552 122 6060</p>
        </div>

      </div>

      {/* Línea divisoria y copyright */}
      <hr className="footer-divider" />
      <p className="footer-copyright">
        © 2026 CinePrueba — Proyecto educativo
      </p>

    </footer>
  )
}

export default Footer
