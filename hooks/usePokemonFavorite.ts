import { Pokemon } from "@/interfaces";
import { localFavorites } from "@/utils";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

export const usePokemonFavorite = (pokemon: Pokemon) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  const handleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  return {
    isInFavorites,
    handleFavorite,
  };
};
