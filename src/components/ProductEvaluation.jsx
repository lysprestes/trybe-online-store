import React from 'react';

export default class ProductEvaluation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      comment: '',
    };
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRating({ target: { value } }) {
    this.setState({ rating: value });
  }

  handleChange({ target: { value } }) {
    this.setState({ comment: value });
  }

  render() {
    const { rating, comment } = this.state;
    return (
      <form>
        <div
          value={ rating }
          onChange={ this.handleRating }
        >
          <input type="radio" name="estrela" value="1" />
          1
          <input type="radio" name="estrela" value="2" />
          2
          <input type="radio" name="estrela" value="3" />
          3
          <input type="radio" name="estrela" value="4" />
          4
          <input type="radio" name="estrela" value="5" />
          5
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
    );
  }
}
