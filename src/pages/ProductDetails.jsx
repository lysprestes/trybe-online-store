import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  render() {
    const { title } = this.state;

    return <div data-testid="product-detail-name">{title}</div>;
  }
}

ProductDetails.propTypes = {
  location: PropTypes.object,
}.isRequired;

export default ProductDetails;
