import React from 'react';
import PropTypes from 'prop-types';
import addToLocalStorage from '../services/addToLocalStorage';
// import ShoppingCart from '../pages/ShoppingCart';

export default class ProductCards extends React.Component {
  constructor(props) {
    super(props);
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart(title) {
    addToLocalStorage(title);
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ title, thumbnail, price }, id) => (
          <div key={ id } data-testid="product">
            <img src={ thumbnail } alt={ `imagem ${title}` } />
            <h4>{ title }</h4>
            <p>{ price }</p>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.handleCart(title) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
