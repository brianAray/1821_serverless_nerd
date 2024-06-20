# React Exercise 1 (Displaying Pokemon List)

## Description

This exercise involves the creation of a component that displays a list of Pokemon from the PokeAPI. The component will display the name of each Pokemon in that list. You will also need to use TypeScript to define the type of the data that will be in the response from the API.

## Approach

1. Create a new React component called PokemonList.
2. Use Axios to retrieve a list of Pokemon from the PokeAPI.
3. Use TypeScript to define the shape of the data being fetched from the API.
4. Display the name of each Pokemon in the list using the appropriate HTML elements.
5. Style the component using CSS.

## Hints
- This component is focused purely on retrieving information from the API and displaying it in a useful way
    - Don't worry about including a search ability for unique pokemons, this is not what this exercise is asking for
    - This application will be built upon, simply displaying what is retrieved from the API will not be considered enough for a front end app
- Use TypeScript interfaces to define the shape of the data being retrieved
- Use `useState` hook to store the list of the Pokemon within the state of the component
    - ```typescript
      const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
      ```
- Use `useEffect` hook to retrieve the data from the API when the component first mounts on the page
    - ```typescript
      useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                const results = response.data.results.map((result: any) => ({
                    name: result.name;
                    url: result.url;
                }));
            setPokemonList(results);
        });
      }, []);

## Deliverables

- A working `PokemonList` component that displays a list of Pokemon from the PokeAPI
