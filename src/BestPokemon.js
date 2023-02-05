function BestPokemon(p) {
  const abilities = ["salam mide", "gade boland", "mehrabone"];
  let abilitiesObj = p.abilities;
  return (
    <div>
      <p>my favorite pokemon is Amaura</p>
      <ul>
        {abilitiesObj.map((abitlity) => {
          return <li key={abitlity.id}>{abitlity.name}</li>;
        })}
        {abilities.map((abitlity, index) => {
          return <li key={index}>{abitlity}</li>;
        })}
      </ul>
    </div>
  );
}
export default BestPokemon;
