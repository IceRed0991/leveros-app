import React, { useEffect, useState } from "react";
import { Container, StatusItens, StatusText, Secao } from "./styles";
import { getResumoStatus } from "../../services/api";

export default function StatusPedidos() {
  const [resumoStatus, setResumoStatus] = useState({
    qtdStatusProcessando: 0,
    qtdStatusPendente: 0,
    qtdStatusAprovado: 0,
    qtdStatusCancelado: 0,
    qtdTotalPedidos: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await getResumoStatus();
        console.log(response.data)
        if (response && response.data) {
          // Verifica se a resposta contém dados
          const data = response.data[0];
          setResumoStatus(data);
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    loadData();
  }, []);

  return (
    <Container>
      <h3>Status dos Pedidos</h3>
      <Secao>
        <StatusItens>
          <label style={{ color: '#FFCE00' }}>{resumoStatus.qtdStatusProcessando}</label>
          <StatusText>Processando</StatusText>
        </StatusItens>

        <StatusItens>
          <label style={{ color: '#2993ce' }}>{resumoStatus.qtdStatusPendente}</label>
          <StatusText>Pendente</StatusText>
        </StatusItens>

        <StatusItens>
          <label style={{ color: '#005A64' }}>{resumoStatus.qtdStatusAprovado}</label>
          <StatusText>Aprovado</StatusText>
        </StatusItens>

        <StatusItens>
          <label style={{ color: '#C73939' }}>{resumoStatus.qtdStatusCancelado}</label>
          <StatusText>Cancelado</StatusText>
        </StatusItens>

        <StatusItens>
          <label style={{ color: '#000' }}>{resumoStatus.qtdTotalPedidos}</label>
          <StatusText>Total</StatusText>
        </StatusItens>
      </Secao>

    </Container>
  );
}
