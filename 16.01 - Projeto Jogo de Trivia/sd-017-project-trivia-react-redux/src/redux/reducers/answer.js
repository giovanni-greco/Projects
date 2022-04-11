const INITIAL_STATE = 0;
function answer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ANSWER':
    return state + action.payload;
  default:
    return state;
  }
}

export default answer;
