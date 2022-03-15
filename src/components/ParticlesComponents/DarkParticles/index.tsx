import React from 'react';
import Particles from "react-tsparticles";
import '../../ParticlesComponents/styles.css';

export default function DarkParticlesComponent({configDark}: any){
    return(
        <div className="particlesContainer">
            <Particles  options={configDark} />
        </div>
    )
}