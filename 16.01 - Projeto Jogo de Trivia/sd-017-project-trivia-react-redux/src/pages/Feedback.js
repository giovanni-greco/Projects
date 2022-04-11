import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      feedbackMessage: '',
    };
    this.setFeedbackMessage = this.setFeedbackMessage.bind(this);
  }
  // test

  componentDidMount() {
    this.setFeedbackMessage();
  }

  setFeedbackMessage() {
    const { answer } = this.props;
    const MAGIC_NUMBER = 3;
    if (answer < MAGIC_NUMBER) {
      this.setState({ feedbackMessage: 'Could be better...' });
    } else {
      this.setState({ feedbackMessage: 'Well Done!' });
    }
  }

  render() {
    const { gravatar, username, history, score } = this.props;
    // const score = localStorage.getItem('score');
    const { feedbackMessage } = this.state;
    const url = md5(gravatar).toString();
    console.log(url);

    return (
      <div>
        <img data-testid="header-profile-picture" alt="profile" src={ `https://www.gravatar.com/avatar/${url}` } />
        <h3 data-testid="header-player-name">{username}</h3>
        <h3 data-testid="header-score">{score}</h3>
        <p data-testid="feedback-text">{feedbackMessage}</p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ () => history.push('/') }
        >
          Jogar Novamente
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  gravatar: PropTypes.any,
  score: PropTypes.any,
}.isRequired;

const mapStateToProps = ({ email, gravatar, username, score, answer }) => ({
  email,
  gravatar,
  username,
  score,
  answer,
});

export default connect(mapStateToProps, null)(Feedback);
