import { Pokemon } from "@/interfaces";
import React, { FC } from "react";
import { Layout } from "../layouts";
import CardFavorite from "./CardFavorite";
import { PokemonInformation } from "./PokemonInformation";

interface Props {
  pokemon: Pokemon;
}

export const PokemonView: FC<Props> = ({ pokemon }) => {

  return (
    <Layout title={pokemon.name}>
      <div className="flex gap-5 flex-wrap justify-center">
        <CardFavorite id={pokemon.id}  />
        <PokemonInformation pokemon={pokemon} />
      </div>
    </Layout>
  );
};
