// demo 7: boton  que hace que se ejecute un useEffect y otro que no
import { useState, useEffect } from 'react';

export default function VigiladoIgnorado() {
  const [clics, setClics] = useState(0); // SÍ está en las dependencias
  const [otrosClics, setOtrosClics] = useState(0); // NO está en las dependencias

  useEffect(() => {
    console.log(`📢 Efecto disparado. Clics vigilados: ${clics}`);
  }, [clics]); // <-- Solo vigila a `clics`. Ignora por completo a `otrosClics`.

  return (
    <div>
      {/* Botón 1: SÍ dispara el efecto */}
      <button onClick={() => setClics(clics + 1)}>Vigilado: {clics}</button>

      {/* Botón 2: NO dispara el efecto (pero la pantalla sí se actualiza) */}
      <button onClick={() => setOtrosClics(otrosClics + 1)}>Ignorado: {otrosClics}</button>
    </div>
  );
}