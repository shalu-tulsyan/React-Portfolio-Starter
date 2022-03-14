import React from 'react';
import About from '../About';
import MySkills from '../MySkills';
import './styles.css';

export default function BottomBar() {

  return (
      <div className="bottombarContainer">
        <About/>
        <MySkills/>
      </div>
    );
  }
  
  