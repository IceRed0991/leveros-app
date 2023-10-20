import { BtSair, Container, Sub } from "./styles";
import Logo from '../../assets/logoNegative 3.png'
import { Link } from "react-router-dom";


export default function TopBar() {


  return (
    <Container>
      <Sub >
        <img src={Logo}></img>
        <h4>MONITORAMENTO DE PEDIDOS</h4>
      </Sub>






      <Link to={"/"}>
        <BtSair>SAIR</BtSair>
      </Link>
    </Container>
  )
}
