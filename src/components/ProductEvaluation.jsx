import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/ProductDetails.css';

export default class ProductEvaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      hover: null,
      comment: '',
      email: '',
    };
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
  }

  handleRating({ target: { value } }) {
    this.setState({ rating: value });
  }

  handleChange({ target: { value, id } }) {
    this.setState({ [id]: value });
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
    const { rating, comment, hover, email } = this.state;
    const maxRating = 5;

    return (
      <div className="product-evaluation">
        <h2>Avaliações</h2>
        <form className="evaluation">
          <label htmlFor="email">
            <input
              id="email"
              type="text"
              placeholder="Email"
              onChange={ this.handleChange }
              value={ email }
            />
          </label>
          <div>
            {[...Array(maxRating)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label htmlFor={ ratingValue } key={ ratingValue }>
                  <input
                    className="rating"
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
              onChange={ this.handleChange }
              value={ comment }
            />
          </label>
          <input
            type="button"
            value="Enviar"
          />
        </form>
      </div>
    );
  }
}
