import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import { PokemonCard, PokemonList } from './pokeList.styled';


export function ShowPokemon() {

    const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        getPokemon()
    }, []);

    async function getPokemon() {
        const pokemonList = await axios(`${pokeUrl}?limit=10`)
        const data = pokemonList.data.results
        setPokemon(data)
    }

    if (!pokemon) {
        return <h3>Loading...</h3>
    }

    console.log(pokemon);
    return (
        <>
            <PokemonCard>
                {
                    pokemon.map((pokemon, index) => {
                        return (
                            <PokemonList key={index}>
                                {pokemon.name}

                            </PokemonList>
                        )
                    })
                }
            </PokemonCard>
        </>
    )
}