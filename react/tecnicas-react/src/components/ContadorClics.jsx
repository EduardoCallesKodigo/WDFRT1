// Uso de variables useState

import { useState } from 'react'

function ContadorClics() {
  
  const [clics, setClics] = useState(0)
  
  const sumarClics = () => {
    setClics(clics + 1);
    return clics;
  }
  
  // Renderizado
  return (
    <div>
      <p>Cuantos clics van: {clics}</p>
      {/* <button onClick={ () => setClics( (dato) => dato + 1 ) }>Contar clics</button> */}
      <button onClick={ sumarClics }>Contar clics</button>
      <button onClick={ () => setClics(0) } >Reiniciar</button>
    </div>
  )
}

export default ContadorClics