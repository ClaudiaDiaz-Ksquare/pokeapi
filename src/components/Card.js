// import Fetch from './Fetch';
import React from 'react';
import PokemonList from './PokemonList';
import { useState, useEffect } from 'react';

const Card = ({pokee}) => {
    // const pokemons = <Fetch url={url}/> // Fetch(url);
    // const pokee = <PokemonList pokemons={pokemons}/>// Fetch(url);
    // const {pokemonData} = pokemons;


    return(
        <div>
        <div className='card' style={{width:'14rem'}}>
            <div className='card-header'>
                <h5 className='card-title'>{pokee.id}</h5>
            </div>
            <div className='card-body'>
                <img src={pokee.sprites.front_default} alt='pokemon'/>
            </div>
            <div className='card-footer'>
                <p className='card-text'>{pokee.forms[0].name}</p>
            </div>
        </div>
        </div>
    )
}

export default Card