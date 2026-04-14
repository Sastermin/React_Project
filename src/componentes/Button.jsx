import "../styles/Button.css"

function Button({ text, onClick }) {
  return (
    <button
      //Usuario hace click
      onClick={onClick}
      className="custom-btn"
    >
      {text}
    </button>
  )
}


export default Button