'use client';

import React from 'react';

import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store';

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state=> Object.values(state.pokemons));

  //console.log('Favoritos',  favoritePokemons);

  return (
    <PokemonGrid pokemons={favoritePokemons}/>
  )
}
