
import { useState, useEffect } from 'react';

const Fetch = ({url}) => {
// renderizar 5 pokemones con su : numero tipo nombre y dibujo(sprite)
    
// =======================  I D  =======================
    const [pokemonsId, setPokemonsId] = useState();

    useEffect(() => {
    const getPokemonsId = async () => {
        const res = await fetch(url);
        const pokemonData = await res.json();
        setPokemonsId(pokemonData.id)
    }
        getPokemonsId(url);
        
    }, [url])

 // =======================  T Y P E  =======================
    const [pokemonsType, setPokemonsType] = useState();

    useEffect(() => {
    const getPokemonsType = async () => {
        const res = await fetch(url);
        const pokemonData = await res.json();
        setPokemonsType(pokemonData.types[0].type.name)
    }
        getPokemonsType(url);
        
    }, [url])

 // =======================  I M A G E  =======================
    const [pokemonsImg, setPokemonsImg] = useState();

    useEffect(() => {
    const getPokemonsImg = async () => {
        const res = await fetch(url);
        const pokemonData = await res.json();
        setPokemonsImg(pokemonData.sprites.front_default)
    }
        getPokemonsImg(url);
        
    }, [url])

// =======================  N A M E  =======================
//     const [pokemonsName, setPokemonsName] = useState();

//     useEffect(() => {
//     const getPokemonsName = async () => {
//         const res = await fetch(url);
//         const pokemonData = await res.json();
//         setPokemonsName(pokemonData.forms[0].name)
 
//     }
//         getPokemonsName(url);
        
//     }, [url])

    return (
            [pokemonsId, "  ", pokemonsType, "    ", <img src={pokemonsImg} alt="Pokemon drawing"/>]
    )

}

export default Fetch