function Button({ text, onClick }) {
  return (
    <button
      //Evento de React: se ejecuta cuando el usuario hace click
      onClick={onClick}
      style={{
        padding: "10px 16px",
        backgroundColor: "#ffc107",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "8px"
      }}
    >
      {text}
    </button>
  )
}

//Exportamos el componente para poder reutilizarlo
export default Button