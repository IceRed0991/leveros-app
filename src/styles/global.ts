import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;

  body {
    background: #EBECEC;
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fontFamily.inter};
    padding: 0rem;
  }
`
