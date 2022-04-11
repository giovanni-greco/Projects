import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test suite for PokemonDetails.js', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('Tests for detailed information on more detais page', () => {
    const detailLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailLink);

    const h1 = screen.getByRole('heading', {
      name: /Pikachu Details/i,
      level: 2,
    });
    expect(h1).toBeInTheDocument();

    expect(detailLink).not.toBeInTheDocument();

    const h2 = screen.getByRole('heading', {
      name: /Summary/i,
      level: 2,
    });
    expect(h2).toBeInTheDocument();

    const pokesDesc = screen.getByText(/this intelligent pokémon/i);
    expect(pokesDesc).toBeInTheDocument();
  });

  it('Tests for game locations', () => {
    const detailLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailLink);

    const header = screen.getByRole('heading', {
      name: /game locations/i,
      level: 2,
    });
    expect(header).toBeInTheDocument();

    const locations = screen.getAllByAltText(/location/i);
    expect(locations).toHaveLength(2);

    expect(locations[0])
      .toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locations[0]).toHaveAttribute('alt', 'Pikachu location');
  });

  it('Tests for adding pokemon to favorites', () => {
    const detailLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailLink);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    // verifica se existe um checkbox na pagina de mais detalhes

    const labelCheckbox = screen.getByLabelText(/pokémon favoritado\?/i);
    expect(labelCheckbox).toBeInTheDocument();
    // O label do checkbox deve conter o texto Pokémon favoritado?;

    userEvent.click(checkbox);
    expect(labelCheckbox).toBeChecked();
    userEvent.click(checkbox);
    expect(labelCheckbox).not.toBeChecked();
  });
});
