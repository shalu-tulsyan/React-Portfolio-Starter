import { motion } from 'framer-motion';
import React from 'react';
import { FrontEnd } from '../../../data/SkillsDescription';
import LaptopCode from '../../svgComponents/laptop-code';
import '../../SkillsComponent/styles.css';

const frontEndData={
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
}

export default function FrontEndComponent(){
    return(
        <motion.div variants={frontEndData} initial="hidden" animate="show" className="skillsWrapper">
          <h2 className="titleContainer">
            <LaptopCode width={40} height={40} />
            Frontend Developer
          </h2>
          <div className="descriptionContainer"> {FrontEnd.description} </div>
          <div className="descriptionContainer">
            <strong> {FrontEnd.skills.title} </strong>
            <p> {FrontEnd.skills.point.join(', ')}</p>
          </div>
          <div className="descriptionContainer">
            <strong> {FrontEnd.tools.title} </strong>
            <p> {FrontEnd.tools.point.join(', ')}</p>
          </div>
        </motion.div>
    );
}