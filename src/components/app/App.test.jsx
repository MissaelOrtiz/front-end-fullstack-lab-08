/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer(
  rest.get(
    'https://ac-vill.herokuapp.com/villagers/',
    (req, res, ctx) => {
      return res(
        ctx.json([{ id: 1, title: 'PF2e', medium: 'TTRPG', genre: 'adventure' }])
      );
    }
  )
);

describe('App test', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of games', async () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Now Loading');

    const ul = await screen.findByRole('list', { name: 'games' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
