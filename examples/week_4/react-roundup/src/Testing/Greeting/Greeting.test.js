import { fireEvent, render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('renders Hello World as a text', () => {
        // arrange
        render(<Greeting/>)

        // act
        // ... nothing

        // assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});

        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders Its nice to meet you as a text on load', () => {
        render(<Greeting/>);

        const textElement = screen.getByText("It's nice to meet you");
        
        expect(textElement).toBeInTheDocument();
    })

    test('renders I have been changed when change text button has been clicked', () => {
        render(<Greeting/>);

        const changeTextButton = screen.getByRole("button");
        fireEvent.click(changeTextButton)
        const textElement = screen.getByText("I have been changed");

        expect(textElement).toBeInTheDocument()
    })

    test('Does not render Its nice to meet you when button is clicked again', () => {
        render(<Greeting/>);

        const button = screen.getByRole("button");
        fireEvent.click(button)
        const outputElement = screen.queryByText("It's nice to meet you");

        expect(outputElement).not.toBeInTheDocument()
    })
})