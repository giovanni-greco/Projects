import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      email: '',
      image: '',
      description: '',
      isLoading: false,
      buttonState: false,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    getUser()
      .then((data) => this.setState({
        user: data.name,
        email: data.email,
        image: data.image,
        description: data.description,
      }));
  }

  inputHandler(e) {
    const isEmpty = 1;
    const { value, name } = e.target;
    const { user, email, image, description } = this.state;

    this.setState({
      [name]: value,
    });

    if (
      user.length > isEmpty
    && email.length > isEmpty
    && image.length > isEmpty
    && description.length > isEmpty
    ) {
      this.setState({
        buttonState: false,
      });
    } else {
      this.setState({
        buttonState: true,
      });
    }
  }

  async submitHandler(e) {
    const { user, email, image, description } = this.state;
    const { history } = this.props;

    e.preventDefault();

    this.setState({
      isLoading: true,
    });

    await updateUser({ name: user, email, image, description });

    this.setState({
      isLoading: false,
    });
    history.push('/profile');
  }

  render() {
    const {
      user,
      email,
      image,
      description,
      isLoading,
      buttonState,
    } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        Edit
        {isLoading}
        <form>
          <input
            type="text"
            name="user"
            placeholder="Username"
            data-testid="edit-input-name"
            value={ user }
            onChange={ this.inputHandler }
          />
          <input
            type="email"
            name="email"
            placeholder="Emai"
            data-testid="edit-input-email"
            value={ email }
            onChange={ this.inputHandler }
          />
          <input
            type="text"
            placeholder="Image"
            data-testid="edit-input-image"
            name="image"
            value={ image }
            onChange={ this.inputHandler }
          />
          <input
            type="textbox"
            name="description"
            placeholder="Description"
            data-testid="edit-input-description"
            value={ description }
            onChange={ this.inputHandler }
          />

          <button
            type="submit"
            data-testid="edit-button-save"
            onClick={ this.submitHandler }
            disabled={ buttonState }
          >
            Editar perfil
          </button>
        </form>
      </div>);
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
