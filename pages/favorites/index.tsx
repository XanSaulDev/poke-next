import { Layout } from "@/components/layouts";
import { FavoritesPokemons } from "@/components/pokemon/FavoritesPokemons";
import NoFavoritesView from "@/components/pokemon/NoFavoritesView";
import { localFavorites } from "@/utils";

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
