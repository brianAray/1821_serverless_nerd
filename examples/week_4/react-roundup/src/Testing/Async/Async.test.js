import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders post if request succeeds', async () => {
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}],
        });

        render(<Async/>)
        
        // fetch request gets a list
        // we want all the lists on this page
        const listItemElement = await screen.findAllByRole("listitem");

        // we just want to expect that this list is not empty
        expect(listItemElement).not.toHaveLength(0);
    })
})