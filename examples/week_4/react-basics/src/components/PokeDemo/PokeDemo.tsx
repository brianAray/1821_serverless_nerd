import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";
import PokeSearch from "./PokeSearch";

function PokeDemo() {
  let [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  useEffect(() => {
    async function getDitto() {
      let response: any = await fetch(
        "https://pokeapi.co/api/v2/pokemon/ditto"
      );
      let responseBody: Pokemon = await response.json();

      console.log(responseBody);
      setPokemon(responseBody);
    }

    getDitto();
  }, []);

  return (
    <>
      {pokemon.name ? <h2>{pokemon.name}</h2> : <></>}

      {pokemon.sprites ? <img src={pokemon.sprites.front_default} /> : <></>}

      <PokeSearch setPokemon={setPokemon}/>
    </>
  );
}

export default PokeDemo;
