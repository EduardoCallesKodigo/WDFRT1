import { useState } from "react"

function Entrada({ valor, alCambiar }) {
  return <input 
            aria-label="nombre"
            type="text"
            value={valor}
            onChange={(e) => alCambiar( e.target.value )}/>
}

const InputControlado = () => {
  //Aqui voy a necesitar mis useState()
  const [nombre, setNombre] = useState('')
  const etiqueta = nombre.trim() || 'Jugador';

  return (
    <div>
      <Entrada valor={nombre} alCambiar={setNombre} />
      <p>Hola {etiqueta}</p>
    </div>
  )
}

export default InputControlado