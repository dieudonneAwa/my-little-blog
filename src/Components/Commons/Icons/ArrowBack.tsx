import * as React from 'react';
import styled from 'styled-components';

export const Svg = styled.svg<any>`
  path {
    fill: ${(p) => p.theme.colors.spacecadet};
  }
`;

function ArrowBackIcon({ fill = '#000', ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={15} height={11} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M14.063 4.715H2.943l3.404-3.426A.705.705 0 006.56.714a.757.757 0 00-.335-.532 1.066 1.066 0 00-.686-.179c-.248.02-.477.12-.636.28L.216 4.999a.918.918 0 00-.085.118c0 .039 0 .062-.065.102A.676.676 0 000 5.5c0 .097.023.193.066.283 0 .04 0 .063.065.102.025.041.053.08.085.118l4.687 4.714c.088.089.199.16.323.21.125.048.261.073.399.073.22 0 .431-.064.6-.18a.832.832 0 00.23-.24.665.665 0 00.066-.6.757.757 0 00-.174-.268L2.944 6.286h11.119c.248 0 .487-.083.662-.23A.727.727 0 0015 5.5a.727.727 0 00-.275-.555 1.037 1.037 0 00-.662-.23z"
        fill={fill}
      />
    </Svg>
  );
}

export default ArrowBackIcon;
