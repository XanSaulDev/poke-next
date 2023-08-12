import { Pokemon } from "@/interfaces";
import React, { FC } from "react";
import { Layout } from "../layouts";
import { CardPokemonImage } from "./CardPokemonImage";
import { PokemonInformation } from "./PokemonInformation";

interface Props {
  pokemon: Pokemon;
}

export const PokemonView: FC<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <div className="flex gap-5 flex-wrap justify-center">
        <CardPokemonImage id={pokemon.id} className="w-80" imageClassName="h-[200px]" />
        <PokemonInformation pokemon={pokemon} />
      </div>
    </Layout>
  );
};
