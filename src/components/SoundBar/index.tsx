import React, { useRef, useState } from 'react';
import Line from './Line';
import './styles.css';

export default function SoundBar(){

    const ref= useRef<HTMLAudioElement>(null);
    const [click, setClick] = useState(false);

    function handleClick(){
        setClick(!click);

        if(ref.current!=null) !click ? ref.current.play() : ref.current.pause(); 
    }

    return(
        <div onClick={handleClick} className="soundBarContainer" >
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <audio src="https://react-portfolio-sigma.vercel.app/static/media/u-said-it-v13-1167.949cee7e.mp3" ref={ref} loop />
        </div>
    );
}
