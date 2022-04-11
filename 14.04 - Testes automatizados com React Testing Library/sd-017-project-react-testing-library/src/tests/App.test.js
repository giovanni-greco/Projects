import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Test suite for App.js', () => {
  it('Tests for nav links', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    const aboutLink = screen.getByRole('link', { name: /About/i });
    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favLink).toBeInTheDocument();
  });

  it('Tests for correct routing to Home page', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /Home/i });
    const homeText = screen.getByRole('heading', { name: /Encountered pokémons/i });

    expect(homeLink).toBeInTheDocument();

    userEvent.click(homeLink);

    expect(homeText).toBeInTheDocument();
  });

  it('Tests for correct routing to About page', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /About/i });

    expect(aboutLink).toBeInTheDocument();

    userEvent.click(aboutLink);

    const aboutText = screen.getByRole('heading', { name: /About Pokédex/i });

    expect(aboutText).toBeInTheDocument();
  });

  it('Tests for correct routing to Favorite page', () => {
    renderWithRouter(<App />);

    const favLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(favLink).toBeInTheDocument();

    userEvent.click(favLink);

    const favText = screen.getByRole('heading', { name: /Favorite pokémons/i });

    expect(favText).toBeInTheDocument();
  });

  it('Tests for 404 Error', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');

    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });

    expect(notFound).toBeInTheDocument();
  });
});
