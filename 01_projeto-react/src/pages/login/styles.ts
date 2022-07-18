import styled, { css } from 'styled-components'

const customTheme = {
  fontFamily: {},
  colors: {
    'primary-color': 'steelblue',
    'secondary-color': 'white',
  },
}

type LoginFormProps = {
  customTheme: typeof customTheme
}

export const LoginForm = styled.form<LoginFormProps>`
  ${({ customTheme }) => css`
    display: flex;
    flex-flow: column wrap;
    max-width: 30rem;

    margin: 2.4rem auto 0;

    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 1.5rem 1.5rem 0;

    button {
      margin: 2.4rem;
      background-color: ${customTheme.colors['primary-color']};
    }
  `}
`
