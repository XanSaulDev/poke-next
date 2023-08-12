import React, { FC } from "react";
import { CardPokemonImage } from "./CardPokemonImage";

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 ">
      {pokemons.map((id) => (
        <CardPokemonImage
          key={id}
          id={id}
          className="hover:-translate-y-1.5 cursor-pointer"
          isPressable
        />
      ))}
    </div>
  );
};
