import React, { useEffect, useRef } from 'react';
import Anchor from '../svgComponents/anchor';
import Link from '../svgComponents/link';
import './styles.css';

type AnchorPropsType={
    numbers: number;
}

export default function AnchorComponent({numbers}: AnchorPropsType) {

  const ref= useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  // handling anchor component(slide container)......
  useEffect(()=>{

    function handleScroll(){
        let scrollPosition = window.pageYOffset;
        let windowSize = window.innerHeight;
        let bodyHeight = document.body.offsetHeight;

        let diff = Math.max(bodyHeight - (scrollPosition + windowSize) );

        let diffPosition = (diff * 100) / (bodyHeight - windowSize);
        if(ref.current!=null) ref.current.style.transform = ` translateY(${-diffPosition}%) `;


        // for anchor svg visibility...
        if(hiddenRef.current!=null) hiddenRef.current.style.display =  window.pageYOffset > 5? 'none': 'block';
    }

    window.addEventListener('scroll', handleScroll);

    return ()=> window.removeEventListener('scroll', handleScroll);
  },[]);  

  return (
      <div className="anchorContainer" >
          <div ref={hiddenRef} className="hidden">
          <Anchor width={70} height={70} fill='currentColor' />
          </div>
          <div ref={ref} className="sliderContainer">
              {
                  [...Array(30)].map((x,id)=>{
                    return <Link className="chain"  key={id} width={25} height={25} fill='currentColor' />
                  })
              }
              <Anchor width={70} height={70} fill='currentColor' />
          </div>
      </div>
    );
  }
  
  