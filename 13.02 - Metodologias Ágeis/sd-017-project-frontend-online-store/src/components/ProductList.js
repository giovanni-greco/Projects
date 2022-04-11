import React, { Component } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Product from './Product';
import './ProductList.css';

export default class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      inputValue: '',
      filteredProducts: [],
      productCart: [],
      quant: 1,
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.productFilter = this.productFilter.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.categoryButton = this.categoryButton.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    getCategories().then((data) => this.setState(
      { categories: data },
    ));
    this.handlePrevState();
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

  async productFilter(categoryValue, inputValue) {
    const products = await getProductsFromCategoryAndQuery(categoryValue, inputValue);
    this.setState({ filteredProducts: products.results });
  }

  searchButton() {
    const { inputValue } = this.state;
    this.productFilter(inputValue, inputValue);
  }

  categoryButton({ target: { id } }) {
    this.productFilter(id, id);
  }

  async inputHandler({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  async addProduct(product) {
    this.handleState(product);
  }

  render() {
    const {
      categories,
      filteredProducts,
      quant,
      productCart,
    } = this.state;
    console.log(quant);
    return (
      <div className="search-container">
        <div data-testid="home-initial-message" className="text-container">
          <span>Digite algum termo de pesquisa ou escolha uma categoria.</span>
          <form className="search-input">
            <input
              type="text"
              placeholder="Pesquisa"
              onChange={ this.inputHandler }
              data-testid="query-input"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.searchButton }
              className="button-search"
            >
              <FontAwesomeIcon icon={ faSearch } className="fa-button" />
            </button>
          </form>
        </div>
        <section className="categories-products">
          <div className="category-list">
            {
              categories.map((category) => (
                <button
                  onClick={ this.categoryButton }
                  type="button"
                  key={ category.name }
                  id={ category.name }
                  data-testid="category"
                >
                  {category.name}
                </button>
              ))
            }
          </div>
          <section className="products">
            {filteredProducts.length && filteredProducts.map((product) => (
              <Product
                key={ product.id }
                productImgUrl={ product.thumbnail }
                productName={ product.title }
                productPrice={ product.price }
                buttonCart={ () => this.addProduct(product) }
                productId={ product.id }
                cartProducts={ productCart }
              />
            ))}
          </section>
        </section>
      </div>
    );
  }
}
