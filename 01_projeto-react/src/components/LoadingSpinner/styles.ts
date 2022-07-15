import styled from 'styled-components'

export const LoadingSpinnerContainerSpan = styled.span`
  > svg {
    animation: spin 1s infinite;
  }

  @keyframes spin {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`
