// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: ['BRL'],
  expenses: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:

    return { ...state,
      expenses: action.payload,
    };

  case 'KILL':
    return {
      ...state,
      expenses: [...state.expenses.filter(
        (expense) => expense.id !== action.kill,
      )],
    };

  default:
    return state;
  }
};

export default reducer;
