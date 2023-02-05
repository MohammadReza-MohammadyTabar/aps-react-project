import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");
  function handelCityNameChange(e) {
    setCity(e.target.value);
  }
  return (
    <div>
      <input type="text" value={city} onChange={handelCityNameChange} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
