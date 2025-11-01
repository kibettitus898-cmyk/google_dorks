import React from 'react';

const ToolboxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24a5.25 5.25 0 01-1.48-3.71V5.25A2.25 2.25 0 015.25 3h1.5a2.25 2.25 0 012.25 2.25v1.51a5.25 5.25 0 01-1.48 3.71l-4.24 4.24M11.42 15.17L15.17 11.42" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
    </svg>
);

export default ToolboxIcon;
