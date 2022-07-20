import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  body {
    font-family: ${theme.typography.fontFamily.body};
    background-color: ${theme.colors['background-color']};
    color: ${theme.colors['text-color']};
  }

  h1,
  h2 {
    font-family: ${theme.typography.fontFamily.title};
  }

  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.typography.fontFamily.heading};
  }
`}`
