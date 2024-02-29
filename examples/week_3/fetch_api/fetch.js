/**
 * Fetch API
 *
 * The fetch api is a modern js interface for making network requests
 *
 */

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Response was not OK");
    }

    return response.json(); // parse the response body as json
  })
  .then((data) => {
    console.log(data); // use the data from the response
  })
  .catch((error) => {
    console.error(`Fetch error:`, error);
  });

// POST Data

fetch("EXAMPLE URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer ...",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// async await

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("response was not ok");
    }

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchData("https://pokeapi.co/api/v2/pokemon/ditto").then((data) =>
  console.log(data.name)
);

// console.log(pokeData.name);
