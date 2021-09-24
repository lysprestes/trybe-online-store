import React from 'react';
import { Link } from 'react-router-dom';
import {
  readShoppingCart,
  removeProduct,
  decreaseItem,
  addToLocalStorage,
} from '../services/addToLocalStorage';
import close from '../images/close.png';
import minus from '../images/minus.png';
import add from '../images/add.png';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  componentDidMount() {
    this.cartLength();
  }

  handleRemoveClick(product) {
    removeProduct(product);
    this.setState({ cart: readShoppingCart() });
  }

  handleDecrease(product) {
    if (product.amount === 1) {
      this.handleRemoveClick(product);
    } else {
      decreaseItem(product);
      this.setState({ cart: readShoppingCart() });
    }
  }

  handleIncrease(product) {
    if (product.amount <= product.available_quantity) {
      addToLocalStorage(product);
      this.setState({ cart: readShoppingCart() });
    }
  }

  cartLength = () => {
    this.setState({ cart: readShoppingCart() });
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
    return (
      <div>
        {cart.map((product, index) => (
          <div key={ index } data-testid="shopping-cart-product-name">
            <button
              type="button"
              onClick={ () => this.handleRemoveClick(product) }
            >
              <img src={ close } alt="remover produto" width="15px" />
            </button>
            { product.title }
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.handleDecrease(product) }
            >
              <img src={ minus } alt="diminuir a quantidade do item" width="15px" />
            </button>
            <p data-testid="shopping-cart-product-quantity">{ product.amount }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              disabled={ product.amount === product.available_quantity }
              onClick={ () => this.handleIncrease(product) }
            >
              <img src={ add } alt="aumentar a quantidade do item" width="15px" />
            </button>
          </div>
        ))}
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}
