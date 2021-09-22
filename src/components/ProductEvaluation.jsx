import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/ratingCSS.css';

export default class ProductEvaluation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      hover: null,
      comment: '',
    };

    this.handleRating = this.handleRating.bind(this);
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
  }

  handleRating({ target }) {
    this.setState({
      rating: target.value,
    });
  }

  handleHoverEnter(rating) {
    this.setState({
      hover: rating,
    });
  }

  handleHoverLeave() {
    this.setState({
      hover: null,
    });
  }

  render() {
    const { rating, comment, hover } = this.state;
    const maxRating = 5;

    return (
      <form>
        <div
          value={ rating }
          onChange={ this.handleRating }
        >
          {[...Array(maxRating)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label htmlFor={ ratingValue } key={ ratingValue }>
                <input
                  type="radio"
                  name="rating"
                  id={ ratingValue }
                  value={ ratingValue }
                  onClick={ this.handleRating }
                />
                <FaStar
                  className="star"
                  size="30"
                  onMouseEnter={ () => this.handleHoverEnter(ratingValue) }
                  onMouseLeave={ this.handleHoverLeave }
                  color={ ratingValue <= (hover || rating) ? '#ffc107' : 'grey' }
                />
              </label>
            );
          })}
        </div>

        <label htmlFor="comment">
          <textarea
            id="comment"
            type="text"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            onChange={ ({ target }) => this.setState({ comment: target.value }) }
            value={ comment }
          />
        </label>
        <input
          type="button"
          value="Enviar"
        />
      </form>
    );
  }
}
