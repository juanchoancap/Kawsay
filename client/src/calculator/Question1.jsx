import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Question1() {
  const [input, setInput] = useState({ people: "" });
  const { push } = useHistory();
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h2>¿Con cuanta gente vives?</h2>
      <input
        name="people"
        onChange={handleChange}
        value={input.people}
        placeholder="Ingrese la cantidad"
      />
      <button
        onClick={() =>
          push({
            pathname: "/calculator/question2",
            state: { people: input.people },
          })
        }
      >
        Continuar
      </button>
    </div>
  );
}
