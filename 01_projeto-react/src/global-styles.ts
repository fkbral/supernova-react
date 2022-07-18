import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  body {
    font-family: ${theme.fontFamily.body};
    background-color: ${theme.colors['background-color']};
    color: ${theme.colors['text-color']};
  }
`}`
