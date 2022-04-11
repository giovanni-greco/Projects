import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductDetails } from '../services/api';
import Rating from './Rating';

export default class DetailedProduct extends Component {
  constructor() {
    super();

    this.state = {
      productDetails: [],
      comentario: '',
      nota: '',
      avaliacoes: [],
      avaliacaoNota: '',
      email: [],
      emailInput: '',
    };

    this.getRatings = this.getRatings.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleNota = this.handleNota.bind(this);
  }

  componentDidMount() {
    const SLICE_SIZE = -13;
    const { location } = this.props;
    const path = location.pathname;
    const id = path.slice(SLICE_SIZE);

    getProductDetails(id)
      .then((data) => this.setState({
        productDetails: data,
      }));
    this.handlePrevState();

    this.getRatings();
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  handleNota({ target }) {
    const { value } = target;
    this.setState({ nota: value });
  }

  handleButton(event) {
    event.preventDefault();

    const { comentario, nota, emailInput } = this.state;

    this.setState((prevState) => ({
      avaliacoes:
      prevState.avaliacoes ? [...prevState.avaliacoes, comentario] : [comentario],
      email: prevState.email ? [...prevState.email, emailInput] : [emailInput],
      avaliacaoNota: nota,
    }), () => {
      const { avaliacoes, email } = this.state;
      localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
      localStorage.setItem('email', JSON.stringify(email));
    });
  }

  handleState(product) {
    const { productCart } = this.state;
    this.setState({
      productCart:
      productCart ? [product, ...productCart] : [product],
    },
    () => {
      const { productCart: products } = this.state;
      localStorage.setItem('products', JSON.stringify(products));
    });
  }

  handlePrevState() {
    this.setState({
      productCart: JSON.parse(localStorage.getItem('products')),
    });
  }

  getRatings() {
    const ratings = JSON.parse(localStorage.getItem('avaliacoes'));
    const emails = JSON.parse(localStorage.getItem('email'));
    this.setState({
      avaliacoes: ratings,
      email: emails,
    });
  }

  addProduct(product) {
    this.handleState(product);
  }

  btnHandler() {
    const { history } = this.props;
    history.push('/cart');
  }

  render() {
    const {
      productDetails, comentario, avaliacoes, avaliacaoNota, email, emailInput,
    } = this.state;

    // Alteração na URL da imagem pra aumentar a resolução
    // const newProductImgUrl = productDetails.thumbnail.replace('-I', '-W');

    return (
      <div className="detailed-product">
        <h3
          data-testid="product-detail-name"
          className="detailed-product"
        >
          { productDetails.title }
        </h3>
        {
        /* Alterar a src da img pra newProductImgUrl quando terminar o prazo do projeto */
        }
        <img src={ productDetails.thumbnail } alt="foto" />
        <p className="detailed-product-price">
          R$
          { productDetails.price }
        </p>
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.btnHandler }
          className="detailed-product-cart-button"
        >
          Meu carrinho
        </button>

        <Rating
          comentario={ comentario }
          avaliacoes={ avaliacoes }
          avaliacaoNota={ avaliacaoNota }
          email={ email }
          emailInput={ emailInput }
          handleNota={ this.handleNota }
          handleButton={ this.handleButton }
          handleChange={ this.handleChange }
        />

        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addProduct(productDetails) }
          className=".detailed-product-add-to-cart-button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
// comentario

DetailedProduct.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.shape({
      slice: PropTypes.func,
    }),
  }),
}.isRequired;
