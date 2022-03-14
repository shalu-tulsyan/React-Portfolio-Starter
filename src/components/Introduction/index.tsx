import React from 'react';
import {motion} from 'framer-motion';
import Me from '../../assets/images/profile-img.png';
import './styles.css';

export default function Intro() {

  return (
      <motion.div initial={{height: 0}} animate={{height: '55vh'}} transition={{type: 'spring', duration: 2,delay: 1 }} className="intro">
        <div className="subDivContainer">
          <div className="textContainer">
            <h1 style={{margin:0}}>Hi,</h1>
            <h3>I'm Shalu Tulsyan</h3>
            <h6>I design and Code simple yet beautiful websites</h6>
          </div>
        </div>
        <div  className="subDivContainer">
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1,delay: 2 }}>
            <img className="pic" src={Me} alt="Profile"/>
            </motion.div>
        </div>
      </motion.div>
    );
  }
  
  