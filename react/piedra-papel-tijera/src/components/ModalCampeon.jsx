import { useNavigate } from 'react-router';
import florkFeliz from '../assets/flork-feliz.png';
import florkMolesto from '../assets/flork-molesto.png';

export default function ModalCampeon({ ganador, nombreJugador, marcador, alReiniciar }) {
  const navigate = useNavigate();

  if (!ganador) return null;

  const ganoHumano = ganador === 'jugador';
  const alias = nombreJugador.trim() || 'Jugador';

  const verHistorial = () => {
    alReiniciar();
    navigate('/historial');
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg rounded-4 text-center p-3">
          <div className="modal-body">
            <img
              src={ganoHumano ? florkFeliz : florkMolesto}
              alt="Fin de la partida"
              className="rounded-3 mb-3"
              style={{ width: 120, height: 120, objectFit: 'contain' }}
            />
            <h2 className="h4 fw-bold">
              {ganoHumano ? `🏆 ¡${alias} es el campeón!` : '🤖 ¡La CPU ganó la serie!'}
            </h2>
            <p className="text-muted mb-3">
              Marcador final: <strong>{marcador.jugador}</strong> a{' '}
              <strong>{marcador.cpu}</strong>
            </p>

            <div className="d-flex justify-content-center gap-2">
              <button
                type="button"
                className="btn btn-primary fw-semibold"
                onClick={alReiniciar}
              >
                🔄 Jugar revancha
              </button>
              <button
                type="button"
                className="btn btn-outline-dark fw-semibold"
                onClick={verHistorial}
              >
                📜 Ir al historial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}