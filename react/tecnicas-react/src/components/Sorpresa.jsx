import { useEffect, useState } from "react"


function Sorpresa() {
  const [visible, setVisible] = useState(false);

  useEffect( () => {
    const id = setTimeout(() => {setVisible(true)}, 2000); // Al llegar a 2 seg visible = true

    return () => clearTimeout(id)
  }, []);

  return (
    <p>{ visible ? '🎉 Sorpresa!' : 'Espera ... 🙈' }</p>
  )
}

export default Sorpresa