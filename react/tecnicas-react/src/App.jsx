import './App.css'
import AlMontar from './components/AlMontar'
import ConDependencias from './components/ConDependencias'
import Sorpresa from './components/Sorpresa'
import ContadorClics from './components/ContadorClics'
// import InputControlado from './components/InputControlado'
// import MapKeyFilter from './components/MapKeyFilter'
import Tema from './components/Tema'
import VigiladoIgnorado from './components/VigiladoIgnorado'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function VistaInicio() {

  return (
    <div>
      <h2> Pantalla Principal</h2>
      <Link to='/acerca'>Ir a la información</Link>
      <Link to='/contador'>Ir a ContadorClics</Link>
    </div>
  );
}

function VistaAcercaDe() {
  
  const navigate = useNavigate();

  return(
    <div>
      <h2> Acerca del Proyecto</h2>
      <button onClick={ () => navigate('/contador') }> Regresar</button>
    </div>
  );
}

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<VistaInicio />} />
        <Route path="/acerca" element={<VistaAcercaDe />} />
        <Route path='/contador' element={ <ContadorClics /> } />
      </Routes>


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
