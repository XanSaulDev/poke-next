import Head from "next/head";
import React, { ReactNode, FC } from "react";
import { NavbarLayout } from "../ui";
import { BlobsBackground } from "../ui/background/BlobsBackground";

interface Props {
  children?: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title = "PokemonApp" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Saul Huerta" />
        <meta name="description" content={`Información del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <NavbarLayout />
      <BlobsBackground />
      <main className="lg:px-36 md:px-14 sm:px-9 mx-5 pb-14">{children}</main>
    </>
  );
};
