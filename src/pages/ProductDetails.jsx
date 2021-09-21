import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToLocalStorage } from '../services/addToLocalStorage';
import cartImage from '../images/shopping-cart.png';
import ProductEvaluation from '../components/ProductEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  handleCart(title) {
    addToLocalStorage(title);
  }

  render() {
    const { item } = this.state;
    const { title } = item;
    return (
      <section>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ cartImage } width="30px" alt="Carrinho de Compras" />
        </Link>

        <div data-testid="product-detail-name">{title}</div>
        { item.shipping.free_shipping ? (
          <div data-testid="free-shipping">Frete Grátis</div>
        ) : (
          <div />
        ) }

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleCart(item) }
        >
          Adicionar ao carrinho
        </button>

        <ProductEvaluation />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductDetails;
