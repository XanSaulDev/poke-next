import Head from "next/head";
import React, { ReactNode, FC } from "react";
import { NavbarLayout } from "../ui";

interface Props {
  children?: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title='PokemonApp' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Saul Huerta" />
        <meta name="description" content={`Información del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <NavbarLayout />
      <main className="px-10">{children}</main>
    </>
  );
};
