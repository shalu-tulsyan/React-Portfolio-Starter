import React from 'react';
import './styles.css';

type DarkDivProps={
    click: boolean;
}

export default function DarkDiv({click}: DarkDivProps) {

  return (
      <div className={`darkDiv ${click ? 'darkDivOpen': 'darkDivClosed' } `} />
    );
  }
  
  