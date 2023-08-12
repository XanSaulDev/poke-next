import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { pokeApi } from "@/api";
import { PokemonView } from "@/components/pokemon";
import { getPokemonInfo } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  return <PokemonView pokemon={pokemon} />;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemons.map((pokemon) => ({
      params: {
        name: pokemon,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByName;