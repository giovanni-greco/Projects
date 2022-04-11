import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorited: [],
      isLoading: false,
    };
    this.setFavs = this.setFavs.bind(this);
  }

  componentDidMount() {
    this.setFavs();
  }

  // function to fetch favorited songs from local storage and handling loader state.
  async setFavs() {
    this.setState({
      isLoading: true,
    });

    await getFavoriteSongs()
      .then((data) => this.setState({
        favorited: data,
      }));

    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { favorited, isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        Favorites
        {isLoading ? 'Carregando...' : favorited.map((musica) => (
          <div key={ musica.trackId }>
            <MusicCard
              { ...this.state }
              trackName={ musica.trackName }
              musicSrc={ musica.previewUrl }
              musicDataTestId={ `checkbox-music-${musica.trackId}` }
              musicId={ musica.trackId }
              musicFor={ musica.track }
              musica={ musica }
            />
          </div>))}
      </div>);
  }
}
