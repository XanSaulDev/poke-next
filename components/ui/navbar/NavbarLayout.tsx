import NextLink from 'next/link'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { Logo } from "../icons";
import { SwitchDarkMode } from './SwitchDarkMode'


export function NavbarLayout() {

  return (
    <Navbar className="mb-10 " maxWidth="xl">
      <NavbarMenu>
        <NavbarMenuItem>
          <NextLink href="/" className="cursor-pointer " legacyBehavior>
            Pokémons
          </NextLink>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <NextLink href="/favorites" className="cursor-pointer " legacyBehavior>
            Favorites 
          </NextLink>
        </NavbarMenuItem>

      </NavbarMenu>

      <NavbarContent justify="start" >

        <NavbarMenuToggle className="md:hidden lg:hidden"/>
        <NavbarBrand className="gap-2 items-center flex-grow-0">
        <NextLink href="/" passHref className='flex gap-2 cursor-pointer'>
            <Logo />
              <h1 className="font-bold text-inherit text-2xl m-0 p-0">
              <span className="text-4xl m-0 p-0">P</span>okédex
            </h1> 
         </NextLink> 
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem className="self-center hidden md:flex">
          <NextLink href="/" className="cursor-pointer" legacyBehavior>
              Pokémons
          </NextLink>
        </NavbarItem>

        <NavbarItem className="self-center hidden md:flex">
          <NextLink href="/favorites" className="cursor-pointer" legacyBehavior>
              Favorites
          </NextLink>
        </NavbarItem>

        <NavbarItem>
          <SwitchDarkMode />
        </NavbarItem>

      </NavbarContent> 

    </Navbar>
  );
}

