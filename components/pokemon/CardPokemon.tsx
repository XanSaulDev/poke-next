import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "@/interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card className="hover:-translate-y-1.5 cursor-pointer" isPressable>
      <CardBody
        className="overflow-hidden items-center justify-center "
        onClick={onClick}
      >
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={pokemon.img}
          width={140}
          height={140}
        />
      </CardBody>
      <CardHeader className="my-1 flex-col items-center" onClick={onClick}>
        <h4 className="font-semibold text-large capitalize ">{pokemon.name}</h4>
      </CardHeader>
    </Card>
  );
};
