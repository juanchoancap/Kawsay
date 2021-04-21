import React, { useState } from "react";

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

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

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
          [page.start]: !page.start,
          [page.question1]: !page.question1,
        });
        setLocation("question1");
        break;
      case "question1":
        setPage({ ...page, [page.question1]: false, [page.question2]: true });
        setLocation("question2");
        console.log("mortadela2 es" + page.question1);

        break;
      case "question2":
        setPage({ ...page, [page.question2]: false, [page.question3]: true });
        setLocation("question3");
        break;
      case "question3":
        setPage({ ...page, [page.question3]: false, [page.question4]: true });
        setLocation("question4");
        break;
      case "question4":
        if (input.useCar) {
          setPage({
            ...page,
            [page.question4]: false,
            [page.question4A]: true,
          });
          setLocation("question4A");
        } else {
          setPage({ ...page, [page.question4]: false, [page.question5]: true });
          setLocation("question5");
        }
        break;
      case "question4A":
        setPage({ ...page, [page.question4A]: false, [page.question4B]: true });
        setLocation("question4B");
        break;
      case "question4B":
        setPage({ ...page, [page.question4B]: false, [page.question5]: true });
        setLocation("question5");
        break;
      case "question5":
        if (input.pc) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.0106,
          });
        }
        if (input.radio) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.029,
          });
        }
        if (input.impresora) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.4355,
          });
        }
        if (input.microondas) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.3097,
          });
        }
        if (input.dispenser) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.121,
          });
        }
        if (input.pava) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 1.1613,
          });
        }
        if (input.lavarropa) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.9481,
          });
        }
        if (input.heladera) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.0564,
          });
        }
        if (input.tv) {
          setInput({
            ...input,
            [input.electricTotal]: input.electricTotal + 0.0263,
          });
        }
        if (input.cocina) {
          setInput({ ...input, [input.gasTotal]: input.gasTotal + 0.0228 });
        }
        if (input.termotanque) {
          setInput({ ...input, [input.gasTotal]: input.gasTotal + 0.0228 });
        }
        if (input.estufa) {
          setInput({ ...input, [input.gasTotal]: input.gasTotal + 0.5558 });
        }
        let subTotal =
          (input.electricTotal * 6 * 365 +
            input.gasTotal * 4 * 365 +
            (input.carTotal * input.carDistance) / input.carShare) /
          input.people;
        setInput({ ...input, [input.total]: subTotal });
        if (input.publicTransport) {
          setPage({
            ...page,
            [page.question5]: false,
            [page.question5A]: true,
          });
          setLocation("question5A");
        } else {
          setPage({ ...page, [page.question5]: false, [page.result]: true });
          setLocation("result");
        }
        break;
      case "question5A":
        setPage({ ...page, [page.question5A]: false, [page.question5B]: true });
        setLocation("question5B");
        break;
      case "question5B":
        var quantity = 0;
        if (input.train) {
          quantity++;
          let train = ((0.005 * 50 * input.publicHours) / 737) * 240;
          setInput({
            ...input,
            [input.publicTotal]: input.publicTotal + train,
          });
        }
        if (input.subway) {
          quantity++;
          let subway = ((0.036 * 50 * input.publicHours) / 255) * 240;
          setInput({
            ...input,
            [input.publicTotal]: input.publicTotal + subway,
          });
        }
        if (input.bus) {
          quantity++;
          let bus = ((0.05 * 50 * input.publicHours) / 25) * 240;
          setInput({ ...input, [input.publicTotal]: input.publicTotal + bus });
        }
        if (input.taxi) {
          quantity++;
          let taxi = ((0.15 * 50 * input.publicHours) / 2) * 240;
          setInput({ ...input, [input.publicTotal]: input.publicTotal + taxi });
        }
        setInput({
          ...input,
          [input.total]: input.total + input.publicTotal / quantity,
        });
        setPage({ ...page, [page.question5B]: false, [page.result]: true });
        setLocation("result");
        break;
      default:
        setPage({ ...page, [page.result]: false, [page.start]: true });
        setLocation("start");
        break;
    }
  };
  return (
    <div>
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
      {page.question1 ? (
        <div>
          <h1>¿Sabias que la mortadela es piola?</h1>
        </div>
      ) : (
        <div />
      )}
      {page.question2 ? <div></div> : <div />}
      {page.question3 ? <div></div> : <div />}
      {page.question4 ? <div></div> : <div />}
      {page.question4A ? <div></div> : <div />}
      {page.question4B ? <div></div> : <div />}
      {page.question5 ? <div></div> : <div />}
      {page.question5A ? <div></div> : <div />}
      {page.question5B ? <div></div> : <div />}
      {page.result ? <div></div> : <div />}
    </div>
  );
}
