import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import './Style.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    getUser()
      .then((data) => {
        this.setState({
          user: data.name,
          isLoading: false,
        });
      });
  }

  render() {
    const { user, isLoading } = this.state;
    return (
      <header data-testid="header-component" className="header">
        {isLoading ? 'Carregando...' : <p data-testid="header-user-name">{user}</p> }
        <div className="header-links">
          <div className="link">
            <Link to="/search" data-testid="link-to-search">
              Search
            </Link>
          </div>
          <div>
            <Link className="link" to="/favorites" data-testid="link-to-favorites">
              Favorites
            </Link>
          </div>
          <div>
            <Link className="link" to="/profile" data-testid="link-to-profile">
              Profile
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
