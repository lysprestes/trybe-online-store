import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToLocalStorage, readShoppingCart } from '../services/addToLocalStorage';
import cartImage from '../images/shopping-cart.png';
import freeShipping from '../images/free.png';
import ProductEvaluation from '../components/ProductEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { item: props.location.state.item, count: '' };
  }

  componentDidMount() {
    this.handleCart();
  }

  handleCart(title) {
    addToLocalStorage(title);
    const cartItems = readShoppingCart();
    const total = cartItems.reduce((curr, item) => curr + item.amount, 0);
    this.setState({ count: total });
  }

  render() {
    const { item, count } = this.state;
    const { title } = item;
    return (
      <section>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img src={ cartImage } width="30px" alt="Carrinho de Compras" />
          <span data-testid="shopping-cart-size">
            { count }
          </span>
        </Link>
        <div data-testid="product-detail-name">{title}</div>
        { item.shipping.free_shipping ? (
          <div data-testid="free-shipping">
            <img src={ freeShipping } alt="Frete Grátis" width="50px" />
            <span>Frete Grátis</span>
          </div>
        ) : (
          <div />
        ) }

        <button
          type="button"
          className="btn btn-success"
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
