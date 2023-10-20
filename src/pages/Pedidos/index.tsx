import { useEffect, useState } from "react"
import ItemPedido from "../../components/ItemPedido"
import StatusPedidos from "../../components/StatusPedidos"
import TopBar from "../../components/TopBar"
import TotalVendasBar from "../../components/TotalVendasBar"
import { Container, ItemSection, Secao } from "./styles"
import { getPedidos } from "../../services/api"

export default function Pedidos() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getPedidos();
        // console.log(response.data)
        if (response && response.data) {
          // Verifica se a resposta contém dados
          const data = response.data;
          setPedidos(data);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <TopBar />
      <Secao>
        <StatusPedidos />
        <TotalVendasBar />
      </Secao>

      <ItemSection>
        <ItemPedido pedidos={pedidos} />
      </ItemSection>
    </Container>
  )
};
