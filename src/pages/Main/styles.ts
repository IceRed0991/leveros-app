import styled from 'styled-components'
import Logo from '../../assets/fundo-tela-login.png'
import LogoTexto from '../../assets/logoNegative 1.png'
import LogoTexto2 from '../../assets/logoPosColor 1.png'
export const Container = styled.main`
  width: 100%;
   min-height: 95vh;
   display: flex;

  `
export const SideLogo = styled.aside`
width: 450px; /* Largura da barra lateral */
height: 100vh;
background-image: url(${Logo}); /* Caminho da imagem de fundo */
background-size: cover; /* Ajuste a imagem de fundo para cobrir todo o elemento */
background-position: center; /* Centralize a imagem de fundo */
`;
export const SideLogoCover = styled.aside`
width: 450px; /* Largura da barra lateral */
height: 100vh;
background-size: cover; /* Ajuste a imagem de fundo para cobrir todo o elemento */
background-position: center; /* Centralize a imagem de fundo */
background-color: #005a64 ;
opacity: 30%;
`;

export const LogoText = styled.div`
position: absolute;
top: 0;
background-image: url(${LogoTexto});
width: 271px;
height: 91px;
background-size: contain;/* Ajuste a imagem de fundo para não ultrapassar o container */
overflow: hidden;
opacity: 100%;

`
export const LogoText2 = styled.div`
position: relative;
background-image: url(${LogoTexto2});
width: 376px;
height: 127px;
background-size: contain;/* Ajuste a imagem de fundo para não ultrapassar o container */
overflow: hidden;
`
export const Secao = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
overflow: auto;
justify-content: center;
align-items: center;
`

export const Title = styled.h1`
padding-left: 100px;
font-size: 24px;
font-weight: 700;
`
export const Label = styled.label`
font-size: 24px;
font-weight: 400;
`
export const Input = styled.input`
margin-bottom:30px ;
border: solid 1px;
border-radius: 2px;
padding: 10px 100px 10px 10px;
width: 100%;
`

export const Form = styled.form`
margin: 50px;
display: flex;
flex:1;
flex-direction: column;
`

export const Entrar = styled.button`
  margin-top:10px;
  font-size: 30px;
  background-color:#002d32;
  color: white;
  width:161px;
  height:60px;
  cursor: pointer;

`

export const ShowPwd = styled.button`
  position: absolute;
  background-color: transparent;
  top: 5px;
  right: -105px;
  border: none;
  padding: 0 10px;
  cursor: pointer;
  background-color:#002d32;
  color: white;
  width: fit-content;
  padding:6px;
  font-weight: 400;
  border-radius: 4px;
  width:71px;
  height:29px;
`


export const DivPwd = styled.div`
position: relative;
display: inline-block;


`
