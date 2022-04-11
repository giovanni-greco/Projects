import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      btnState: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formCheck() {
    const { email, password } = this.state;
    const MAGIC_NUMBER = 5;
    const EMAIL_FORMAT = /\S+@\S+\.\S+/;
    if (
      email.match(EMAIL_FORMAT)
    && password.length >= MAGIC_NUMBER
    ) {
      this.setState({
        btnState: false,
      });
    } else {
      this.setState({
        btnState: true,
      });
    }
  }

  handleSubmit() {
    const { history, submitEmail } = this.props;
    const { email } = this.state;
    submitEmail(email);

    history.push('/carteira');
  }

  render() {
    const { email, password, btnState } = this.state;

    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          name="email"
          onChange={ (event) => {
            this.setState({ email: event.target.value });
            this.formCheck();
          } }
        />

        <input
          type="password"
          data-testid="password-input"
          value={ password }
          name="password"
          onChange={ (event) => {
            this.setState({ password: event.target.value });
            this.formCheck();
          } }
        />

        <button
          type="button"
          disabled={ btnState }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>

      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  submitEmail: (email) => dispatch(setEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
