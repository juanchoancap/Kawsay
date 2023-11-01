import React, { useState } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import {
  Question1,
  Question2,
  Question3,
  Question4,
  Question4A,
  Question4B,
  Start,
} from './Steps';

export default function Calculator() {
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
    carDistance: 1,
    carShare: 1,
    //transporte publico
    publicTransport: false,
    train: false,
    subway: false,
    bus: false,
    taxi: false,
    publicHours: 1,
    //totales

    total: 1,
  });

  const [location, setLocation] = useState('start');

  const handleButton = () => {
    switch (location) {
      case 'start':
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
          carDistance: 1,
          carShare: 1,
          publicTransport: false,
          train: false,
          subway: false,
          bus: false,
          taxi: false,
          publicHours: 1,

          total: 1,
        });
        setLocation('question1');
        break;
      case 'question1':
        setLocation('question2');
        break;
      case 'question2':
        setLocation('question3');
        break;
      case 'question3':
        setLocation('question4');
        break;
      case 'question4':
        if (input.useCar) {
          setLocation('question4A');
        } else {
          setLocation('question5');
        }
        break;
      case 'question4A':
        setLocation('question4B');
        break;
      case 'question4B':
        setLocation('question5');
        break;
      case 'question5':
        var edesur = 0;
        var metrogas = 0;
        if (input.pc) {
          edesur += 0.0106;
        }
        if (input.radio) {
          edesur += 0.029;
        }
        if (input.impresora) {
          edesur += 0.4355;
        }
        if (input.microondas) {
          edesur += 0.3097;
        }
        if (input.dispenser) {
          edesur += 0.121;
        }
        if (input.pava) {
          edesur += 1.1613;
        }
        if (input.lavarropa) {
          edesur += 0.9481;
        }
        if (input.heladera) {
          edesur += 0.0564;
        }
        if (input.tv) {
          edesur += 0.0263;
        }
        if (input.cocina) {
          metrogas += 0.0228;
        }
        if (input.termotanque) {
          metrogas += 0.0228;
        }
        if (input.estufa) {
          metrogas += 0.5558;
        }

        var sub = (edesur * 6 * 365 + metrogas * 4 * 365) / input.people;

        if (input.useCar) {
          sub += (0.15 * input.carDistance) / 12 / input.carShare;
        }

        setInput({
          ...input,
          total: sub,
        });
        if (input.publicTransport) {
          setLocation('question5A');
        } else {
          setLocation('result');
        }
        break;
      case 'question5A':
        setLocation('question5B');
        break;
      case 'question5B':
        var quantity = 0;
        var totalPublic = 0;
        if (input.train) {
          quantity++;
          totalPublic += ((0.005 * 50 * input.publicHours) / 737) * 240;
        }
        if (input.subway) {
          quantity++;
          totalPublic += ((0.036 * 50 * input.publicHours) / 255) * 240;
        }
        if (input.bus) {
          quantity++;
          totalPublic += ((0.05 * 50 * input.publicHours) / 25) * 240;
        }
        if (input.taxi) {
          quantity++;
          totalPublic += ((0.15 * 50 * input.publicHours) / 2) * 240;
        }
        if (quantity > 0) {
          totalPublic = totalPublic / quantity;
        }
        totalPublic += input.total;
        setInput({
          ...input,
          total: totalPublic.toFix(2),
        });

        setLocation('result');
        break;
      default:
        setLocation('start');
        break;
    }
  };

  const handleInput = (e) => {
    if (e.target.value < 1) {
      setInput({
        ...input,
        [e.target.name]: 1,
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <Jumbotron
        className="cover"
        style={{ backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")` }}
      >
        {/* start */}
        {location === 'start' ? <Start /> : <div />}
        {/* question1 */}
        {location === 'question1' ? <Question1 /> : <div />}
        {/* question2 */}
        {location === 'question2' ? <Question2 /> : <div />}
        {/* question 3 */}
        {location === 'question3' ? <Question3 /> : <div />}
        {/* question 4 */}
        {location === 'question4' ? <Question4 /> : <div />}
        {/* question 4A */}
        {location === 'question4A' ? <Question4A /> : <div />}
        {/* question 4B */}
        {location === 'question4B' ? <Question4B /> : <div />}
        {/* question 5 */}
        {location === 'question5' ? (
          <div className="font-italic text-muted">
            <h2 className="mb-4">¿Usas con frecuencia transporte publico?</h2>
            <input
              type="checkbox"
              name="publicTransport"
              value={input.publicTransport}
              checked={input.publicTransport}
              defaultChecked={false}
              onClick={() =>
                setInput({ ...input, publicTransport: !input.publicTransport })
              }
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
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation('start')}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question 5A */}
        {location === 'question5A' ? (
          <div className="font-italic text-muted">
            <h2>¿Cuales de estos transportes utilizas con frecuencia?</h2>
            <h4 className="mb-4">(puede marcar tantos como quiera)</h4>
            <div>
              <input
                type="checkbox"
                name="bus"
                value={input.bus}
                checked={input.bus}
                defaultChecked={false}
                onClick={() => setInput({ ...input, bus: !input.bus })}
                className="mx-2"
              />
              Bus
            </div>
            <div>
              <input
                type="checkbox"
                name="subway"
                value={input.subway}
                checked={input.subway}
                defaultChecked={false}
                onClick={() => setInput({ ...input, subway: !input.subway })}
                className="mx-2"
              />
              Subte
            </div>
            <div>
              <input
                type="checkbox"
                name="train"
                value={input.train}
                checked={input.train}
                defaultChecked={false}
                onClick={() => setInput({ ...input, train: !input.train })}
                className="mx-2"
              />
              Tren
            </div>
            <Button
              className="my-3"
              variant="flat"
              size="lg"
              onClick={() => handleButton()}
            >
              Continuar
            </Button>
            <br />
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation('start')}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {/* question 5B */}
        {location === 'question5B' ? (
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
            <Button
              variant="flat"
              size="sm"
              onClick={() => setLocation('start')}
            >
              Volver al Inicio
            </Button>
          </div>
        ) : (
          <div />
        )}
        {location === 'result' ? (
          <div className="font-italic text-muted">
            <h3 className="mb-4">
              El Resultado es: {input.total} Toneladas anuales de emision de
              huella de carbono.
            </h3>
            <p className="parH pb-3 pl-2">
              <h6 className="font-weight-bold ">
                ¿Sabías que los árboles funcionan como termorreguladores
                capturando estas emisiones de co2?
              </h6>{' '}
              Se calcula que una hectárea de bosque mayor a 20 años puede llegar
              a capturar las emisiones generadas por una persona por año.
              <div>
                <p className="parH mb-n3 mt-3 py-3 pl-2">
                  <h5 className="font-weight-bold">
                    ¿Qué esperas para mitigar tu huella de carbono? Podés
                    empezar ahora.
                  </h5>
                </p>
                <div className="ml-5 mt-2">
                  <Button
                    variant="flat"
                    size="lg"
                    onClick={() => handleButton()}
                  >
                    Siguiente
                  </Button>
                  <Button
                    size="lg"
                    variant="flat"
                    onClick={() => handleButton()}
                  >
                    Reiniciar
                  </Button>
                </div>
              </div>
            </p>
          </div>
        ) : (
          <div />
        )}
      </Jumbotron>
    </>
  );
}
