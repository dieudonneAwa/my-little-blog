import styled from 'styled-components'
import { space } from 'styled-system'
import { buttonBase, buttonColor, buttonSize, buttonShape } from './Theme'

export const StyledButton = styled.button<{
  color: string
  size: string
  shape: string
}>`
  ${buttonBase}
  ${(p) => buttonColor[p.color]};
  ${(p) => buttonSize[p.size]};
  ${(p) => buttonShape[p.shape]};

  ${space}
`
