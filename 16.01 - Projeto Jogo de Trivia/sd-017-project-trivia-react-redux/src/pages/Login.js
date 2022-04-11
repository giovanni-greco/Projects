import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import tokenAction from '../redux/actions/tokenAction';
import emailAction from '../redux/actions/emailAction';
import gravatarAction from '../redux/actions/gravatarAction';
import usernameAction from '../redux/actions/usernameAction';
import Header from '../components/Header';
import './style.css';
import requestToken from '../service/requestToken';

class login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      isDisabled: true,
      token: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSettings = this.handleSettings.bind(this);
  }

  handleSubmit = async () => {
    const { email } = this.state;
    const { history, tokenFunction, emailDispatch } = this.props;
    const TOKEN = await requestToken();
    console.log(TOKEN);
    emailDispatch(email);
    tokenFunction(TOKEN);
    localStorage.setItem('email', email);
    history.push('/game');
  }

      handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value }, this.handleBtn);
      }

  handleBtn = () => {
    const { gravatarDispatch, usernameDispatch } = this.props;
    const { username, email } = this.state;
    if (username.length > 0 && email.length > 0) {
      this.setState({
        isDisabled: false,
      });
      gravatarDispatch(email);
      usernameDispatch(username);
    }
  }

  handleSettings() {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { username, email, isDisabled } = this.state;
    return (
      <div>
        <Header { ...this.state } />
        <div className="form-div">
          <form className="login-form">
            <input
              className="form-input"
              type="text"
              data-testid="input-player-name"
              value={ username }
              onChange={ this.handleChange }
              name="username"
            />
            <input
              className="form-input"
              type="email"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.handleChange }
              name="email"
            />
            <button
              className="form-input"
              type="button"
              data-testid="btn-play"
              disabled={ isDisabled }
              onClick={ this.handleSubmit }
            >
              Play
            </button>
            <button
              className="form-input"
              type="button"
              data-testid="btn-settings"
              onClick={ this.handleSettings }
            >
              Settings
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  tokenFunction: (payload) => dispatch(tokenAction(payload)),
  emailDispatch: (payload) => dispatch(emailAction(payload)),
  gravatarDispatch: (payload) => dispatch(gravatarAction(payload)),
  usernameDispatch: (payload) => dispatch(usernameAction(payload)),
});

login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }),
}.isRequired;

export default connect(null, mapDispatchToProps)(login);
