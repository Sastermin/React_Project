import Button from "../componentes/Button"

// Vista de detalle de una película
function Detalle({ pelicula, cambiarVista }) {
  if (!pelicula) {
    return <p style={{ textAlign: "center", padding: "24px" }}>No se seleccionó ninguna película.</p>
  }

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <Button text="← Volver a cartelera" onClick={() => cambiarVista("cartelera")} />
      <Button text="← Volver al inicio" onClick={() => cambiarVista("home")} />
      <Button text="← Volver a comida" onClick={() => cambiarVista("comida")} />

      <h2 style={{ marginTop: "16px" }}>{pelicula.title}</h2>

      <img
        src={pelicula.image}
        alt={pelicula.title}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{pelicula.sinopsis}</p>
    </main>
  );
}

// Exportamos la vista
export default Detalle
