import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const mySkillsAnimate={
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

export default function MySkills() {

  return (
      <NavLink className="mySkillsLink" to='/mySkills'>
        <motion.h2 variants={mySkillsAnimate} initial="hidden" animate="show" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>My Skills</motion.h2>
      </NavLink>
    );
  }
  
  