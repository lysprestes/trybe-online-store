import React from 'react';
import { readShoppingCart } from '../services/addToLocalStorage';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      // cartLength: '',
    };
  }

  componentDidMount() {
    this.cartLength();
  }

  // componentDidUpdate(_props, prevState) {
  //   const { cart } = this.state;
  //   if (prevState.cart !== cart) return this.cartLength();
  // }

  cartLength = () => {
    const cartLength = readShoppingCart();
    this.setState({
      cart: cartLength,
    });
  }

  render() {
    const { cart } = this.state;
    console.log(cart.length);
    if (cart.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
    return (
      <div>
        {cart.map((product, index) => (
          <div key={ index } data-testid="shopping-cart-product-name">
            { product }
            <p data-testid="shopping-cart-product-quantity">{ cart.length }</p>
          </div>
        ))}
      </div>
    );
  }
}
