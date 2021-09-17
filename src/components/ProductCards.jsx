import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCards extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map(({ title, thumbnail, price }, id) => (
          <div key={ id } data-testid="product">
            <img src={ thumbnail } alt={ `imagem ${title}` } />
            <h4>{ title }</h4>
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
