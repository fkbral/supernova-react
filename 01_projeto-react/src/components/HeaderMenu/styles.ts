import styled, { css } from 'styled-components'

export const HeaderMenuContainerNav = styled.nav`
  ${({ theme: { colors, spaces } }) => css`
    background-color: ${colors['primary-color']};
    padding: ${spaces.l};
    color: ${colors['secondary-color']};
    /* background-color: red; */

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `}
`

export const UserProfileLI = styled.li`
  ${({ theme: { colors, spaces, typography } }) => css`
    display: flex;
    gap: ${spaces.s};

    h3 {
      font-size: ${typography.sizes.m};
      font-weight: ${typography.fontWeight.bold};
    }
  `}
`
