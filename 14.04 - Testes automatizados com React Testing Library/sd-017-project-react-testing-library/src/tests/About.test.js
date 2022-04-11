import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('Testing suite for About.js', () => {
  it('Tests for heading text', () => {
    renderWithRouter(<About />);

    const myPageTitle = screen.getByRole(
      'heading', { level: 2, name: /About Pokédex/i },
    );

    expect(myPageTitle).toBeInTheDocument();
  });

  it('Tests for pokedex image', () => {
    renderWithRouter(<About />);

    const myDexImage = screen.getByRole('img');
    const myImgUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

    expect(myDexImage).toHaveAttribute('src', myImgUrl);
  });

  it('Tests for about text', () => {
    renderWithRouter(<About />);

    const myFirstParagraph = screen.getByText(/This application simulates a Pokédex/i);
    const mySecondParagraph = screen.getByText(/One can filter Pokémons by type/i);

    expect(myFirstParagraph).toBeInTheDocument();
    expect(mySecondParagraph).toBeInTheDocument();
  });
});
