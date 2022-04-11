import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import data from '../data';

describe('Test suite for Pokemon.js', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  const { averageWeight } = data[0];
  const { value, measurementUnit } = averageWeight;

  it('Tests for correct name onscreen', () => {
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonImage = screen.getByRole('img', { name: /Pikachu sprite/i });

    const URL = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const altImg = 'Pikachu sprite';

    expect(pokemonName).toHaveTextContent('Pikachu');
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWeight).toHaveTextContent(
      `Average weight: ${value} ${measurementUnit}`,
    );

    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', URL);
    expect(pokemonImage).toHaveAttribute('alt', altImg);
  });

  it('Tests for more details link', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    expect(detailsLink).toBeInTheDocument();
    expect(detailsLink).toHaveAttribute('href', '/pokemons/25');
  });

  it('Tests more details navigation', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    const textHeading = screen.getByRole('heading', {
      level: 2,
      name: /Pikachu details/i,
    });
    expect(textHeading).toBeInTheDocument();
  });

  it('Tests for correct url', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const URL = '/pokemons/25';
    expect(detailsLink).toHaveAttribute('href', URL);
  });

  it('Tests for favorite icon', () => {
    const button = screen.getByRole('button', { name: /normal/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);

    const checkbox = screen.getByLabelText(/pokémon favoritado?/i);
    expect(checkbox).toBeInTheDocument();
    userEvent.click(checkbox);

    const hasStar = screen.getByRole('img', {
      name: /Snorlax is marked as favorite/,
    });
    const src = '/star-icon.svg';
    const altImg = 'Snorlax is marked as favorite';
    expect(hasStar).toBeInTheDocument();

    expect(hasStar).toHaveAttribute('src', src);
    expect(hasStar).toHaveAttribute('alt', altImg);
  });
});
