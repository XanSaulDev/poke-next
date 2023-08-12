import React, { FC } from 'react'
import CardFavorite from './CardFavorite';

interface Props {
    pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({pokemons}) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 ">
        {pokemons.map((id) => (
        <CardFavorite key={id} id={id} />
        ))}
    </div>
  )
}
