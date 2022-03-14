import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const contactAnimate={
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

export default function Contacts() {

  return (
      <NavLink className="Link" to={{pathname:"mailto:shalutulsyan08@gmail.com"}}>
        <motion.h3 variants={contactAnimate} initial="hidden" animate="show" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} style={{transform: 'none'}}>
          Say hi..
        </motion.h3>
      </NavLink>
    );
  }
  
  