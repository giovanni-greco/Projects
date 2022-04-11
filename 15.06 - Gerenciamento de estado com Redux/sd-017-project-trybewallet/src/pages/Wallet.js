import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    // const { email, expenses, currency } = this.props;

    return (
      <div>
        <Header />
        <br />
        <AddExpense />
        <br />
        <ExpenseTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.any,
}.isRequired;

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
  currency: wallet.currencies,
});

export default connect(mapStateToProps, null)(Wallet);
