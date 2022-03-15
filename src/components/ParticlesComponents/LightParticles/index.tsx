import React from 'react';
import Particles from "react-tsparticles";
import '../../ParticlesComponents/styles.css';

export default function LightParticlesComponent({configLight}: any){
    return(
        <div className="particlesContainer">
            <Particles  options={configLight} />
        </div>
    )
}