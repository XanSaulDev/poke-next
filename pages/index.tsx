import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { CardPokemon } from "@/components/ui";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { NextPage, GetStaticProps } from "next";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="listado de pokemons">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-6 ">
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
