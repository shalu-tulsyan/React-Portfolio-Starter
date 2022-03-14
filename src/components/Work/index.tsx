import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemedContext } from '../../constants/themes';
import './styles.css';

const workAnimate={
  hidden:{
    y: -200
  },
  show:{
    y: 0,
    transition:{
      type: 'spring',
      duration: 1.5,
      delay: 1
    } 
  }
}

export default function Work() {

  const {theme}= useContext(ThemedContext);

  return (
      <NavLink className={`workLink  ${theme==='Light' ? 'workLightTheme': 'workDarkTheme' }`} to='/work'>
        <motion.h2 variants={workAnimate} initial="hidden" animate="show"  whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Work</motion.h2>
      </NavLink>
    );
  }
  
  