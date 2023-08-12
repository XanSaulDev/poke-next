import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
  className?: string;
  isPressable?: boolean;
  imageClassName?: string;
}

export const CardPokemonImage: FC<Props> = ({
  id,
  className,
  isPressable = false,
  imageClassName,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Card
      key={id}
      className={className}
      isPressable={isPressable}
      onClick={handleClick}
    >
      <CardBody className="flex justify-center items-center ">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="Pokemon"
          radius="lg"
          width="100%"
          className={`w-full object-cover h-[140px] ${imageClassName}`}
        />
      </CardBody>
    </Card>
  );
};

export default CardPokemonImage;
