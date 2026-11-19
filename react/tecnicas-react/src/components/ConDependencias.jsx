import { useEffect, useState } from "react"

function ConDependencias() {

  const [clics, setClics] = useState(0);
  
  useEffect( () => {
    console.log(`El boton que cuenta clics se presiono, ahora clics = ${clics}`);
  }, [clics]);

  return (
    <button onClick={() => setClics( clics + 1 )} >Clics: {clics}</button>
  )
}

export default ConDependencias