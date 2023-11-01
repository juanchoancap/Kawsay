export default function Question5B() {
  return (
    <div className="font-italic text-muted">
      <h2 className="mb-4">
        ¿Cuantas horas diarias viajas en transporte publico?
      </h2>
      <input
        type="number"
        name="publicHours"
        min="1"
        value={input.publicHours}
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
