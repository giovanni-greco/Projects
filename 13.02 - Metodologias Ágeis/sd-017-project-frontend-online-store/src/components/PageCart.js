import React, { Component } from 'react';
import ProductCart from './ProductCart';

class PageCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const product = JSON.parse(localStorage.getItem('products'));
    this.setState({
      products: product,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        {!products ? (
          <p
            data-testid="shopping-cart-empty-message"
            className="empty-cart-warning"
          >
            Seu carrinho está vazio!
          </p>
        ) : (
          products.map((product) => (<ProductCart
            key={ product.id }
            productImgUrl={ product.thumbnail }
            productName={ product.title }
            productPrice={ product.price }
          />
          ))
        )}
      </div>
    );
  }
}

export default PageCart;
