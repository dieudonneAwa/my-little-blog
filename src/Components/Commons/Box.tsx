import styled from "styled-components";
import {
  SpaceProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  space,
  layout,
  color,
  flexbox,
} from "styled-system";

export type BoxProps = SpaceProps & ColorProps & FlexboxProps & LayoutProps;

export const Box = styled.form<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;
