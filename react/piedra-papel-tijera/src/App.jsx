import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router';
import imgTitulo3D from './assets/titulo-3d.png';
import TablaMarcador from './components/TablaMarcador.jsx';
import ArenaDuelo from './components/ArenaDuelo.jsx';
import HistorialRondas from './components/HistorialRondas.jsx';
import ModalCampeon from './components/ModalCampeon.jsx';

const OPCIONES = [
  { id: 'piedra', nombre: 'Piedra', emoji: '✊🏼', venceA: 'tijera' },
  { id: 'papel', nombre: 'Papel', emoji: '✋🏼', venceA: 'piedra' },
  { id: 'tijera', nombre: 'Tijera', emoji: '✌🏼', venceA: 'papel' },
];

const PUNTOS_META = 3;

export default function App() {
  const [nombreJugador, setNombreJugador] = useState('Jugador');
  const [jugadaJugador, setJugadaJugador] = useState(null);
  const [jugadaCPU, setJugadaCPU] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [pensando, setPensando] = useState(false);
  const [marcador, setMarcador] = useState({ jugador: 0, cpu: 0, empates: 0 });
  const [historial, setHistorial] = useState([]);

  const ganadorSerie =
    marcador.jugador >= PUNTOS_META
      ? 'jugador'
      : marcador.cpu >= PUNTOS_META
      ? 'cpu'
      : null;

  useEffect(() => {
    const alias = nombreJugador.trim() || 'Jugador';
    document.title = `${alias} ${marcador.jugador} - ${marcador.cpu} CPU | PPT`;
  }, [marcador, nombreJugador]);

  useEffect(() => {
    if (!pensando || !jugadaJugador) return;

    const temporizador = setTimeout(() => {
      const elegidaCPU = OPCIONES[Math.floor(Math.random() * OPCIONES.length)];
      setJugadaCPU(elegidaCPU);

      let desenlace = 'empate';
      if (jugadaJugador.venceA === elegidaCPU.id) {
        desenlace = 'ganaste';
        setMarcador((prev) => ({ ...prev, jugador: prev.jugador + 1 }));
      } else if (elegidaCPU.venceA === jugadaJugador.id) {
        desenlace = 'perdiste';
        setMarcador((prev) => ({ ...prev, cpu: prev.cpu + 1 }));
      } else {
        setMarcador((prev) => ({ ...prev, empates: prev.empates + 1 }));
      }

      setResultado(desenlace);
      setHistorial((prev) => [
        {
          id: crypto.randomUUID(),
          hora: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          jugador: `${jugadaJugador.emoji} ${jugadaJugador.nombre}`,
          cpu: `${elegidaCPU.emoji} ${elegidaCPU.nombre}`,
          desenlace,
        },
        ...prev,
      ]);
      setPensando(false);
    }, 1400);

    return () => clearTimeout(temporizador);
  }, [pensando, jugadaJugador]);

  const elegirOpcion = (opcion) => {
    if (ganadorSerie) return;
    setJugadaJugador(opcion);
    setJugadaCPU(null);
    setResultado(null);
    setPensando(true);
  };

  const reiniciarPartida = () => {
    setJugadaJugador(null);
    setJugadaCPU(null);
    setResultado(null);
    setPensando(false);
    setMarcador({ jugador: 0, cpu: 0, empates: 0 });
  };

  return (
    <div className="fondo-juego min-vh-100 d-flex flex-column">
      <nav className="navbar bg-white border-bottom shadow-sm py-2">
        <div className="container" style={{ maxWidth: 960 }}>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-bold text-dark">✊🏼✋🏼✌🏼 PPT Arena</span>
            <span className="badge rounded-pill text-bg-light border text-muted">
              Primero a {PUNTOS_META} pts
            </span>
          </div>

          <div className="d-flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `btn btn-sm fw-semibold ${isActive ? 'btn-dark' : 'btn-outline-dark'}`
              }
            >
              🎮 Jugar
            </NavLink>
            <NavLink
              to="/historial"
              className={({ isActive }) =>
                `btn btn-sm fw-semibold ${isActive ? 'btn-dark' : 'btn-outline-dark'}`
              }
            >
              📜 Historial{' '}
              <span className="badge text-bg-primary ms-1">{historial.length}</span>
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="container my-auto py-2" style={{ maxWidth: 960 }}>
        <div className="text-center mb-3">
          <img
            src={imgTitulo3D}
            alt="Piedra Papel o Tijera"
            className="titulo-3d-flotante img-fluid"
            style={{ maxHeight: 120 }}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="card tarjeta-tablero rounded-4 p-3 p-md-4 bg-white">
                <div className="row g-4 align-items-center">
                  <div className="col-md-5">
                    <div className="mb-3">
                      <label
                        htmlFor="nombreJugador"
                        className="form-label small text-muted fw-semibold mb-1"
                      >
                        Tu nombre de jugador:
                      </label>
                      <input
                        id="nombreJugador"
                        type="text"
                        className="form-control form-control-sm"
                        maxLength={18}
                        value={nombreJugador}
                        onChange={(e) => setNombreJugador(e.target.value)}
                      />
                    </div>

                    <TablaMarcador nombreJugador={nombreJugador} marcador={marcador} />

                    <p className="text-muted small fw-semibold mb-2">Elige tu jugada:</p>
                    <div className="row g-2 mb-3">
                      {OPCIONES.map((opcion) => {
                        const seleccionada = jugadaJugador?.id === opcion.id;
                        return (
                          <div key={opcion.id} className="col-4">
                            <button
                              type="button"
                              onClick={() => elegirOpcion(opcion)}
                              disabled={pensando || Boolean(ganadorSerie)}
                              className={`btn w-100 py-2 d-flex flex-column align-items-center gap-1 rounded-3 ${
                                seleccionada ? 'btn-primary shadow-sm' : 'btn-outline-dark'
                              }`}
                            >
                              <span style={{ fontSize: '2.1rem', lineHeight: 1.1 }}>
                                {opcion.emoji}
                              </span>
                              <span className="small fw-semibold">{opcion.nombre}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm w-100"
                      onClick={reiniciarPartida}
                    >
                      🗑️ Reiniciar marcador
                    </button>
                  </div>

                  <div className="col-md-7">
                    <ArenaDuelo
                      nombreJugador={nombreJugador}
                      jugadaJugador={jugadaJugador}
                      jugadaCPU={jugadaCPU}
                      resultado={resultado}
                      pensando={pensando}
                    />
                  </div>
                </div>
              </div>
            }
          />

          <Route
            path="/historial"
            element={
              <HistorialRondas
                historial={historial}
                nombreJugador={nombreJugador}
                alLimpiar={() => setHistorial([])}
              />
            }
          />
        </Routes>
      </main>

      <footer className="text-center text-white small pb-2 px-3">
        Imágenes de Flork: © TINKART Studios (
        <a
          href="https://www.instagram.com/tinkart_draw/"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          @tinkart_draw
        </a>
        ). Uso educativo, sin fines comerciales.
      </footer>

      <ModalCampeon
        ganador={ganadorSerie}
        nombreJugador={nombreJugador}
        marcador={marcador}
        alReiniciar={reiniciarPartida}
      />
    </div>
  );
}
