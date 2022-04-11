const INITIAL_STATE = '';
function email(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_EMAIL':
    return action.payload;
  default:
    return state;
  }
}

export default email;
