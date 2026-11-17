import { useState } from "react";

const RONDAS = [
  {id: 1, desenlace: 'ganaste'},
  {id: 2, desenlace: 'perdiste'},
  {id: 3, desenlace: 'ganaste'}
];

function MapKeyFilter() {
  
  const [filtro, setFiltro] = useState('todas')
  const visibles = filtro === 'todas' ? RONDAS : RONDAS.filter(
    (r) => r.desenlace === filtro
  );
  
  return (
    <div>
      <button onClick={ () => setFiltro('ganaste') }>Ganadas</button>
      <button onClick={ () => setFiltro('perdiste') }>Perdidas</button>
      <button onClick={ () => setFiltro('todas') }>Todas</button>
      <ul>
        {visibles.map( (r) => <li key={r.id}>{r.id}: {r.desenlace}</li> )}
      </ul>
    </div>
  )
}

export default MapKeyFilter