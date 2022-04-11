import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const {
      productImgUrl,
      productName,
      productPrice,
      buttonCart,
      productId,
    } = this.props;

    // Alteração na URL da imagem pra aumentar a resolução
    // const newProductImgUrl = productImgUrl.replace('-I', '-W');

    return (
      // Alterar a src da img pra "newProductImgUrl" quando terminar o prazo do projeto
      <div data-testid="product" className="product">
        <img src={ productImgUrl } alt={ productName } width="250px" />
        <span
          data-testid="shopping-cart-product-name"
          className="product-name"
        >
          { productName }
        </span>
        <span className="product-price">
          $
          { productPrice }
        </span>
        <Link
          to={ `/product/${productId}` }
          id={ productId }
          data-testid="product-detail-link"
          className="product-details-button"
        >
          Detalhes
        </Link>
        <button
          type="button"
          onClick={ buttonCart }
          data-testid="product-add-to-cart"
          className="add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  productImgUrl: propTypes.string,
  productName: propTypes.string,
  productPrice: propTypes.string,
}.isRequired;
