import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Contact from '../Contact';
import { server, rest } from '../../../jest-server';

describe('Contact', () => {
    it('Should Error When not all Fields are filled out.', () => {
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText('name', { exact: false });
        const emailInput = screen.getByPlaceholderText('e-mail', {
            exact: false,
        });
        const messageInput = screen.getByPlaceholderText('message', {
            exact: false,
        });
        const button = screen.getByTestId('btn');
        fireEvent.click(button);
        expect(nameInput).toHaveClass('border-red-400');

        fireEvent.change(nameInput, { target: { value: 'myname' } });
        fireEvent.click(button);
        expect(emailInput).toHaveClass('border-red-400');

        fireEvent.change(emailInput, {
            target: { value: 'mymail@example.com' },
        });
        fireEvent.click(button);
        expect(messageInput).toHaveClass('border-red-400');
    });

    it('Should show success when submitted correctly', async () => {
        render(<Contact />);
        server.use(
            rest.post('/', async (req, res, ctx) => {
                return res(ctx.status(200), ctx.json({ message: 'nice' }));
            })
        );
        const nameInput = screen.getByPlaceholderText('name', {
            exact: false,
        });
        const emailInput = screen.getByPlaceholderText('e-mail', {
            exact: false,
        });
        const messageInput = screen.getByPlaceholderText('message', {
            exact: false,
        });
        const button = screen.getByTestId('btn');

        fireEvent.change(nameInput, { target: { value: 'Name ' } });
        fireEvent.change(emailInput, { target: { value: 'mail@mail.com' } });
        fireEvent.change(messageInput, {
            target: { value: 'This is a message and should get passed on.' },
        });
        fireEvent.click(button);

        await waitFor(() => expect(button).toHaveTextContent('Thank You!'));
    });

    it('Should show error on server error', () => {});
});
