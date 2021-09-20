import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToLocalStorage } from '../services/addToLocalStorage';
import cartImage from '../images/shopping-cart.png';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  handleCart(title) {
    addToLocalStorage(title);
  }

  render() {
    const { title } = this.state;

    return (
      <section>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ cartImage } width="30px" alt="Carrinho de Compras" />
        </Link>

        <div data-testid="product-detail-name">{title}</div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleCart(title) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
