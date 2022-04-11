import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

// Requisito feito em pair programming com o aluno Pedro Fonseca - Turma 17

describe('Test suite for Pokedex.js', () => {
  it('Tests for Pokedex heading', () => {
    renderWithRouter(<App />);

    const myHeading = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(myHeading).toBeInTheDocument();
  });

  it('Tests for showing the next pokemon upon clicking btn', () => {
    renderWithRouter(<App />);

    const myPokes1 = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam'];
    const myPokes2 = ['Mew', 'Rapidash', 'Snorlax', 'Dragonair'];
    const myPokeArr = [...myPokes1, ...myPokes2];
    const nextBtn = screen.getByTestId('next-pokemon');

    for (let i = 0; i < myPokeArr.length; i += 1) {
      const myCurrentPoke = screen.getByTestId('pokemon-name');
      const myPreviousPoke = screen.getByText(myPokeArr[i]);

      expect(myPreviousPoke).toBeInTheDocument();

      userEvent.click(nextBtn);

      expect(myCurrentPoke).toBeInTheDocument();
    }
  });

  it('Tests for only 1 pokemon being show at once', () => {
    renderWithRouter(<App />);

    const myPoke = screen.getAllByTestId('pokemon-name');

    expect(myPoke.length).toBe(1);
  });

  it('Tests for filter buttons', () => {
    renderWithRouter(<App />);

    const filter1 = ['Electric', 'Fire', 'Bug'];
    const filter2 = ['Poison', 'Psychic', 'Normal', 'Dragon'];
    const filterBtns = [...filter1, ...filter2];
    const filterLength = 7;

    expect(filterBtns.length).toBe(filterLength);

    for (let i = 0; i < filterBtns.length; i += 1) {
      const button = screen.getByRole('button', { name: filterBtns[i] });
      const pokemonType = screen.getByTestId('pokemon-type');
      const allBtn = screen.getByRole('button', { name: /All/i });

      expect(allBtn).toBeInTheDocument();
      userEvent.click(button);
      expect(button.innerHTML).toBe(filterBtns[i]);
      expect(pokemonType.innerHTML).toBe(filterBtns[i]);
    }
  });

  it('Tests for reset filter', () => {
    renderWithRouter(<App />);

    const allBtn = screen.getByRole('button', { name: /All/i });

    expect(allBtn).toBeInTheDocument();

    userEvent.click(allBtn);

    const firstPokemon = screen.getByText(/Pikachu/i);

    expect(firstPokemon).toBeInTheDocument();
  });
});
