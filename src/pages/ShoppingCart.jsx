import React from 'react';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    const { cart } = this.state;
    if (!cart) {
      return (
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      );
    }
    return (
      <>
      </>
    );
  }
}
