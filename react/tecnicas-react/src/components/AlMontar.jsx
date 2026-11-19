import { useEffect } from "react"

// Demo 1: useEffect
function AlMontar() {
  
  useEffect ( () => {
    console.log('Hola, el div ya se renerizo en la pantalla.');
  }, []);
  
  return (
    <div>AlMontar</div>
  )
}

export default AlMontar