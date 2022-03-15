import React, { useContext, useEffect, useRef, useState } from 'react';
import '././styles.css';
import LogoComponent from '../../components/Logo';
import PowerOff from '../../components/svgComponents/Power-Off';
import SocialIcons from '../../components/SocialIcons';
import { ThemedContext, ThemeType } from '../../constants/themes';
import { WorkData } from '../../data/workData';
import Card from '../../components/WorkCards';
import YinYang from '../../components/svgComponents/yinyang';
import BackgroundText from '../../components/BackgroundText';
import { motion } from 'framer-motion';

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}

export default function Work() {

  const ref= useRef<HTMLUListElement>(null);
  const yinyangRef = useRef<HTMLSpanElement>(null);

  const [theme] = useState(ThemeType.Dark);

  const {changeTheme} = useContext(ThemedContext);

  useEffect(()=>{
    function rotate(){
      if(ref.current != null) ref.current.style.transform= `translateX(${-window.pageXOffset}px)`;

      if(yinyangRef.current!=null) yinyangRef.current.style.transform = `rotate(` + -window.pageXOffset + 'deg)';
    }

    window.addEventListener('scroll',rotate);

    return ()=> window.removeEventListener('scroll', rotate)
  },[])

  return (
    <ThemedContext.Provider  value={{theme,changeTheme}}>
      <motion.div variants={container} initial="hidden" animate="show"  exit={{opacity:0, transition: {duration: 0.7}}} className="workContainer">
        <LogoComponent />
        <PowerOff />
        <SocialIcons />
        <ul ref={ref} className="listContainer">
          {WorkData.map((data)=>{
            return <Card key={data.id} data={data} />
          })}
        </ul>
        <BackgroundText text="WORK" top="10%" right="20%" color="rgba(252, 246, 244, 0.1)" />
        <span ref={yinyangRef} className="rotateSvg">
          <YinYang height={80} width={80} fill="white" />
        </span>
      </motion.div>
    </ThemedContext.Provider>
  );
}

