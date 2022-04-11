import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../components/Style.css';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      artistName: '',
      albumName: '',
      favorited: [],
    };
    this.setAlbum = this.setAlbum.bind(this);
  }

  componentDidMount() {
    this.setAlbum();
  }

  setAlbum = async () => {
    const { location } = this.props;
    const path = location.pathname;
    const id = path.replace(/^\D+/g, '');

    const musics = await getMusics(id);
    const filteredSongs = musics.filter((musica) => musica.trackName !== undefined);

    const favSongs = await getFavoriteSongs();

    this.setState({
      musics: filteredSongs,
      artistName: musics[0].artistName,
      albumName: musics[0].collectionName,
      favorited: favSongs,
    });
  }

  render() {
    const { musics, albumName, artistName, favorited } = this.state;

    return (
      <div data-testid="page-album" className="page-album">
        <Header />
        <h3 data-testid="artist-name">
          { musics.length > 0 ? artistName : null }
        </h3>
        <h4 data-testid="album-name">
          { musics.length > 0 ? albumName : null }
        </h4>
        {musics.map((musica) => (
          <div key={ musica.trackId }>
            <MusicCard
              { ...this.state }
              musicArr={ musics }
              trackName={ musica.trackName }
              musicSrc={ musica.previewUrl }
              musicDataTestId={ `checkbox-music-${musica.trackId}` }
              musicId={ musica.trackId }
              musicFor={ musica.track }
              musica={ musica }
              favorited={ favorited }
            />
          </div>
        ))}
      </div>);
  }
}

Album.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.shape({
      replace: PropTypes.func,
    }),
  }),
}.isRequired;
