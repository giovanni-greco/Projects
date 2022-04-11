const INITIAL_STATE = '';
function gravatar(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_GRAVATAR':
    return action.payload;
  default:
    return state;
  }
}

export default gravatar;
