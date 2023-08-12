import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { PokemonView } from "@/components/pokemon";
import { getPokemonInfo } from "@/utils";
import { redirect } from "next/dist/server/api-utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return <PokemonView pokemon={pokemon} />;
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  if ( !pokemon ){
    return { 
      redirect:{
        destination: '/',
        permanent: false
      } 
    }
  }

  return {
    props: {
      pokemon 
    },
    revalidate: 86400
  };
};

export default PokemonPage;

