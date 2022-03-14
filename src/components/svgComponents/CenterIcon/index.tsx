import React from 'react';
import YinYang from '../yinyang';
import './styles.css';

type CenterIconProps={
  click: boolean;
  handleClick: ()=>void;
}

export default function CenterIcon({click, handleClick}: CenterIconProps) {

  return (
    
    <button className= {`centerIconContainer ${click ? 'centerIconContainerClicked': '' } `}>
       <YinYang onClick={handleClick} width={click?120:200} height={click?120:200} fill='currentColor' />
       <span className= {`spanContainer ${click ? 'spanContainerClicked': '' } `}>click here</span>
  </button>
    );
  }
  
  