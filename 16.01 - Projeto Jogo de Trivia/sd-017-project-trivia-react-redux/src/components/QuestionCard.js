import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import answerAction from '../redux/actions/answerAction';
import playerAction from '../redux/actions/playerAction';

class QuestionCard extends Component {
  constructor() {
    super();

    this.state = {
      timeOut: false,
      answered: false,
      nextButton: true,
      currentQuestion: 0,
      timer: 30,
      score: 0,
    };

    this.answerHandler = this.answerHandler.bind(this);
    this.nextButtonHandler = this.nextButtonHandler.bind(this);
    this.answerValidation = this.answerValidation.bind(this);
    this.myTimer = this.myTimer.bind(this);
  }

  componentDidMount() {
    const ONE_SECOND = 1000;

    console.log('componentDidMount');
    this.intervalId = setInterval(this.myTimer, ONE_SECOND);
  }

  myTimer() {
    const { timer } = this.state;
    if (timer === 0) {
      console.log(timer);
      this.setState({
        timer: 30,
        timeOut: true,
        // answered: true,
        nextButton: false,
      }, () => clearInterval(this.intervalId));
    } else {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }

    // setInterval(() => {
    //   console.log('interval');
    //   if (timer === 0) {
    //     console.log(timer);
    //     this.setState({
    //       timer: 6,
    //       timeOut: true,
    //     });
    //   } else {
    //     this.setState((prevState) => ({
    //       timer: prevState.timer - 1,
    //     }));
    //   }
    // }, ONE_SECOND);
  }

  // myTimer() {
  //   const TIME_INTERVAL = 1000;

  //   const { timer } = this.props;

  //   this.myTry = setTimeout(() => {
  //     console.log('am i working?');
  //     this.setState(() => ({
  //       timer: timer - 1,
  //     }), () => {
  //       if (timer === 0) {
  //         this.setState({
  //           timer: 6,
  //           timeOut: true,
  //         });
  //       }
  //     });
  //   }, TIME_INTERVAL);
  //   return timer;
  // }

  answerHandler(e) {
    this.answerValidation(e);
    this.setState({
      answered: true,
      nextButton: false,
    });
  }

  answerValidation(e) {
    const { answerDispatch, scoreDispatch } = this.props;
    const { timer, score } = this.state;
    console.log(e.target);

    if (e.target.getAttribute('data-testid') === 'correct-answer') {
      answerDispatch(1);
      const magicNumber = 11;
      const points = magicNumber + timer + score;
      this.setState(({ score: points }),
        () => scoreDispatch(points));

      console.log('im working');
    }
  }

  // next button:
  // handles moving forward to the next question, reseting answered state and pushing to feedback page when 5 questions have been answered;
  nextButtonHandler() {
    const { history } = this.props;
    const { currentQuestion } = this.state;
    const MAGIC_NUMBER = 4;

    this.setState({
      answered: false,
      timer: 30,
    });

    if (currentQuestion === MAGIC_NUMBER) {
      this.setState({
        currentQuestion: 0,
      });
      history.push('/feedback');
    }
    this.setState((prevState) => ({ currentQuestion: prevState.currentQuestion + 1 }));
  }

  render() {
    const {
      questions, history,
    } = this.props;

    const {
      answered,
      nextButton,
      currentQuestion,
      timeOut,
      timer,
    } = this.state;

    if (questions.length < 1) return <p>Carregando..</p>;

    const answerArr = [...questions[currentQuestion].incorrect_answers,
      questions[currentQuestion].correct_answer];

    const MAGIC_NUMBER = 0.5;
    const sortedAnswers = answerArr.sort(() => Math.random() - MAGIC_NUMBER);

    return (
      <div className="question-card-div">
        <p>{timer}</p>
        <div key={ 1 }>
          <p data-testid="question-text">{questions[currentQuestion].question}</p>
          <p data-testid="question-category">{questions[currentQuestion].category}</p>
          <div data-testid="answer-options">
            {/* https://stackoverflow.com/questions/40803828/how-can-i-map-through-an-object-in-reactjs */}
            {sortedAnswers.map((question, i) => (
              <button
                key={ i }
                className={
                  answered && (question === questions[currentQuestion].correct_answer
                    ? 'isCorrect' : 'isWrong')
                }
                type="button"
                data-testid={
                  (question === questions[currentQuestion].correct_answer
                    ? 'correct-answer' : `wrong-answer-${i - 1}`)
                }
                onClick={ this.answerHandler }
                disabled={ timeOut }
              >
                {question}
              </button>
            ))}
            <br />
            <button
              type="button"
              hidden={ nextButton }
              data-testid="btn-next"
              onClick={ this.nextButtonHandler }
            >
              Next
            </button>
            <button
              type="button"
              data-testid="btn-play-again"
              onClick={ () => history.push('/') }
            >
              Jogar Novamente
            </button>
            <br />
            <br />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
  questions: PropTypes.shape({
    category: PropTypes.string,
    map: PropTypes.func,
    question: PropTypes.string,
  }),
}.isRequired;

const mapStateToProps = ({ questions, answer }) => ({
  questions,
  answer,
});

const mapDispatchToProps = (dispatch) => ({
  answerDispatch: (payload) => dispatch(answerAction(payload)),
  scoreDispatch: (payload) => dispatch(playerAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
