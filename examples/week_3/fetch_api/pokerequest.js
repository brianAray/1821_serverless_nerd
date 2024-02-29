// console.log("Hello!");

let url = "https://pokeapi.co/api/v2/pokemon/";

const title = document.createElement("h1");
title.textContent = "Pokemon Search";

const searchElement = document.createElement("input");
searchElement.type = "text";
searchElement.id = "search_box";

const searchBoxContainer = document.createElement("div");
searchBoxContainer.id = "search_box_container";

const searchButton = document.createElement("button");
searchButton.id = "search_button";
searchButton.textContent = "Search";

searchBoxContainer.appendChild(title);
searchBoxContainer.appendChild(searchElement);
searchBoxContainer.appendChild(searchButton);

const pokeImageElement = document.createElement("img");

pokeImageElement.id = "poke_image_element";

const pokeInfo = document.createElement("p");

pokeInfo.id = "poke_info";

const pokeContainer = document.createElement("div");

pokeContainer.id = "pokemon_container";

pokeContainer.appendChild(pokeImageElement);
pokeContainer.appendChild(pokeInfo);

document.body.appendChild(searchBoxContainer);
document.body.appendChild(pokeContainer);

searchButton.addEventListener("click", async (event) => {
  //   console.log(event.target.textContent);
  let searchBox = event.target.previousSibling;
  //   console.log(searchBox.value);
  const data = await fetchPokeData(searchBox.value);
  console.log(data);
  presentPokemon(data);
});

async function fetchPokeData(id) {
  try {
    const response = await fetch(`${url}${id}`);

    if (!response.ok) {
      throw new Error("Response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function presentPokemon(data) {
  pokeInfo.textContent = `Pokemon Name: ${data.name}`;
  pokeImageElement.src = data.sprites.front_default;
}
