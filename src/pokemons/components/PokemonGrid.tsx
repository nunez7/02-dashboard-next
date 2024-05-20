import React from 'react';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';

interface Props{
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
    pokemons.map( poke =>(
        <PokemonCard key={poke.id} pokemon={poke} />
        ))
    }

   </div>
  )
}
