import { motion } from 'framer-motion';
import React from 'react';
import './styles.css';

type BlogProps={
  blog:{
    id: number;
    name: string;
    tags: string[];
    date: string;
    imgSrc: string;
    link: string;
  }
}

const items ={
  hidden: {
      scale: 0
  },
  show: {
      scale: 1,
      transition: {
          type: 'spring',
          duration: 0.5,
      }
  }
}

export default function BlogComponent({blog}: BlogProps) {

  return (
      <motion.a variants={items} className="blogPost" target="_blank" href={blog.link} rel="noreferrer">
        <div style={{backgroundImage:` url(${blog.imgSrc})`}} className="imgContainer" />
        <h3 className="blogTitle"> {blog.name} </h3>
        <div className="hashTagContainer">
          {blog.tags.map((tag, id)=>{
            return <span className="hashTag" key={id}> #{tag} </span>
          })}
        </div>
        <span className="date"> {blog.date} </span>
      </motion.a>
    );
  }
  
  