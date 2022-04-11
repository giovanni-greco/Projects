import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from '../components/Header';
import questionsAction from '../redux/actions/questionsAction';
import QuestionCard from '../components/QuestionCard';
import tokenAction from '../redux/actions/tokenAction';
// a
class Game extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
    };

    this.getToken = this.getToken.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const myURL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const apiData = await fetch(myURL).then((data) => data.json());
    const magicNumber = 3;

    if (apiData.response_code === magicNumber) {
      this.getToken();
    } else {
      this.getQuestions();
    }
  }

  componentDidUpdate() {
    const { questionsDispatch, tokenDispatch } = this.props;
    const { questions } = this.state;
    const token = localStorage.getItem('token');

    questionsDispatch(questions);
    tokenDispatch(token);
  }

  async getToken() {
    await fetch('https://opentdb.com/api_token.php?command=request')
      .then((response) => response.json())
      .then((data) => localStorage.setItem('token', data.token));
    this.getQuestions();

    return localStorage.getItem('token');
  }

  async getQuestions() {
    const token = localStorage.getItem('token');
    const myURL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const apiData = await fetch(myURL).then((data) => data.json());
    this.setState({ questions: apiData.results });
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <Header />
        <QuestionCard history={ history } />
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

Game.propTypes = {
  questionsDispatch: PropTypes.func,
  token: PropTypes.any,
}.isRequired;

const mapStateToProps = ({ token, answer }) => ({
  token,
  answer,
});

const mapDispatchToProps = (dispatch) => ({
  questionsDispatch: (payload) => dispatch(questionsAction(payload)),
  tokenDispatch: (payload) => dispatch(tokenAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
