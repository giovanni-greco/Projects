const INITIAL_STATE = '';
function token(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'TOKEN':
    return action.payload;
  default:
    return state;
  }
}

export default token;
