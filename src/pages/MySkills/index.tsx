import React from 'react';
import LaptopCode from '../../components/svgComponents/laptop-code';
import Palette from '../../components/svgComponents/palette';
import './styles.css';
import { Designer, FrontEnd } from '../../data/SkillsDescription';
import LogoComponent from '../../components/Logo';
import PowerOff from '../../components/svgComponents/Power-Off';
import SocialIcons from '../../components/SocialIcons';
import LightParticlesComponent from '../../components/ParticlesComponents/LightParticles';
import BackgroundText from '../../components/BackgroundText';

export default function MySkills() {
    return (
      <div className="skillsContainer">
        <LogoComponent />
        <PowerOff />
        <SocialIcons />
        <LightParticlesComponent />
        <div className="skillsWrapper">
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
        </div>
        <div className="skillsWrapper">
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
        </div>
        <BackgroundText text="SKILLS" top="80%" right="30%" color="rgba(0, 0, 0, 0.1)" />
      </div>
    );
  }
  
  