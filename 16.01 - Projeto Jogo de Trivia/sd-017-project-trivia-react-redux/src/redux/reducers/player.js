const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_SCORE':
    return { ...state,
      score: action.payload };
  case 'SET_USERNAME':
    return { ...state,
      name: action.payload };
  case 'SET_GRAVATAR':
    return { ...state,
      gravatarEmail: action.payload };
  case 'SET_ANSWER':
    return { ...state,
      assertions: action.payload };
  default:
    return state;
  }
}

export default player;
