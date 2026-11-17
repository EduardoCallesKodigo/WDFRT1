import './App.css'
import ContadorClics from './components/ContadorClics'
import InputControlado from './components/InputControlado'
import MapKeyFilter from './components/MapKeyFilter'
import Tema from './components/Tema'

function App() {

  return (
    <div>
      <h1>Metodos  y Técnicas de React</h1>

      <Tema titulo="1. Componentes y props" />

      <Tema titulo="2. useState()" />
      <ContadorClics />

      <Tema titulo="3. Procesamiento de Listas, uso de Key y Filtrado" />
      <MapKeyFilter />

      <Tema titulo="4. Tener un Inpu controlado y una funcion como prop" />
      <InputControlado />
    </div>
  )
}

export default App
