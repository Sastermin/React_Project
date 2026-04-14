import "../styles/Button.css"

function Button({ text, onClick }) {
  return (
    <button
      //Evento de React: se ejecuta cuando el usuario hace click
      onClick={onClick}
      className="custom-btn"
    >
      {text}
    </button>
  )
}

//Exportamos el componente para poder reutilizarlo
export default Button