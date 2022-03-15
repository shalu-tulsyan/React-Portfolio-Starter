import React from 'react';
import LaptopCode from '../../components/svgComponents/laptop-code';
import './styles.css';
import { Designer, FrontEnd } from '../../data/SkillsDescription';
import LogoComponent from '../../components/Logo';
import PowerOff from '../../components/svgComponents/Power-Off';
import SocialIcons from '../../components/SocialIcons';
import LightParticlesComponent from '../../components/ParticlesComponents/LightParticles';
import BackgroundText from '../../components/BackgroundText';
import { motion } from 'framer-motion';
import DesignerComponent from '../../components/SkillsComponent/Designer';
import FrontEndComponent from '../../components/SkillsComponent/FrontEnd';

export default function MySkills() {
    return (
      <motion.div exit={{opacity:0, transition: {duration: 0.5}}} className="skillsContainer">
        <LogoComponent />
        <PowerOff />
        <SocialIcons />
        <LightParticlesComponent />
        <DesignerComponent />
        <FrontEndComponent />
        <BackgroundText text="SKILLS" top="80%" right="30%" color="rgba(0, 0, 0, 0.1)" />
      </motion.div>
    );
  }
  
  