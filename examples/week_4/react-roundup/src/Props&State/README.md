# Props & State

It crucial for front end development to udnerstand this as it is key in managing data and controlling the behavior of comopnents. They are fundamental to component based frameworks (like React, Angular, and Vue.js)

## Props

Short for properties, and are a mechanism for passing data from a parent to a child in a unidirectional manner (unidirectional data flow). They are essentially read-only and allow a parent component to configure and customize a child component.

These are immutable essentially. This means once they are set, the props cannot be modified by the child component that receives them.

Props can be any data type, and even other components.


## State

State represents the internal data of a component. It is used to manage and store info that can change over time and affect the components behavior and rendering. State is specfici to the component that owns it.

State is managed within a component and can be initialized in the constructor for class based comopnents or using the `useState` hook for functional components.

Unlike props, state is mutable, and components can update their own state using methods like `setState` or whatever function is returned back from the `useState` hook.

Changes to the state, trigger a change to the UI to reflect the new state.


## Differences

**Mutability**
    - Props are immutable and cannot be changed by the child component that receives them
    - State is mutable and can be updated by the component that owns it

**Ownership**
    - Props are owned by the parent component and passed to the child
    - State is owned and managed by the component itself

## Immutability in React

In React, immutability is crucial for optimizing performance and ensuring correct updates of component state. When updating the state, use `setState` or `useState` to create new state objects or arrays with the desired changes, rather than modifying the state directly. This ensures that React can efficiently determine what has changed and update the UI accordingly.


## Validating Properties

This is a key part of making robust applications. By validating props, you ensure that the data your components are receiving meet the expected criteria, preventing potential errors and enhancing the maintainability of your code.