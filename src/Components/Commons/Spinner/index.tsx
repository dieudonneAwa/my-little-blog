import styled, { keyframes } from 'styled-components';
import { space } from 'styled-system';
import { DefaultTheme } from '../../../Theme';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.span<{
  size: string;
  color: string;
  ml: any;
  theme: DefaultTheme;
}>`
  &::before {
    content: '';
    -webkit-transform-origin: center;
    animation: ${rotate} 500ms infinite linear;
    border-radius: 50%;
    border: 0.2rem solid ${(p) => p.theme.colors.emerald};
    border-right-color: transparent;
    border-top-color: transparent;
    content: '';
    display: inline-block;
    height: ${(props) => props.size};
    transform-origin: center;
    width: ${(props) => props.size};

    // Styled System Props
    ${space}
  }
`;

export const SpinnerContainer = styled.div<{ height: string }>`
  min-height: ${(props) => (props.height ? props.height : '100%')};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface Props {
  /**
   * Color of the spinner
   */
  color: string;
  /**
   * Size of the spinner
   */
  size: string;
}

export const Spinner = ({ color, size, ...rest }: Props | any) => (
  // @ts-ignore
  <StyledSpinner color={color} size={size} {...rest} />
);

export default Spinner;

Spinner.defaultProps = {
  color: 'c300',
  size: '1rem',
};
