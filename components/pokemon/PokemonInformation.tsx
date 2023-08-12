import { Button, Card, CardBody, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { HeartIcon } from "../ui/icons";
import { Pokemon } from "@/interfaces";
import { usePokemonFavorite } from "@/hooks/usePokemonFavorite";

interface Props {
  pokemon: Pokemon;
}

export const PokemonInformation: FC<Props> = ({ pokemon }) => {
  const { isInFavorites, handleFavorite } = usePokemonFavorite(pokemon);
  return (
    <Card className="md:w-9/12 w-full relative">
      <Button
        isIconOnly
        className="absolute right-3 top-3 z-50"
        onClick={handleFavorite}
      >
        <HeartIcon filled={isInFavorites} fill="red" />
      </Button>
      <CardBody className="px-9  justify-center capitalize ">
        <div className="grid md:grid-cols-2 md:justify-normal justify-stretch w-full">
          <div>
            <h1 className="text-4xl font-bold block mb-3">
              {pokemon.name}
            </h1>
            <h4 className="font-bold mb-1">Types</h4>
            <div className="flex gap-2 text-sm">
              {pokemon.types.map((item) => (
                <p key={item.slot}>{item.type.name}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold md:mt-0 mt-2">Sprites</h4>
            <div className="grid md:grid-cols-4 grid-cols-2 w-full justify-items-center">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                className="w-full self-center"
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
