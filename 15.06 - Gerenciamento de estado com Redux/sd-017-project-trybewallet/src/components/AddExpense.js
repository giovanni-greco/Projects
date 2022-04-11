import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/index';

class AddExpense extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
      expenses: [],
    };

    this.formHandler = this.formHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.setCurrencies = this.setCurrencies.bind(this);
  }

  componentDidMount() {
    this.setCurrencies();
  }

  setCurrencies() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((data) => data.json())
      .then((data) => this.setState({
        exchangeRates: data,
      }));
  }

  formHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  submitHandler() {
    const {
      value,
      description, currency, method, tag, expenses, exchangeRates,
    } = this.state;

    const { submitExpense } = this.props;

    const id = expenses.length === 0 ? 0 : expenses.length;

    this.setState({
      expenses:
    [...expenses, { id, value, description, currency, method, tag, exchangeRates }],
    });

    submitExpense(expenses);

    this.setState({
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;

    return (
      <div>
        <h4>Add expense:</h4>

        <label htmlFor="expense-value">
          Value:
          <input
            id="expense-value"
            type="text"
            data-testid="value-input"
            value={ value }
            name="value"
            onChange={ this.formHandler }
          />
        </label>

        <label htmlFor="expense-description">
          description:
          <input
            id="expense-description"
            type="text"
            data-testid="description-input"
            value={ description }
            name="description"
            onChange={ this.formHandler }
          />
        </label>

        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
            type="text"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.formHandler }
          >
            {/* <option value="choose">Choose</option> */}
            { Object.keys(exchangeRates).map((c) => (
              c === 'USDT' ? null
                : <option key={ c } data-testid={ c } value={ c }>{c}</option>
            ))}

            {exchangeRates.length > 0 ? exchangeRates.map((currencyHandle) => (
              console.log(currencyHandle)
            )) : null}
          </select>
        </label>

        <br />

        <label htmlFor="method">
          Payment method:
          <select
            name="method"
            id="method"
            type="text"
            data-testid="method-input"
            value={ method }
            onChange={ this.formHandler }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Expense kind:
          <select
            name="tag"
            id="tag"
            type="text"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.formHandler }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.submitHandler }
        >
          Adicionar despesa
        </button>

      </div>
    );
  }
}

AddExpense.propTypes = {
  submitExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  submitExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpense);
