import React from 'react';
import './styles.css';

type LineProps={
    click: boolean
}

export default function Line({click}: LineProps){
    return(
        <span className="lineContainer" style={{animationPlayState: click?'running': 'paused'}} />
    );
}