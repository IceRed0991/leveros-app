import React from "react";
import { Container } from "./styles";
import PropTypes from "prop-types";

interface Pedido {
  id: number;
  numero: number;
  valor: number;
  status: string;
}

interface CartItemProps {
  pedido: Pedido;
}

const CartItem: React.FC<CartItemProps> = ({ pedido }) => {
  return (
    <Container>
      <p>Pedido</p>
      <p>ID: {pedido.id}</p>
      <p>Número: {pedido.numero}</p>
      <p>Valor: {pedido.valor}</p>
      <p>Status: {pedido.status}</p>
    </Container>
  );
}

CartItem.propTypes = {
  pedido: PropTypes.shape({
    id: PropTypes.number.isRequired,
    numero: PropTypes.number.isRequired,
    valor: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

export default CartItem;
