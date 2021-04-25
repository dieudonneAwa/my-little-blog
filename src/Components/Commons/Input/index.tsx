import styled from "styled-components";
import { DefaultTheme } from "../../../Theme";

const StyledInput = styled.input<{ theme: DefaultTheme }>`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: block;
  font-size: ${({ theme }) => theme.font.size.medium};
  border-radius: ${(p) => p.theme.radii.small};
  border: 1px solid ${(p) => p.theme.colors.cultured};
  background-color: ${(p) => p.theme.colors.lightgrey};
  padding: 1.1rem 1rem;
  margin: 0.5rem;
  outline: none;
  width: calc(100% - 1rem);
  box-sizing: border-box;
  &:disabled {
    background-color: rgba(128, 128, 128, 0.12);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.c600};
  }
`;

const Input = (props: any) => <StyledInput {...props} />;

export default Input;
