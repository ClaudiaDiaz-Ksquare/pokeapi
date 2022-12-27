
import { useState, useEffect } from 'react';

const Fetch = ({url}) => {
// renderizar 5 pokemones con su : numero tipo nombre y dibujo(sprite)
    
    // =======================  I D  =======================
    const [pokemonsId, setPokemonsId] = useState("");
    // =======================  N A M E  =======================
    const [pokemonsName, setPokemonsName] = useState(0);
    // =======================  T Y P E  =======================
    const [pokemonsType, setPokemonsType] = useState([]);
    // =======================  I M A G E  =======================
    const [pokemonsImg, setPokemonsImg] = useState("");

    useEffect(() => {
    const getPokemonsData = async () => {
        const res = await fetch(url);
        const pokemonData = await res.json();
        setPokemonsId(pokemonData.id)
        setPokemonsType(pokemonData.types[0].type.name)
        setPokemonsImg(pokemonData.sprites.front_default)
        setPokemonsName(pokemonData.forms[0].name)
    }
        getPokemonsData(url);

    }, [url])

    return (
            <div className='card' style={{width:'14rem'}}>
                <div className='card-header'>
                    <h2 className='id'>{pokemonsId}</h2>
                    <h3 className='name'>{pokemonsName}</h3>
                </div>
                <div className='card-body'>
                    <img src={pokemonsImg} alt='pokemon'/>
                </div>
                <div className='card-footer'>
                    <p className='type'>{pokemonsType}</p>
                </div>
            </div>
    )

}

export default Fetch