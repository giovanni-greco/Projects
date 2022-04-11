import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import './Style.css';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      checked: false,
      isLoading: false,
    };

    this.favHandler = this.favHandler.bind(this);
  }

  componentDidMount() {
    const { favorited, musicId } = this.props;

    if (favorited) {
      favorited.forEach((musica) => {
        if (musica.trackId === musicId) {
          this.setState({
            checked: true,
          });
        }
      });
    }
  }

  async favHandler({ target }, music) {
    const { checked } = target;
    this.setState({ isLoading: true, checked });

    if (checked) {
      await addSong(music);
    } else {
      await removeSong(music);
    }
    this.setState({ isLoading: false });
  }

  render() {
    const {
      trackName,
      musicSrc,
      musicDataTestId,
      musicId,
      musica,
    } = this.props;

    const { checked, isLoading } = this.state;

    if (isLoading) return (<div> Carregando... </div>);

    return (
      <div className="music-card-div">
        <div>
          <p className="track-name">{ trackName }</p>
          <audio data-testid="audio-component" src={ musicSrc } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <label className="label" htmlFor={ musicId }>
            Favorita
            <input
              type="checkbox"
              data-testid={ musicDataTestId }
              name="favorita"
              id={ musicId }
              onChange={ (event) => this.favHandler(event, musica) }
              checked={ checked }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicArr: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;
