import React from 'react';
import search from '../images/loupe.png';
import Categories from '../components/Categories';
import ProductCards from '../components/ProductCards';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      // category: '',
      searchInput: '',
      products: [],
      checkedInput: '',
    };
    this.handleCategories = this.handleCategories.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(event) {
    const { checked, id } = event.target;
    if (checked) {
      this.setState({
        checkedInput: id,
      }, this.onChange);
    }
  }

  async onChange() {
    const { checkedInput, searchInput } = this.state;
    const products = await getProductsFromCategoryAndQuery(checkedInput, searchInput);
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
          onClick={ this.onChange }
        >
          <img src={ search } alt="lupa" width="15px" />
        </button>
        <h1>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <ProductCards products={ products } />
        <Categories categories={ categories } onChange={ this.handleSelect } />
      </div>
    );
  }
}
