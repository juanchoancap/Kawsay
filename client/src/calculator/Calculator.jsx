import { useState } from "react";

export default function Calculator() {
  const [page, setPage] = useState({
    start: true,
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question4A: false,
    question4B: false,
    question5: false,
    question5A: false,
    question5B: false,
    result: false,
  });

  const [input, setInput] = useState({
    //electrico
    people: 1,
    pc: false,
    radio: false,
    impresora: false,
    microondas: false,
    dispenser: false,
    pava: false,
    lavarropa: false,
    heladera: false,
    tv: false,
    //gas
    cocina: false,
    termotanque: false,
    estufa: false,
    //auto
    useCar: false,
    carDistance: 0,
    carShare: 1,
    //transporte publico
    publicTransport: false,
    train: false,
    subway: false,
    bus: false,
    taxi: false,
    publicHours: 1,
    //totales
    publicTotal: 0,
    carTotal: 0,
    electricTotal: 0,
    gasTotal: 0,
    total: 0,
  });

  const [location, setLocation] = useState("start");

  const handleButton = () => {
    switch (location) {
      case "start":
        console.log("mortadela");
        setInput({
          people: 1,
          pc: false,
          radio: false,
          impresora: false,
          microondas: false,
          dispenser: false,
          pava: false,
          lavarropa: false,
          heladera: false,
          tv: false,
          cocina: false,
          termotanque: false,
          estufa: false,
          useCar: false,
          carDistance: 0,
          carShare: 1,
          publicTransport: false,
          train: false,
          subway: false,
          bus: false,
          taxi: false,
          publicHours: 1,
          publicTotal: 0,
          carTotal: 0,
          electricTotal: 0,
          gasTotal: 0,
          total: 0,
        });
        setPage({
          ...page,
          start: false,
          question1: true,
        });
        setLocation("question1");
        break;
      case "question1":
        setPage({ ...page, question1: false, question2: true });
        setLocation("question2");
        break;
      case "question2":
        setPage({ ...page, question2: false, question3: true });
        setLocation("question3");
        console.log(input.pc);
        break;
      case "question3":
        setPage({ ...page, question3: false, question4: true });
        setLocation("question4");
        break;
      case "question4":
        if (input.useCar) {
          setPage({
            ...page,
            question4: false,
            question4A: true,
          });
          setLocation("question4A");
        } else {
          setPage({ ...page, question4: false, question5: true });
          setLocation("question5");
        }
        break;
      case "question4A":
        setPage({ ...page, question4A: false, question4B: true });
        setLocation("question4B");
        break;
      case "question4B":
        setPage({ ...page, question4B: false, question5: true });
        setLocation("question5");
        break;
      case "question5":
        if (input.pc) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.0106,
          });
        }
        if (input.radio) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.029,
          });
        }
        if (input.impresora) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.4355,
          });
        }
        if (input.microondas) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.3097,
          });
        }
        if (input.dispenser) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.121,
          });
        }
        if (input.pava) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 1.1613,
          });
        }
        if (input.lavarropa) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.9481,
          });
        }
        if (input.heladera) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.0564,
          });
        }
        if (input.tv) {
          setInput({
            ...input,
            electricTotal: input.electricTotal + 0.0263,
          });
        }
        if (input.cocina) {
          setInput({ ...input, gasTotal: input.gasTotal + 0.0228 });
        }
        if (input.termotanque) {
          setInput({ ...input, gasTotal: input.gasTotal + 0.0228 });
        }
        if (input.estufa) {
          setInput({ ...input, gasTotal: input.gasTotal + 0.5558 });
        }
        let subTotal =
          (input.electricTotal * 6 * 365 +
            input.gasTotal * 4 * 365 +
            (input.carTotal * input.carDistance) / input.carShare) /
          input.people;
        setInput({ ...input, total: subTotal });
        if (input.publicTransport) {
          setPage({
            ...page,
            question5: false,
            question5A: true,
          });
          setLocation("question5A");
        } else {
          setPage({ ...page, question5: false, result: true });
          setLocation("result");
        }
        break;
      case "question5A":
        setPage({ ...page, question5A: false, question5B: true });
        setLocation("question5B");
        break;
      case "question5B":
        var quantity = 0;
        if (input.train) {
          quantity++;
          let train = ((0.005 * 50 * input.publicHours) / 737) * 240;
          setInput({
            ...input,
            publicTotal: input.publicTotal + train,
          });
        }
        if (input.subway) {
          quantity++;
          let subway = ((0.036 * 50 * input.publicHours) / 255) * 240;
          setInput({
            ...input,
            publicTotal: input.publicTotal + subway,
          });
        }
        if (input.bus) {
          quantity++;
          let bus = ((0.05 * 50 * input.publicHours) / 25) * 240;
          setInput({ ...input, publicTotal: input.publicTotal + bus });
        }
        if (input.taxi) {
          quantity++;
          let taxi = ((0.15 * 50 * input.publicHours) / 2) * 240;
          setInput({ ...input, publicTotal: input.publicTotal + taxi });
        }
        setInput({
          ...input,
          [input.total]: input.total + input.publicTotal / quantity,
        });
        setPage({ ...page, question5B: false, result: true });
        setLocation("result");
        break;
      default:
        setPage({ ...page, result: false, start: true });
        setLocation("start");
        break;
    }
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* start */}
      {page.start ? (
        <div>
          <h3>¡Bienvenido a Kawsay!</h3>
          <div>
            <h2>La huella del Carbono</h2>
            <h1>
              ¿Sabías que con nuestro estilo de vida moderno, cada persona
              genera alrededor de cuatro toneladas de CO2 al año?
            </h1>
            <h1>
              Una de las principales causas del calentamiento global es la
              emisión de gases de efecto invernadero, entre ellos y
              principalmente, el CO2. La marca que se deja sobre el medio
              ambiente con cada actividad que emite gases de efecto invernadero
              es conocida como huella de carbono.
            </h1>
            <h1>¿Te gustaria conocer tu huella de Carbono?</h1>
            <div>
              <button onClick={() => handleButton()}>Calcular</button>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      {/* question1 */}
      {page.question1 ? (
        <div>
          <h2>¿Con cuanta gente vives?</h2>
          <input
            type="number"
            name="people"
            value={input.people}
            onChange={handleInput}
            placeholder="Ingrese la cantidad"
          />
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {/* question2 */}
      {page.question2 ? (
        <div>
          <h2>¿Cuales de estos electrodomesticos utilizas?</h2>
          <h1>(puede marcar tantos como quiera)</h1>
          <div>
            <input
              type="checkbox"
              name="pc"
              value={input.pc}
              checked={input.pc}
              defaultChecked={false}
              onClick={() => setInput({ ...input, pc: !input.pc })}
            />
            PC
          </div>
          <div>
            <input
              type="checkbox"
              name="radio"
              value={input.radio}
              checked={input.radio}
              defaultChecked={false}
              onClick={() => setInput({ ...input, radio: !input.radio })}
            />
            Radio
          </div>
          <div>
            <input
              type="checkbox"
              name="impresora"
              value={input.impresora}
              checked={input.impresora}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, impresora: !input.impresora })
              }
            />
            Impresora
          </div>
          <div>
            <input
              type="checkbox"
              name="microondas"
              value={input.microondas}
              checked={input.microondas}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, microondas: !input.microondas })
              }
            />
            Microondas
          </div>
          <div>
            <input
              type="checkbox"
              name="dispenser"
              value={input.dispenser}
              checked={input.dispenser}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, dispenser: !input.dispenser })
              }
            />
            Dispenser
          </div>
          <div>
            <input
              type="checkbox"
              name="pava"
              value={input.pava}
              checked={input.pava}
              defaultChecked={false}
              onClick={() => setInput({ ...input, pava: !input.pava })}
            />
            Pava electrica
          </div>
          <div>
            <input
              type="checkbox"
              name="lavarropa"
              value={input.lavarropa}
              checked={input.lavarropa}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, lavarropa: !input.lavarropa })
              }
            />
            Lavarropa
          </div>
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {/* question 3 */}
      {page.question3 ? (
        <div>
          <h2>¿Cuales de estos utilizas con frecuencia?</h2>
          <h1>(puede marcar tantos como quiera)</h1>
          <div>
            <input
              type="checkbox"
              name="cocina"
              value={input.cocina}
              checked={input.cocina}
              defaultChecked={false}
              onClick={() => setInput({ ...input, cocina: !input.cocina })}
            />
            Cocina
          </div>
          <div>
            <input
              type="checkbox"
              name="termotanque"
              value={input.termotanque}
              checked={input.termotanque}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, termotanque: !input.termotanque })
              }
            />
            Termotanque
          </div>
          <div>
            <input
              type="checkbox"
              name="estufa"
              value={input.estufa}
              checked={input.estufa}
              defaultChecked={false}
              onClick={() => setInput({ ...input, estufa: !input.estufa })}
            />
            Estufa
          </div>
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {/* question 4 */}
      {page.question4 ? (
        <div>
          <h2>¿Tenes vehiculo propio?</h2>
          <input
            type="checkbox"
            name="useCar"
            value={input.useCar}
            checked={input.useCar}
            defaultChecked={false}
            onClick={() => setInput({ ...input, useCar: !input.useCar })}
          />
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {/* question 4A */}
      {page.question4A ? (
        <div>
          <h2>¿Que distancia recorres aprox. al mes?</h2>
          <input
            type="number"
            name="carDistance"
            value={input.carDistance}
            onChange={handleInput}
            placeholder="Ingrese la cantidad"
          />
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {page.question4B ? (
        <div>
          <h2>¿Cuantas personas comparten tu auto habitualmente?</h2>
          <input
            type="number"
            name="carShare"
            value={input.carShare}
            onChange={handleInput}
            placeholder="Ingrese la cantidad"
          />
          <button onClick={() => handleButton()}>Continuar</button>
        </div>
      ) : (
        <div />
      )}
      {page.question5 ? <div></div> : <div />}
      {page.question5A ? <div></div> : <div />}
      {page.question5B ? <div></div> : <div />}
      {page.result ? <div></div> : <div />}
    </div>
  );
}
