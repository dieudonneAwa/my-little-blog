import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Box } from "../Commons/Box";

type StyledProps = SpaceProps & ColorProps & FlexboxProps & LayoutProps;

export const StyledForm = styled.form<StyledProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

export const FormWrapper = styled(Box)`
  h1 {
    font-weight: bold;
    font-size: ${(p) => p.theme.font.size.big};
    margin-top: 2rem;
  }
`;
