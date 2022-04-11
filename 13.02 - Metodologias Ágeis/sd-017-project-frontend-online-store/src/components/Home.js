import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <ul>
          <ProductList />
        </ul>
        <Footer />
      </div>
    );
  }
}

export default Home;
