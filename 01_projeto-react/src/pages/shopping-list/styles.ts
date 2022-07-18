import styled from 'styled-components'

type ShoppingItemLIProps = {
  inCart?: boolean
}

export const ShoppingItemLI = styled.li<ShoppingItemLIProps>`
  text-decoration: ${props => (props.inCart ? 'line-through' : 'none')};
  /* text-decoration: ${({ inCart }) => (inCart ? 'line-through' : 'none')}; */
`
