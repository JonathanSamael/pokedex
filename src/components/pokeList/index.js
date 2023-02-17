import React, { useState, useEffect } from 'react';

export function GetPokemon() {
    
    // const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, []);

    
    if(!pokemon) {
        return <h3>Loading...</h3>
    }
    
    console.log(pokemon.results[3]);
    return (
        <div>
            <h1>Pokedex</h1>
            <ul>
                <li>{pokemon.name}</li>
                <li>Nome: { }</li>
                <li>Moves</li>
                <li>Abilities</li>
                <li>Type</li>
            </ul>
        </div>
    )
}