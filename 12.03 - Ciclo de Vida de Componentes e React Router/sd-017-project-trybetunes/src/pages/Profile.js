import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      email: '',
      image: '',
      description: '',
    };

    this.editHandler = this.editHandler.bind(this);
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

  editHandler(e) {
    e.preventDefault();
    const { history } = this.props;
    history.push('/profile/edit');
  }

  render() {
    const { user, email, image, description } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        Profile
        <br />
        <p>{user}</p>
        <br />
        <p>{email}</p>
        <br />
        <img src={ image } data-testid="profile-image" alt="profile-pic" />
        <br />
        <p>{description}</p>
        <br />
        <button type="submit" onClick={ this.editHandler }>
          Editar perfil
        </button>
      </div>);
  }
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;
