import React from 'react';
import Particles from "react-tsparticles";
import '../../ParticlesComponents/styles.css';
import configDark from '../../../config/particles-dark-config.json';

export default function DarkParticlesComponent(){
    return(
        <div className="particlesContainer">
            <Particles  options={configDark} />
        </div>
    )
}