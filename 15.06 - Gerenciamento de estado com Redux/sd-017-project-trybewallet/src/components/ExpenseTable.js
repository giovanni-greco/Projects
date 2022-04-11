import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class ExpenseTable extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }

  delete(e) {
    console.log(e.target);
  }

  render() {
    const { expenses, killExpense } = this.props;
    return (
      <header>
        <table>
          <thead>
            <tr>
              <th colSpan="1">Descrição</th>
              <th colSpan="1">Tag</th>
              <th colSpan="1">Método de pagamento</th>
              <th colSpan="1">Valor</th>
              <th colSpan="1">Moeda</th>
              <th colSpan="1">Câmbio utilizado</th>
              <th colSpan="1">Valor convertido</th>
              <th colSpan="1">Moeda de conversão</th>
              <th colSpan="1">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {
                    (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                  }
                </td>
                <td>
                  { (Number((expense.value)
                * (expense.exchangeRates[expense.currency].ask))).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    onClick={ this.editar }
                    type="button"
                  >
                    Editar despesa
                  </button>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => killExpense(expense.id) }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            )) : null}

          </tbody>
        </table>
      </header>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  killExpense: (kill) => dispatch(removeExpense(kill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
