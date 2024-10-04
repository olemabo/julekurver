import React from 'react';
import './fullWidthWrapper.css';

type FullWidthWrapperColor = 'default' | 'green' | 'red';

type ContentHeaderProps = {
    color?: FullWidthWrapperColor;
    children: React.ReactNode;
};

export default function FullWidthWrapper({
    color,
    children
}: ContentHeaderProps) {
    return (
        <div className={`full-width-wrapper-container ${color ?? 'default'}`}>
            {children}
        </div>
    ) 
}