import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Test suite for NotFound.js', () => {
  it('Tests for NotFound heading', () => {
    renderWithRouter(<NotFound />);

    // const cryingEmoji = screen.getByRole('img', { name: /Crying emoji/i });
    const notFoundHeading = screen.getByRole(
      'heading', { name: /Page requested not found/i },
    );

    expect(notFoundHeading).toBeInTheDocument();
  });
  it('Tests for pikachu image on 404 page', () => {
    renderWithRouter(<NotFound />);

    const myImage = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );

    const myImgUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

    expect(myImage).toHaveAttribute('src', myImgUrl);
  });
});
