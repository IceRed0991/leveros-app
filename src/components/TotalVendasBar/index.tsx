import { useEffect, useState } from "react";
import { getTotalVendas } from "../../services/api";
import { Container, Title, TotalVendas } from "./styles";

export default function TotalVendasBar() {

  const [totalVendas, setTotalVendas] = useState({
    totalVendas: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getTotalVendas();
        console.log(response.data)
        if (response && response.data) {
          // Verifica se a resposta contém dados
          const data = response.data[0];
          setTotalVendas(data);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadData();
  }, []);

  return (

    <Container>
      <Title>Total de Vendas</Title>
      <TotalVendas>{`R$${totalVendas.totalVendas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}</TotalVendas>
    </Container>
  );

}
