import React, { useContext, useState } from 'react';
import '././styles.css';
import LogoComponent from '../../components/Logo';
import PowerOff from '../../components/svgComponents/Power-Off';
import SocialIcons from '../../components/SocialIcons';
import DarkParticlesComponent from '../../components/ParticlesComponents/DarkParticles';
import { ThemedContext, ThemeType } from '../../constants/themes';
import spaceman from '../../assets/images/spaceman.png';
import { AboutText } from '../../data/about';
import BackgroundText from '../../components/BackgroundText';
import { motion } from 'framer-motion';

const aboutText={
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2
    }
  }
}

export default function About() {

  const [theme] = useState(ThemeType.Dark);

  const {changeTheme} = useContext(ThemedContext);

  return (
    <ThemedContext.Provider  value={{theme,changeTheme}}>
      <motion.div  exit={{opacity:0, transition: {duration: 0.5}}} className="aboutContainer">
        <LogoComponent />
        <PowerOff />
        <SocialIcons />
        <DarkParticlesComponent />
        <div className="spacemanContainer">
          <img  src={spaceman} alt="spaceman" />
        </div>
        <motion.div variants={aboutText} initial="hidden" animate="show" className="detailsTextContainer">
          {AboutText.map((data,index)=>{
          return <>   {data } {index < 2 ?<> <br/><br/> </> :null}  </>
          })}
        </motion.div>
        <BackgroundText text="ABOUT" top="10%" left="5%" color="rgba(252, 246, 244, 0.1)" />
      </motion.div>
    </ThemedContext.Provider>
  );
}

