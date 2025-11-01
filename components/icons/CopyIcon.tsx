
import React from 'react';

const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v13.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V4.5a2.25 2.25 0 012.25-2.25h3.375c.621 0 1.125.504 1.125 1.125V21h3.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 1.5v3h6v-3a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 009 1.5z" />
  </svg>
);

export default CopyIcon;
