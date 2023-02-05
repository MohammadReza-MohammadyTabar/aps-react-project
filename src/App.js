import CoughtPokemon from "./CoughtPokemon";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
// import PokemonMoves from "./PokemonMoves";
// import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
// const Pokedex = "mohammad";
const abilitiesObj = [
  { id: 0, name: "salam mide" },
  { id: 1, name: "gade boland" },
  { id: 2, name: "mehrabone" },
];

const date = new Date().toDateString();

function App() {
  function logWhenClicked() {
    console.log("logWhenClicked");
  }
  return (
    <div>
      <Logo appName="mohammad" handelClick={logWhenClicked} />

      <BestPokemon abilities={abilitiesObj} />
      <CoughtPokemon date={date} />
      {/* <PokemonMovesSelector /> */}
      <PokemonCity />
    </div>
  );
}

export default App;
