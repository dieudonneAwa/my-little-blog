import styled from 'styled-components';
import {
  SpaceProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  space,
  layout,
  color,
  flexbox,
  border,
  BorderProps,
  position,
  PositionProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  BorderProps &
  PositionProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${position}
`;
