import React from "react";
import CartItem from "./CardItem";
import { Card, ItemSection } from "./styles";

interface Pedido {
  id: number;
  numero: number;
  valor: number;
  status: string;
}

interface ItemPedidoProps {
  pedidos: Pedido[];
}

const ItemPedido: React.FC<ItemPedidoProps> = ({ pedidos }) => {
  return (

    <ItemSection>

      {pedidos.map((pedido) => (
        <Card key={pedido.id}>
          <CartItem key={pedido.id} pedido={pedido} />
        </Card>
      ))}

    </ItemSection>

  );
};

ItemPedido.defaultProps = {
  pedidos: [],
};

export default ItemPedido;
