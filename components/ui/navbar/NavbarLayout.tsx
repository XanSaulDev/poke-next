import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import { Logo } from "../icons";
import { SwitchDarkMode } from './SwitchDarkMode'
import { useTheme } from "next-themes";

export function NavbarLayout() {
  const {setTheme} = useTheme()
  return (
    <Navbar isBordered className="mb-10 " maxWidth="full">
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#" aria-current="page" color="primary" className="text-lg font-semibold">
            Pokemons
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarContent justify="start" >
        <NavbarMenuToggle className="md:hidden lg:hidden"/>
        <NavbarBrand className="gap-2 items-center flex-grow-0">
          <Logo />
          <h1 className="font-bold text-inherit text-3xl">Pokedex</h1>
        </NavbarBrand>

        <NavbarItem isActive className="pt-2 hidden md:flex">
          <Link href="#" aria-current="page" className="text-md font-semibold">
            Pokemons
          </Link>
        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <SwitchDarkMode />
        </NavbarItem>
      </NavbarContent> 

    </Navbar>
  );
}

