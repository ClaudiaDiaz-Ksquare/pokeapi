import './App.css';
import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
  const getPokemons = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0"');
      const pokemonData = await res.json();
      setPokemons(pokemonData.results)
      // console.log(pokemonData.results)
    }
    getPokemons();
  }, [])


  return (
    <div className="App">
        <PokemonList pokemons={pokemons}/>
        {/* {pokemons} */}
        {/* <Fetch url='https://pokeapi.co/api/v2/pokemon/1'/> */}
    </div>
  );
}

export default App;
