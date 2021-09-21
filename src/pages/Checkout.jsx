import React from 'react';

export default class Checkout extends React.Component {
  render() {
    return (
      <section>
        <h3>Revise seus Produtos</h3>
        <form>
          <h3>Informações do Comprador</h3>
          <input
            type="text"
            name="name"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            size="30"
          />
          <input
            type="email"
            name="email"
            data-testid="checkout-email"
            placeholder="Email"
          />
          <input
            type="text"
            name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF"
          />
          <input
            type="text"
            name="phone"
            data-testid="checkout-phone"
            placeholder="Telefone"
          />
          <input
            type="text"
            name="cep"
            data-testid="checkout-cep"
            placeholder="CEP"
          />
          <input
            type="text"
            name="adress"
            data-testid="checkout-address"
            placeholder="Endereço Completo"
          />
        </form>
      </section>
    );
  }
}
