import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { DarkTheme, LightTheme, ThemedContext } from '../../constants/themes';
import FaceBook from '../svgComponents/facebook';
import GitHub from '../svgComponents/github';
import Twitter from '../svgComponents/twitter';
import YouTube from '../svgComponents/youtube';
import './styles.css';

const iconLineAnimate={
    hidden:{
      height: 0
    },
    show:{
      height: '8rem',
      transition:{
        type: 'spring',
        duration: 1,
        delay: 0.8
      } 
    }
}

const iconAnimate={
    hidden:{
      transform: "scale(0)"
    },
    show:{
      scale: [0,1,1.5,1],
    }
}

const transition={
    type: 'spring',
    duration: 1
}

export default function SocialIcons() {

    const {theme} = useContext(ThemedContext);
    const fillColor= theme==='Light'? LightTheme.text: DarkTheme.text;

  return (
      <div className="socialIconContainer">
        <motion.div variants={iconAnimate} initial="hidden" animate="show" transition={{transition, delay: 1}}>
            <a className="navLink" target="_blank" href="https://github.com" rel="noreferrer" >
                <GitHub height={25} width={25} fill={fillColor} />
            </a>
        </motion.div>
        <motion.div variants={iconAnimate} initial="hidden" animate="show" transition={{transition, delay: 1.2}}>
            <a className="navLink" target="_blank" href="https://twitter.com/home" rel="noreferrer">
                <Twitter height={25} width={25} fill={fillColor} />
            </a>
        </motion.div>
        <motion.div variants={iconAnimate} initial="hidden" animate="show" transition={{transition, delay: 1.4}}>
            <a className="navLink" target="_blank" href="https://www.facebook.com/" rel="noreferrer">
                <FaceBook height={25} width={25} fill={fillColor} />
            </a>
        </motion.div>
        <motion.div variants={iconAnimate} initial="hidden" animate="show" transition={{transition, delay: 1.6}}>
            <a className="navLink" target="_blank" href="https://www.youtube.com/" rel="noreferrer">
                <YouTube height={25} width={25} fill={fillColor} />
            </a>
        </motion.div>
        <motion.span variants={iconLineAnimate} initial="hidden" animate="show" style={{height:'8rem'}} className={`line  ${theme==='Dark' ? 'darkLine': 'lightLine' }`} />
      </div>
    );
  }
  
  