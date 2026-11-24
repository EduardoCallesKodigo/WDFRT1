import { useState } from 'react';
import { Link } from 'react-router';

export default function HistorialRondas({ historial, nombreJugador, alLimpiar }) {
  const [filtro, setFiltro] = useState('todas');
  const alias = nombreJugador.trim() || 'Jugador';

  const rondasFiltradas = historial.filter((item) => {
    if (filtro === 'ganaste') return item.desenlace === 'ganaste';
    if (filtro === 'perdiste') return item.desenlace === 'perdiste';
    return true;
  });

  return (
    // <div className="card border-0 shadow rounded-4 p-4 bg-white"></div>
    <div className="card tarjeta-tablero rounded-4 p-4 bg-white">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3 pb-2 border-bottom">
        <div>
          <h2 className="h5 fw-bold mb-0">📜 Historial de Jugadas ({historial.length})</h2>
          <span className="small text-muted">Registro de duelos de {alias}</span>
        </div>

        <div className="d-flex gap-2">
          {historial.length > 0 && (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={alLimpiar}
            >
              Limpiar
            </button>
          )}
          <Link to="/" className="btn btn-sm btn-primary fw-semibold">
            ← Volver a la Arena
          </Link>
        </div>
      </div>

      {historial.length === 0 ? (
        <div className="text-center py-4">
          <p className="text-muted mb-3">Aún no has jugado ninguna ronda en esta sesión.</p>
          <Link to="/" className="btn btn-dark btn-sm">
            ¡Jugar mi primera ronda!
          </Link>
        </div>
      ) : (
        <>
          <div className="btn-group btn-group-sm mb-3" role="group">
            <button
              type="button"
              className={`btn ${filtro === 'todas' ? 'btn-dark' : 'btn-outline-dark'}`}
              onClick={() => setFiltro('todas')}
            >
              Todas ({historial.length})
            </button>
            <button
              type="button"
              className={`btn ${filtro === 'ganaste' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setFiltro('ganaste')}
            >
              Ganadas
            </button>
            <button
              type="button"
              className={`btn ${filtro === 'perdiste' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setFiltro('perdiste')}
            >
              Perdidas
            </button>
          </div>

          <div style={{ maxHeight: 310, overflowY: 'auto' }}>
            <ul className="list-group list-group-flush small">
              {rondasFiltradas.map((ronda) => (
                <li
                  key={ronda.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    <span className="text-muted me-2">[{ronda.hora}]</span>
                    {alias}: <strong>{ronda.jugador}</strong> vs CPU:{' '}
                    <strong>{ronda.cpu}</strong>
                  </span>
                  <span
                    className={`badge ${
                      ronda.desenlace === 'ganaste'
                        ? 'text-bg-success'
                        : ronda.desenlace === 'perdiste'
                        ? 'text-bg-danger'
                        : 'text-bg-warning'
                    }`}
                  >
                    {ronda.desenlace}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}