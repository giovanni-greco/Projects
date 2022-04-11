// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const setEmail = (payload) => (
  {
    payload,
    type: SET_EMAIL,

  }
);

export const addExpense = (payload) => (
  {
    payload,
    type: ADD_EXPENSE,

  }
);

export const removeExpense = (kill) => ({
  type: 'KILL',
  kill,
});

// function setCurrencies() {
//   fetch('https://economia.awesomeapi.com.br/json/all')
//     .then((data) => data.json())
//     .then((data) => this.setState({
//       exchangeRates: data,
//     }));
// }

// export const fetchThunk = () => async(dispatch) => (
//   try {
//     await setCurrencies();
//     dispatch({
//       type: 'FETCH_THUNK'
//     })
//   } catch (e) {
//     console.log(e);
//   }
// )
