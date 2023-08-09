import { Layout } from '@/components/layouts'
import { CardPokemon } from '@/components/ui'
import {Button} from '@nextui-org/react'



export default function Home() {
  
  return (
    <Layout title="listado de pokemons">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 md:w-full">
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
      </div>
    </Layout>

  )
}

