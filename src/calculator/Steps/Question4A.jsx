export default function Question4A() {
  return (
    <div className="font-italic text-muted">
      <h2 className="mb-4">¿Que distancia recorres aprox. al mes?</h2>
      <input
        type="number"
        name="carDistance"
        min="1"
        value={input.carDistance}
        onChange={handleInput}
        placeholder="Ingrese la cantidad"
      />
      <br />
      <Button
        className="my-3"
        variant="flat"
        size="lg"
        onClick={() => handleButton()}
      >
        Continuar
      </Button>
      <br />
      <Button variant="flat" size="sm" onClick={() => setLocation('start')}>
        Volver al Inicio
      </Button>
    </div>
  );
}
