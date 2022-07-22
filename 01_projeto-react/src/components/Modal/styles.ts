import styled, { css } from 'styled-components'

export const ModalBackground = styled.div`
  ${({ theme: { colors, spaces } }) => css`
    height: 100vh;
    width: 100vw;
    background-color: #333;
    opacity: 0.5;

    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
  `}
`

export const ModalContainerDiv = styled.div`
  ${({ theme: { colors, spaces } }) => css`
    position: relative;
    z-index: 2;
    background-color: white;
    border: 1px solid ${colors['text-color']};
    border-radius: ${spaces.s};
    max-width: 60rem;
    min-height: 30rem;
    margin: auto;
    padding: ${spaces.l};

    display: flex;

    section {
      flex: 1;
      padding: ${spaces.l};
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;

      h3 {
        text-align: center;
        padding: ;
      }
    }

    button {
      background-color: transparent;
      border: none;

      position: absolute;

      svg {
        color: tomato;
      }
    }
  `}
`
