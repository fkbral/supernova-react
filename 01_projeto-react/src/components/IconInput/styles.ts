import styled, { css } from 'styled-components'

export const IconInputContainerDiv = styled.div`
  ${({ theme: { colors, spaces } }) => css`
    padding: ${spaces.m};
    display: inline-flex;
    gap: 0 ${spaces.s};
    border-radius: ${spaces.s};

    background-color: ${colors['input-background']};

    input {
      /* all: initial; */
      flex: 1;
      background-color: transparent;
      border: none;
    }
  `}
`
