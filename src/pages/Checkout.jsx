import React from 'react';
import '../css/Checkout.css';

export default class Checkout extends React.Component {
  render() {
    return (
      <section>
        <fieldset className="scheduler-border1">
          <legend className="scheduler-border2">Revise seus Produtos</legend>
        </fieldset>
        <form className="form-inline">
          <fieldset className="scheduler-border1">
            <legend className="scheduler-border2">Informações do Comprador</legend>
            <label htmlFor="name" className="control-label">
              Nome
              <input
                type="text"
                name="name"
                id="name"
                data-testid="checkout-fullname"
                placeholder="Digite seu nome completo"
                size="30"
                className="form-control"
              />
            </label>

            <label htmlFor="email" className="control-label">
              Email
              <input
                type="email"
                name="email"
                id="email"
                data-testid="checkout-email"
                placeholder="Digite seu email"
                className="form-control"
              />
            </label>

            <label htmlFor="cpf" className="control-label">
              CPF
              <input
                type="text"
                name="cpf"
                id="cpf"
                data-testid="checkout-cpf"
                placeholder="Digite seu CPF"
                className="form-control"
              />
            </label>
            <label htmlFor="phone" className="control-label">
              Telefone
              <input
                type="text"
                name="phone"
                id="phone"
                data-testid="checkout-phone"
                placeholder="Digite seu número de telefone"
                className="form-control"
              />
            </label>

            <label htmlFor="cep" className="control-label">
              CEP
              <input
                type="text"
                name="cep"
                id="cep"
                data-testid="checkout-cep"
                placeholder="Digite seu CEP"
                className="form-control"
              />
            </label>

            <label htmlFor="adress" className="control-label">
              Endereço
              <input
                type="text"
                name="adress"
                id="adress"
                data-testid="checkout-address"
                placeholder="Digite seu endereço completo"
                className="form-control"
              />
            </label>
          </fieldset>
          <button type="button" className="btn btn-primary btn-checkout">
            Comprar
          </button>
        </form>
      </section>
    );
  }
}
