import styled, { css } from 'styled-components'

export const AvailableIconsContainerSection = styled.section`
  ${({ theme: { typography, spaces } }) => css``}
`

export const AvailableIconsUL = styled.ul`
  ${({ theme: { typography, spaces } }) => css`
    list-style: none;
    max-width: 16rem;

    display: flex;
    flex-flow: row wrap;
    gap: ${spaces.l};

    button {
      all: initial;
      cursor: pointer;
    }

    &,
    button {
      font-size: ${typography.sizes.xxl};
    }
  `}
`
