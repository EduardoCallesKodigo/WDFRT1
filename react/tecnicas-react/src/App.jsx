import './App.css'
import AlMontar from './components/AlMontar'
import ConDependencias from './components/ConDependencias'
import Sorpresa from './components/Sorpresa'
// import ContadorClics from './components/ContadorClics'
// import InputControlado from './components/InputControlado'
// import MapKeyFilter from './components/MapKeyFilter'
import Tema from './components/Tema'
import VigiladoIgnorado from './components/VigiladoIgnorado'

function App() {

  return (
    <div>
      <h1>Metodos  y Técnicas de React</h1>

      {/* <Tema titulo="1. Componentes y props" />

      <Tema titulo="2. useState()" />
      <ContadorClics />

      <Tema titulo="3. Procesamiento de Listas, uso de Key y Filtrado" />
      <MapKeyFilter />

      <Tema titulo="4. Tener un Inpu controlado y una funcion como prop" />
      <InputControlado /> */}

      <hr />
      <Tema titulo={"5. Demo de useEffect al caragar y ejecutarsolo una vez"} />
      <AlMontar />

      <Tema titulo={"6. Demo de useEffect con dependencia de una variable"} />
      <ConDependencias />

      <Tema titulo={"7. Demo de useEffect: un boton hace que se ejecute el efecto y el otro no"} />
      <VigiladoIgnorado />

      <Tema titulo={"8. Demo de useEffect: Despues de una cantidad de tiempo cambia"} />
      <Sorpresa />
    </div>
  )
}

export default App
