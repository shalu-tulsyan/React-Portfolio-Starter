import React from 'react';
import Particles from "react-tsparticles";
import '../../ParticlesComponents/styles.css';
import configLight from '../../../config/particles-light-config.json';

export default function LightParticlesComponent(){
    return(
        <div className="particlesContainer">
            <Particles  options={configLight} />
        </div>
    )
}