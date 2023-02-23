import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonCard, PokemonImages, PokemonList } from './pokeList.styled';
import { Button } from '../button/button';

export function ShowPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [showMore, setShowMore] = useState(10);

    useEffect(() => {
        getPokemon();
    }, []);


    function getPokemon() {
        axios(`https://pokeapi.co/api/v2/pokemon/?limit=${showMore}`)
            .then((response) => setPokemon(response.data.results));
        setShowMore(showMore + 10)
    }

    return (
        <>
            <PokemonCard>
                {
                    pokemon.map((pokemon, index) => {
                        return (
                            <PokemonList key={index}>
                                <PokemonImages src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${++index}.png`} alt={pokemon.name} />
                                {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                            </PokemonList>
                        )
                    })
                }

            </PokemonCard>
            <Button onClick={() => getPokemon()}>Load more</Button>

        </>
    )
}