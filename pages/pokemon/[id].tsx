import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { HeartIcon } from '@/components/ui/icons';
import { Pokemon } from '@/interfaces';
import { localFavorites } from '@/utils';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { useEffect, useState } from 'react';



interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props>  = ({ pokemon }) => {
  const [ isInFavorites, setIsInFavorites ] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id))
  }, [pokemon.id])

  const handleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  }

  return (
    <Layout title={pokemon.name}>
      <div className="flex gap-5 flex-wrap justify-center">
        <Card className="md:w-2/12 w-full overflow-hidden py-2 items-center justify-center bg-secondary-50">
          <CardBody className="overflow-hidden items-center justify-center">
            <Image 
              src={pokemon.sprites.other?.dream_world.front_default || ''} 
              alt={pokemon.name}
              className="object-cover"
              width={120}
              height={120}
            />
          </CardBody>
        </Card>
        <Card className="md:w-9/12 w-full relative bg-secondary-50">
          <Button isIconOnly className="absolute right-3 top-3 z-50" onClick={handleFavorite} >
            <HeartIcon filled={isInFavorites} fill="red" />
          </Button>
          <CardBody className="px-9  justify-center">
            <div className="grid md:grid-cols-2 md:justify-normal justify-stretch w-full">
              <div>
                <h1 className="text-4xl font-bold block mb-3">{pokemon.name.toUpperCase()}</h1>
                <h4 className="font-bold mb-1">Types</h4>
                <div className="flex gap-2 text-sm">
                  {pokemon.types.map(item=><p key={item.slot}>{item.type.name}</p>)}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold md:mt-0 mt-2">Sprites</h4>
                <div className="grid md:grid-cols-4 grid-cols-2 w-full justify-items-center">
                  <Image 
                    src={ pokemon.sprites.front_default }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_default }
                    alt={ pokemon.name }
                    className="w-full self-center"

                  />
                  <Image 
                    src={ pokemon.sprites.front_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                  <Image 
                    src={ pokemon.sprites.back_shiny }
                    alt={ pokemon.name }
                    width={ 100 }
                    height={ 100 }
                  />
                </div>

              </div>
            </div>
            
          </CardBody>
        </Card>
      </div>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const pokemons151 = [...Array(151)].map((value,index)=>`${index+1}`);

  return {
    paths: pokemons151.map((id)=>({
      params: {id}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}/`);
  return {
    props: {
      pokemon: data
    }
  };
};

export default  PokemonPage  