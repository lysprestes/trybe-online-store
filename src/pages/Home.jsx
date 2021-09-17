import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../images/shopping-cart.png';
import search from '../images/loupe.png';
import Categories from '../components/Categories';
import ProductCards from '../components/ProductCards';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: '',
      searchInput: '',
      products: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleCategories();
  }

  async handleCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  handleChange({ target }) {
    this.setState({
      searchInput: target.value,
    });
  }

  async handleClick() {
    const { category, searchInput } = this.state;
    const products = await getProductsFromCategoryAndQuery(category, searchInput);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { categories, searchInput, products } = this.state;
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
          onChange={ this.handleChange }
          value={ searchInput }
          data-testid="query-input"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          <img src={ search } alt="lupa" width="50px" />
        </button>
        <h1>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ProductCards products={ products } />
        <p>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ cartImage } width="50px" alt="Carrinho de Compras" />
          </Link>
        </p>
        <Categories categories={ categories } />
      </div>
    );
  }
}
