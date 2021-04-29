import * as React from 'react';
import { Svg } from './ArrowBack';

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 11.9A10.022 10.022 0 1110.1 1 7.794 7.794 0 0021 11.9v0z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MoonIcon;
