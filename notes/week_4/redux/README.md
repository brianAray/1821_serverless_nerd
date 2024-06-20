# Redux

Redux is a state management library  for JS applications, often used with React. It helps to manage the global state of the application in a predictable way, making it easier to build complex aplications with many components that need to share data.

In Redux, the state of the application is stored in a single, immutable store. Components do not modify state directly, but instead dispatch actions which are processed by reducers.

Reducers are functions that take the current state and an action as an input, and returns a new state. This ensures that the state updates in a predictable manner, and that it is easy to trace the history of state changes.

## Flux Design Pattern

This is a software architecture pattern for building user interfaces, popularized by Facebook (Meta) for use in their React framework.

The Flux pattern enforces a unidirectional data flow in which data can only flow in one direction from the data store, through the dispatcher, to the view. This helps to ensure that state changes are predictable and the view always reflects the current state of the data.

Key componets:

- Store:
    - The store is whre the applications state is stored
    - It is responsible for managing the state and emitting change events when the state changes
- Actions
    - Actions are objects that describe the changes that need to be made to the state
    - They are dispatched from the view (component) and handled by the dispatcher
- Dispatcher
    - The dispatcher is the central hub that receives the actions and dispatches them to the store.
    - The dispatcher ensures that actions are handled in the correct order, and that the stores are notified of any changes
- Views
    - Views are components that present the data to the user
    - They listen for change events from the store and re-render when the state changes

## Organizing State

Organizing state can become complex as an application grows, and so being clear in how it is managed is important so that the application becomes easier to understand and maintain.

1. Atomic State
    - Store the state in a single, flat object
    - This is the simple approach and can work for small applications
2. Domain-driven State
    - Organize the state around the domains or concepts in the application
    - For example, a blog application might have a state object for articles, another for users, and another for comments
3. Context-driven State
    - Stores the state in context objects
    - This is useful when there are multiple compoennts that need to access the state, without having to pass it down through props
4. Combined State
    - Combining different strategies to form a hybrid approach that works dependent on your application needs

Regardless of the strategy chosen, it is important to keep the state as simple and flat as possible, to make it easier to reason about and debug.
It is useful to break up large state objects into smaller pieces taht can be managed independently, making it easier for testing and maintenance.

## Actions

Actions in Redux are objects that represent an event that changes the state of the application. They are dispatched from the view, and handled by the redux store.
An action can either have a `type` property, wich is a string that describes the type of action or it can be a payload where you are providing a value to be stored in the store.

## Reducers

Reducers in Redux are pure functions that take the current state and an action as inputs, and return a new state as output.
They are responsible for updating the state of the application in response to actions dispatched from the view.
A reducer function must be pure, meaning it must not have any side effects, and must always return the same output for the same inputs.

## Store

The Redux store is the central data store for a Redux application.
It is responsible for holding the current state of the application, and for dispatching actiosn to update the state in response to user interactions.
The store is created using the `createStore` method from the `redux` library, and is initialized with a single reducer that specifies how the state should be updated in response to actions.
The Redux store provides a single source for the state of the application, and helps to ensure that the state changes are predictable.
