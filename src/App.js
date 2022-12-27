import './App.css';
import { useState, useEffect } from 'react';
import Fetch from './components/Fetch';

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

  const list = pokemons.map(p => <Fetch key={p.name} url={p.url}/>)
  return (
    <div className="App">
        <h1>Pokemon Cards!</h1>
        <div className='list'>{list}</div>
    </div>
  );
}

export default App;
