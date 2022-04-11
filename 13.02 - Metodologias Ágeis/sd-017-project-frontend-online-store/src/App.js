import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import PageCart from './components/PageCart';
import DetailedProduct from './components/DetailedProduct';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ PageCart } />
        <Route exact path="/product/:id" component={ DetailedProduct } />
      </Router>
    );
  }
}
