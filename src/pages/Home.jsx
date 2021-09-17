import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../images/shopping-cart.png';
import Categories from '../components/Categories';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.handleCategories = this.handleCategories.bind(this);
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

  render() {
    const { categories } = this.state;
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
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
