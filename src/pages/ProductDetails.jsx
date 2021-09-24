import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { addToLocalStorage, readShoppingCart } from '../services/addToLocalStorage';
import cartImage from '../images/shopping-cart.png';
import freeShipping from '../images/free.png';
import ProductEvaluation from '../components/ProductEvaluation';
import '../css/ProductDetails.css';

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
    const { title, price, thumbnail } = item;
    return (
      <section className="body">
        <header>
          <Link to="/">
            <BsArrow90DegLeft size="30" />
          </Link>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ cartImage } width="30px" alt="Carrinho de Compras" />
            <span data-testid="shopping-cart-size">
              { count }
            </span>
          </Link>
        </header>
        <div className="product-title">
          <h1 data-testid="product-detail-name">
            {`${title} - R$${price}`}
          </h1>
          { item.shipping.free_shipping ? (
            <div data-testid="free-shipping" className="shipping">
              <img src={ freeShipping } alt="Frete Grátis" width="50px" />
              <span>Frete Grátis</span>
            </div>
          ) : (
            <div />
          ) }
        </div>

        <div className="info">
          <img src={ thumbnail } alt={ `Imagem produto ${title}` } />
          <div>
            <h2>Especificações Técnicas</h2>
            <ul>
              <li>TESTE</li>
            </ul>
          </div>
        </div>

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
