import * as React from 'react';
import styled from 'styled-components';

export const Svg = styled.svg<any>`
  &:hover {
    transition: linear 0.5s stroke;
    path {
      stroke: ${(p) => p.theme.colors.emerald};
    }
  }
`;

function MoonIcon({ stroke = '#000', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 10.81A9.018 9.018 0 119.19 1 7.015 7.015 0 0019 10.81v0z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MoonIcon;
