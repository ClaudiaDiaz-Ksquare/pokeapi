import React from 'react';
import Fetch from './Fetch';

const PokemonList = ({pokemons}) => {

  return (
    <div>
        {/* {pokemons.map(p => <div key={p.name}>{p.name}</div>)} */}
        {pokemons.map(p => <li key={p.name}>{p.name} <Fetch url={p.url}/> </li>)}
    </div>
  )
}

export default PokemonList;