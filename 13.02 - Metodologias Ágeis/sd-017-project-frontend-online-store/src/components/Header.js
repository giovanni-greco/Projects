import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logoExpress.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="button">
          <img src={ logo } alt="Online-Store" />
        </div>
        <button type="button" className="cart-button">
          <Link to="/cart" data-testid="shopping-cart-button">
            <FontAwesomeIcon icon={ faShoppingBasket } className="fa" />
          </Link>
        </button>
      </header>
    );
  }
}
