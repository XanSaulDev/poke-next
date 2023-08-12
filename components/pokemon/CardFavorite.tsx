import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
}

const CardFavorite: FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Card
      key={id}
      className="hover:-translate-y-1.5 cursor-pointer"
      isPressable
      onClick={handleClick}
    >
      <CardBody>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={"100%"}
          alt="Pokemon"
          className="py-5 px-10"
        />
      </CardBody>
    </Card>
  );
};

export default CardFavorite;
