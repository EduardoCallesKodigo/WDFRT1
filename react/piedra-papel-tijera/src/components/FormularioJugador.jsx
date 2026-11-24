export default function FormularioJugador({ nombre, alCambiarNombre }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mb-3">
      <label htmlFor="nombreJugador" className="form-label small text-muted mb-1">
        Tu nombre de jugador:
      </label>
      <input
        id="nombreJugador"
        type="text"
        className="form-control form-control-sm"
        placeholder="Escribe tu nombre..."
        maxLength={20}
        value={nombre}
        onChange={(e) => alCambiarNombre(e.target.value)}
      />
    </form>
  );
}