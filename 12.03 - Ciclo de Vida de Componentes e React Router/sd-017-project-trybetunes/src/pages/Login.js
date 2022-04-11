import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      image: '',
      description: '',
      buttonState: true,
      isLoading: false,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler(e) {
    const MIN_USERNAME_LENGTH = 1;
    const { value, name } = e.target;
    const { username } = this.state;

    this.setState({
      [name]: value,
    });

    if (username.length > MIN_USERNAME_LENGTH) {
      this.setState({
        buttonState: false,
      });
    }
  }

  async submitHandler(e) {
    const { username, email, image, description } = this.state;
    const { history } = this.props;

    e.preventDefault();

    this.setState({
      isLoading: true,
    });

    await createUser({ name: username, email, image, description });

    this.setState({
      isLoading: false,
    });
    history.push('/search');
    // window.location.href = '/search';
  }

  render() {
    const { username, email, image, description, buttonState, isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          'Carregando...'
        ) : (
          <div data-testid="page-login">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Username"
                data-testid="login-name-input"
                value={ username }
                onChange={ this.inputHandler }
              />
              <input
                type="email"
                name="email"
                placeholder="Emai"
                data-testid="login-email-input"
                value={ email }
                onChange={ this.inputHandler }
              />
              <input
                type="text"
                name="image"
                placeholder="Image"
                data-testid="login-image-input"
                value={ image }
                onChange={ this.inputHandler }
              />
              <input
                type="textbox"
                name="description"
                placeholder="Description"
                data-testid="login-description-input"
                value={ description }
                onChange={ this.inputHandler }
              />

              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ buttonState }
                onClick={ this.submitHandler }
              >
                Entrar
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
