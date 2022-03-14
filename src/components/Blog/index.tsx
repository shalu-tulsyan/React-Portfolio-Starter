import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const blogAnimate={
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

export default function Blog() {

  return (
      <NavLink className="blogLink" to='/blog'>
        <motion.h2 variants={blogAnimate} initial="hidden" animate="show" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Blog</motion.h2>
      </NavLink>
    );
  }
  
  