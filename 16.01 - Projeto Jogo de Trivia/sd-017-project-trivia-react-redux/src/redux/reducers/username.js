const INITIAL_STATE = '';
function username(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_USERNAME':
    return action.payload;
  default:
    return state;
  }
}

export default username;
