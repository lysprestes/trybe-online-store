import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToLocalStorage } from '../services/addToLocalStorage';
import freeShipping from '../images/free.png';

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
        {products.map((item, id) => (
          <div key={ id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: `/details/${id}`,
                state: {
                  item,
                  id,
                },
              } }
            >
              <img src={ item.thumbnail } alt={ ` imagem ${item.title}` } />
              { item.shipping.free_shipping ? (
                <div data-testid="free-shipping">
                  <img src={ freeShipping } alt="Frete Grátis" width="50px" />
                  <span>Frete Grátis</span>
                </div>
              ) : (
                <div />
              ) }
              <h4>{item.title}</h4>
            </Link>

            <p>{item.price}</p>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.handleCart(item) }
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
