import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default function Question2(props) {
  const location = useLocation();
  const { push } = useHistory();
  const [input, setInput] = useState({
    pc: false,
    radio: false,
    impresora: false,
    microondas: false,
    dispenser: false,
    pava: false,
    lavarropa: false,
    heladera: false,
    tv: false,
    people: location.state.people,
    total: 0,
  });

  return (
    <div>
      <h2>¿Cuales de estos electrodomesticos utilizas?</h2>
      <h1>(puede marcar tantos como quiera)</h1>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.pc]: !input.pc })}
        checked={false}
      >
        PC
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.radio]: !input.radio })}
        checked={false}
      >
        Radio
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.impresora]: !input.impresora })}
        checked={false}
      >
        Impresora
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.microondas]: !input.microondas })}
        checked={false}
      >
        Microondas
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.dispenser]: !input.dispenser })}
        checked={false}
      >
        Dispenser
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.pava]: !input.pava })}
        checked={false}
      >
        Pava electrica
      </input>
      <input
        type="checkbox"
        onClick={setInput({ ...input, [input.lavarropa]: !input.lavarropa })}
        checked={false}
      >
        Lavarropa
      </input>
    </div>
  );
}
