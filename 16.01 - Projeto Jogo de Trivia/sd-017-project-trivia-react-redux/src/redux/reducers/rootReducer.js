import { combineReducers } from 'redux';
import token from './token';
import email from './email';
import questions from './questions';
import gravatar from './gravatar';
import username from './username';
import answer from './answer';
import player from './player';

export default combineReducers({
  token,
  email,
  questions,
  gravatar,
  username,
  answer,
  player,
});
