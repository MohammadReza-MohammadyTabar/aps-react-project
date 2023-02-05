import { useState } from "react";

function CoughtPokemon(props) {
  const [arr, setArr] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  function addArr() {
    pokemonNameInput && setArr([...arr, pokemonNameInput]);

    setPokemonNameInput("");
  }
  function handelInputChange(e) {
    setPokemonNameInput(e.target.value);
  }
  return (
    <div>
      <p>
        {arr.length}time is {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handelInputChange}
      />
      <button onClick={addArr}>click</button>
      <ul>
        {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}
export default CoughtPokemon;
