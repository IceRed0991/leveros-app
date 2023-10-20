
import { Link } from 'react-router-dom'
import { Container, SideLogo, LogoText, LogoText2, Secao, Title, Label, Input, Form, Entrar, DivPwd, ShowPwd, SideLogoCover } from './styles'


export default function Main() {


  return (
    <Container>

      <SideLogo>
        <SideLogoCover />
        <LogoText />
      </SideLogo>

      <Secao>
        <LogoText2 />
        <Title>Acesse o Painel de Monitoramento</Title>
        <Form>
          <Label>Email:</Label>
          <Input type='text' placeholder='Digite seu email' />
          <Label>Senha:</Label>
          <DivPwd>
            <Input type='password' placeholder='Digite sua senha'></Input>
            <ShowPwd>Show</ShowPwd>
          </DivPwd>
          <Link to={"/pedidos"}>
            <Entrar>Entrar</Entrar>
          </Link>
        </Form>

      </Secao>

    </Container >
  )
}
