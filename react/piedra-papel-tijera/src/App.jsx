import FormularioJugador from './components/FormularioJugador'
import TablaMarcador from './components/TablaMarcador'
import ArenaDuelo from './components/ArenaDuelo'
import HistorialRondas from './components/HistorialRondas'
import './App.css'

function App() {
  return (
    <div>
      <h1>Soy App</h1>
      <FormularioJugador />
      <TablaMarcador />
      <ArenaDuelo />
      <HistorialRondas />
    </div>
  )
}

export default App