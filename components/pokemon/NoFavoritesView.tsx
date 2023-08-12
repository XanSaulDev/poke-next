import Image from "next/image";
import React from "react";

const NoFavoritesView = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-5 ">
      <h3 className="text-4xl font-bold text-gray-600 text-center">No tienes favoritos</h3>
      <Image
        alt="PokeImagen"
        width={150}
        height={150}
        className="opacity-30"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg"
      />
    </div>
  );
};

export default NoFavoritesView;
