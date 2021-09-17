import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../images/shopping-cart.png';

export default class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <p>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ cartImage } width="50px" alt="Carrinho de Compras" />
          </Link>
        </p>
      </div>
    );
  }
}
