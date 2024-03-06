import { fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

test('renders initial count and button', () => {
    // AAA
    // Arrange Act Assert

    const {getByText} = render(<Counter/>)

    // check if the component renders with an initial count of 0

    const countElement = getByText("Count: 0");
    expect(countElement).toBeInTheDocument()

    // cehck if the "increment" and "decrement" buttons are present
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');

    expect(incrementButton).toBeInTheDocument()
    expect(decrementButton).toBeInTheDocument()
})

test('increment and decrement button causes teh count to change when clicked', () => {
    // arrange
    const {getByText} = render(<Counter/>)
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');
    const countElement = getByText("Count: 0");

    // act
    // click the increment button
    fireEvent.click(incrementButton);
    
    // assert
    expect(countElement).toHaveTextContent('Count: 1');

    // act
    // click the decrement button
    fireEvent.click(decrementButton);

    // assert
    expect(countElement).toHaveTextContent("Count: 0");


})