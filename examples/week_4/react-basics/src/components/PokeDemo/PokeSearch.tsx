import React, { useState } from "react";

function PokeSearch(props: any) {
  let [pokeSearchInput, setPokeSearchInput] = useState("");

  async function searchPokemon(){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeSearchInput}`;
    try{

        let response = await fetch(url);
        let data = await response.json();

        props.setPokemon(data);

    }catch(error){
        console.error(error);
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="3"
        onChange={(event: any) => setPokeSearchInput(event.target.value)}
      ></input>

      <button onClick={searchPokemon}>
        Search Pokemon
      </button>
    </>
  );
}

export default PokeSearch;
