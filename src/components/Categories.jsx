import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories, onChange } = this.props;
    return (
      <div>
        <aside>
          {categories.map(({ id, name }) => (
            <label htmlFor="input" key={ id }>
              <input
                type="radio"
                data-testid="category"
                key={ id }
                id={ id }
                name="categories"
                onChange={ onChange }
              />
              { name }
            </label>
          ))}
        </aside>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};
