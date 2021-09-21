import React from 'react';
import { readShoppingCart, removeProduct } from '../services/addToLocalStorage';
import close from '../images/close.png';
import minus from '../images/minus.png';
import add from '../images/add.png';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      // cartLength: '',
    };

    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  componentDidMount() {
    this.cartLength();
  }

  // componentDidUpdate(_props, prevState) {
  //   const { cart } = this.state;
  //   if (prevState.cart !== cart) return this.cartLength();
  // }

  handleRemoveClick(product) {
    removeProduct(product);
  }

  cartLength = () => {
    const cartLength = readShoppingCart();
    this.setState({
      cart: cartLength,
    });
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
              // onClick={ this.onClick }
            >
              <img src={ minus } alt="diminuir a quantidade do item" width="15px" />
            </button>
            <p data-testid="shopping-cart-product-quantity">{ product.amount }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              // onClick={ this.onClick }
            >
              <img src={ add } alt="aumentar a quantidade do item" width="15px" />
            </button>
          </div>
        ))}
      </div>
    );
  }
}
