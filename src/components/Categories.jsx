import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          {categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }>{ name }</li>
          ))}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
