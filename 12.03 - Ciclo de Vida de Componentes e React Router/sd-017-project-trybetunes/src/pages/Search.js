import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
      searchBtn: true,
      isSearching: false,
      searchResult: [],
      searchedArtist: '',
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.searchBtnHandler = this.searchBtnHandler.bind(this);
  }

  searchHandler(e) {
    const { value } = e.target;
    const MIN_SEARCH_LENGTH = 2;
    const { searchValue } = this.state;
    this.setState({
      searchValue: value,
    });
    if (searchValue < MIN_SEARCH_LENGTH) {
      this.setState({
        searchBtn: true,
      });
    } else {
      this.setState({
        searchBtn: false,
      });
    }
  }

  async searchBtnHandler(e) {
    e.preventDefault();

    const { searchValue, searchResult } = this.state;

    this.setState({
      isSearching: true,
      searchedArtist: searchValue,
    });

    await searchAlbumsAPI(searchValue)
      .then((data) => this.setState({
        searchResult: data,
      }));

    this.setState({
      isSearching: false,
      searchValue: '',
    });

    console.log(searchResult);
  }

  render() {
    const {
      searchBtn,
      searchValue,
      isSearching,
      searchResult,
      searchedArtist,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <br />

        {isSearching ? (
          'Carregando...'
        ) : (
          <div>
            <input
              type="text"
              data-testid="search-artist-input"
              placeholder="Artist"
              value={ searchValue }
              onChange={ this.searchHandler }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ searchBtn }
              onClick={ this.searchBtnHandler }
            >
              Search
            </button>
          </div>
        )}
        <div>
          {`Resultado de álbuns de: ${searchedArtist}`}

          { searchResult.length ? searchResult.map((item) => (
            <li key={ item.releaseDate }>
              <Link
                to={ `/album/${item.collectionId}` }
                data-testid={ `link-to-album-${item.collectionId}` }
              >
                { item.collectionName }
              </Link>
            </li>)) : <p> Nenhum álbum foi encontrado </p> }

        </div>
      </div>
    );
  }
}
