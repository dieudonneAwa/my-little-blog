import * as React from 'react';

function SolarIcon({ fill = '#000', ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={22} height={23} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M10.996 18.72a.825.825 0 01.817.715l.008.112v1.65a.825.825 0 01-1.643.11l-.007-.11v-1.65a.825.825 0 01.825-.825v-.001zm6.624-2.278l1.166 1.166a.826.826 0 01-.58 1.418.825.825 0 01-.586-.251l-1.166-1.166a.825.825 0 011.166-1.167zm-12.082 0a.825.825 0 010 1.166l-1.167 1.168a.825.825 0 01-1.166-1.166l1.166-1.167a.825.825 0 011.166 0l.001-.001zM11 4.934a6.078 6.078 0 110 12.156 6.078 6.078 0 010-12.156zm0 1.65A4.428 4.428 0 009.306 15.1 4.428 4.428 0 1011 6.584zm10.175 3.622a.825.825 0 01.112 1.642l-.112.007h-1.65a.825.825 0 01-.112-1.642l.112-.007h1.65zm-18.7-.032a.824.824 0 01.112 1.643l-.112.006H.825a.825.825 0 01-.112-1.642l.112-.007h1.65zm1.804-7.006l.092.079 1.166 1.166A.825.825 0 014.464 5.66l-.093-.08-1.166-1.166A.825.825 0 014.28 3.166v.002zm14.507.079a.825.825 0 01.08 1.074l-.08.093L17.62 5.58a.825.825 0 01-1.246-1.074l.079-.092 1.166-1.167a.824.824 0 011.167 0zM11 0a.825.825 0 01.817.713l.008.112v1.65a.825.825 0 01-1.642.11l-.008-.111V.825A.825.825 0 0111 0v.001z"
        fill={fill}
      />
    </svg>
  );
}

export default SolarIcon;
