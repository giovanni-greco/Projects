import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Test suite for FavoritePokemons.js', () => {
  it('Tests for no favorited pokemons', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavorites = screen.getByText(/No favorite pokemon found/i);

    expect(noFavorites).toBeInTheDocument();
  });

  it('Tests for display of favorited pokemons', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByText(/More details/i);

    expect(moreDetails).toBeInTheDocument();

    userEvent.click(moreDetails);

    const favBtn = screen.getByLabelText(/Pokémon favoritado?/i);

    userEvent.click(favBtn);

    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

    userEvent.click(favLink);

    const pokeSpr = screen.getByAltText(/Pikachu sprite/i);

    expect(pokeSpr).toBeInTheDocument();
  });
});
