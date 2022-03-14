import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import AnchorComponent from '../../components/Anchor';
import BackgroundText from '../../components/BackgroundText';
import BlogComponent from '../../components/BLogComponent';
import LogoComponent from '../../components/Logo';
import SocialIcons from '../../components/SocialIcons';
import PowerButton from '../../components/svgComponents/Power-Off';
import {Blogs} from '../../data/BlogData';
import './styles.css';

const container={
  hidden:{
    opacity: 0
  },
  show:{
    opacity: 1,
    transition:{
      staggerChildren: 0.5,
      duration: 0.5
    } 
  }
}

export default function Blog() {

    const [numbers, setNumbers] =useState(0);

    //for the numbers of link svg 
    useEffect(()=>{
      let num= (window.innerHeight - 70) / 30;
      setNumbers(num);
    },[]);

    return (
      <motion.div variants={container} initial="hidden" animate="show" exit={{opacity:0, transition: {duration: 0.5}}} className="mainBlogContainer">
        <div className="containerWrapper">
          <LogoComponent/>
          <PowerButton/>
          <SocialIcons/>
          <AnchorComponent numbers={numbers} />
          <div className="blogContainer">
            <div className="blogWrapper">
              {Blogs.map(blog=>{
                return <BlogComponent key={blog.id} blog={blog} />
              })}
            </div>
          </div>
          <BackgroundText text="BLOG" top="5rem" left="5rem" color="rgba(0, 0, 0,0.1)" />
        </div>
      </motion.div>
    );
  }
  
  