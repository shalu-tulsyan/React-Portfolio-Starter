import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemedContext } from '../../constants/themes';
import './styles.css';

const aboutAnimate={
  hidden:{
    y: 200
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

export default function About() {

  const {theme}= useContext(ThemedContext);

  return (
      <NavLink className={`aboutLink  ${theme==='Light' ? 'aboutDarkTheme': 'aboutLightTheme' }`} to='/about'>
        <motion.h2 variants={aboutAnimate} initial="hidden" animate="show" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>About  </motion.h2>
      </NavLink>
    );
  }
  
  