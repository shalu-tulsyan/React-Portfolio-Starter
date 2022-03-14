import React, { useContext, useState } from 'react';
import Blog from '../../components/Blog';
import BottomBar from '../../components/BottomBar';
import Contacts from '../../components/Contacts';
import SocialIcons from '../../components/SocialIcons';
import PowerButton from '../../components/svgComponents/Power-Off';
import CenterIcon from '../../components/svgComponents/CenterIcon';
import Work from '../../components/Work';
import './styles.css';
import DarkDiv from '../../components/DarkDiv';
import {ThemedContext } from '../../constants/themes';
import Intro from '../../components/Introduction';
import LogoComponent from '../../components/Logo';


export default function Main() {

  const {changeTheme} =useContext(ThemedContext);

  const [click,setClick] = useState(false);

  function handleClick(){
    setClick(!click);
    changeTheme();
  }

  return (
      <div className="mainContainer">
        <DarkDiv click={click} />
        <div className="contentContainer">
          <LogoComponent />
          <PowerButton width={30} height={30} fill="currentColor" />
          <SocialIcons/>
          <CenterIcon click={ click } handleClick={ handleClick } />
          <Contacts/>
          <Blog/>
          <Work/>
          <BottomBar/>
        </div>
        {click? <Intro />:null}
      </div>
    );
  }
  
  