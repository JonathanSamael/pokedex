import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonCard, PokemonImages, PokemonList } from './pokeList.styled';
import { pokeUrl } from '../services/getPokeApi';


export function ShowPokemon() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon();
    }, []);

    function getPokemon() {
        axios(`${pokeUrl}?limit=10`)
        .then((response) => setPokemon(response.data.results));
    }

    if(!pokemon) <h3>Loading...</h3>

    console.log(pokemon);
    return (
        <>
            <PokemonCard>
                {
                    pokemon.map((pokemon, index) => {
                        return (
                            <PokemonList key={index}>                            
                                <PokemonImages src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${++index}.png`}/>
                                {pokemon.name}
                            </PokemonList>
                        )
                    })
                }
            </PokemonCard>
        </>
    )
}