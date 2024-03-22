# React Testing Library Exercise 5 (Testing a Redux Connected Component)

## Description

This exercise involves testing a component that uses React Redux and React Testing Library. The component displays a list of items that are fetched from a Redux store using a Redux action and reducer.

## Approach

1. Create a new React component that is connected to a Redux store and displays a list of items.
2. Use React Testing Library to write test cases that verify that the component works correctly and contains the expected elements.
3. Write test cases that check the behavior of the component when the Redux store is updated with new items.

## Hints

1. Use React Redux's `useSelector` function to connect the component to the Redux store.
2. Use a mocking library like redux-mock-store to mock the Redux store and test the component's behavior with different data.
    - https://github.com/reduxjs/redux-mock-store
    - This will require installing a dev dependency `npm install redux-mock-store --save-dev`
3. Use `getByRole`, `getByText`, or other query functions to query for the elements that display the list of items.

## Deliverables

1. A working functional component that uses the useState hook to manage some state and display it in the UI.
2. A set of test cases using React Testing Library to verify that the component works correctly and contains the expected elements.
3. A set of test cases that check the behavior of the component when the user interacts with it.
4. A loom recording titled `React Testing Library Exercise (Testing a Redux Connected Component) firstName lastName`
- Softskills and Presentation
    - Be centered on the camera
    - Look into the camera, not at the screen
        - This how you emulate eye contact while on camera
    - This should be professionally presented
        - You do not need to wear professional clothes
- Introduce what you have done
- Explain how you approached it, and why you chose the decisions you did
- Talk about what you used in the exercise (React features) and why
- Provide a simple walkthrough, with first a demonstration of the component and then an explanation of its code
    - In the explanation, use technical keywords as much as possible instead of just descriptions
- Treat this as a product delivery to a manager