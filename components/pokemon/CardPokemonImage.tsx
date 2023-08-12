import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
  className?: string;
  isPressable?: boolean;
}

export const CardPokemonImage: FC<Props> = ({
  id,
  className,
  isPressable = false,
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
      <CardBody>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={"100%"}
          alt="Pokemon"
          className="py-5 px-10 object-cover"
        />
      </CardBody>
    </Card>
  );
};

export default CardPokemonImage;
