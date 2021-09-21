import React from 'react';

export default class ProductEvaluation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: '',
    };

    this.handleRating = this.handleRating.bind(this);
  }

  handleRating({ target }) {
    this.setState({
      rating: target.value,
    });
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
            onChange={ ({ target }) => this.setState({ comment: target.value }) }
            value={ comment }
          />
        </label>
        <input
          type="button"
          value="Enviar"
          // onClick={ }
        />
      </form>
    );
  }
}
