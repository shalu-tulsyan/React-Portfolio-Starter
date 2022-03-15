import { motion } from 'framer-motion';
import React from 'react';
import Palette from '../../../components/svgComponents/palette';
import { Designer } from '../../../data/SkillsDescription';
import '../../SkillsComponent/styles.css';

const designerData={
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
}

export default function DesignerComponent(){
    return(
        <motion.div variants={designerData} initial="hidden" animate="show" className="skillsWrapper">
          <h2 className="titleContainer">
            <Palette width={40} height={40} />
            Designer
          </h2>
          <div className="descriptionContainer"> {Designer.description} </div>
          <div className="descriptionContainer">
            <strong> {Designer.skills.title} </strong>
            <ul>
            {Designer.skills.point.map((list,id)=>{
              return <li key={id}> {list} </li>
            })}
            </ul>
          </div>
          <div className="descriptionContainer">
            <strong> {Designer.tools.title} </strong>
            <ul>
            {Designer.tools.point.map((list,id)=>{
              return <li key={id}> {list} </li>
            })}
            </ul>
          </div>
        </motion.div>
    );
}