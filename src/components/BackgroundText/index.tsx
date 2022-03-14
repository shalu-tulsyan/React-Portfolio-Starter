import React from 'react';
import './styles.css';

type BackgroundTextProps={
    text: string;
    top?: string;
    left?: string;
    right?: string;
    color?: string;
}

export default function BackgroundText({text, top, left, right, color}: BackgroundTextProps){

    return(
        <h1 style={{top: top, left: left, right: right, color: color}} className="backgroundText">{text}</h1>
    );
}
