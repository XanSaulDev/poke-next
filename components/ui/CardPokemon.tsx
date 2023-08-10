import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export function CardPokemon() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">

        <h4 className="font-semibold text-large">Frontend Radio</h4>
      </CardHeader>

    </Card>
  );
}
