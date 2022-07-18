import styled, { css } from 'styled-components'

export const LoginForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    max-width: 30rem;

    margin: 2.4rem auto 0;

    border: 1px solid #ddd;
    border-radius: 0.4rem;
    padding: 1.5rem 1.5rem 0;

    label {
      color: ${theme.colors['primary-color']};
    }

    button {
      margin: 2.4rem;
      background-color: ${theme.colors['primary-color']};
    }
  `}
`
