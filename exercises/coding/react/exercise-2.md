# React Exercise 2 (Creating a Pokemon Detail Page)

## Description

This exercise involves creating a new component called PokemonDetail that displays more information about a selected Pokemon. The component will use React Router to handle navigation between different Pokemon.

## Approach

- Install `react-router` for your React app
    - `npm install react-router-dom`
- Create a new React component called PokemonDetail.
- Use React Router to create a route for each Pokemon.
    - Define the routes dynamically 
    - ```typescript
      <Route path='pokemon/:id' component={PokemonDetail}>
      ```
- Use Axios to retrieve more information about a Pokemon from the PokeAPI.
- Use TypeScript to define the shape of the data being fetched from the API.
- Display the additional information about the Pokemon on the PokemonDetail page.
- Style the PokemonDetail page using CSS.

## Hints

- Use useParams hook can be used to retrieve parameters in the path to the component
    - As you will be using dynamic routing, you will need to extract it from the path
    - ```typescript
      const { id } = useParams();
      ```
    - `id` is the parameter because that is how it was defined in the route
- Use useEffect hook to fetch the additional information about the Pokemon when the component mounts
    - The url and name is associated with each pokemon already, the url can then be used to make a request to the API
- Use TypeScript interfaces to define the shape of the data being fetched from the API

## Deliverables

- A working PokemonDetail component that displays additional information about a selected Pokemon
