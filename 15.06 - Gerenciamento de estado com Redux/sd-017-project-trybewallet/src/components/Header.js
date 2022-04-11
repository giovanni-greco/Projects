import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  getTotalExpenses = () => {
    const { wallet } = this.props;
    console.log(wallet);

    if (wallet.length > 0) {
      let total = 0;

      wallet.forEach((expense) => {
        total += Number(expense.value)
           * Number(expense.exchangeRates[expense.currency].ask);
      });
      return total.toFixed(2);
    }
    return 0;
  }

  render() {
    const { email } = this.props;

    return (
      <div>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          { this.getTotalExpenses() }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  wallet: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
