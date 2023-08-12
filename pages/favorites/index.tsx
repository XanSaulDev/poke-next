import { Layout } from "@/components/layouts";
import CardFavorite from "@/components/pokemon/CardFavorite";
import { FavoritesPokemons } from "@/components/pokemon/FavoritesPokemons";
import NoFavoritesView from "@/components/pokemon/NoFavoritesView";
import { localFavorites } from "@/utils";
import { Card, CardBody, Image } from "@nextui-org/react";
import { useRouter } from "next/router";


import React, { useEffect, useState } from "react";

const Favorites = () => {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons);
  }, []);

  return (
    <Layout>
      {favorites.length === 0 ? (
        <NoFavoritesView />
      ) : (
        <FavoritesPokemons pokemons={favorites} />
      )}
    </Layout>
  );
};

export default Favorites;
