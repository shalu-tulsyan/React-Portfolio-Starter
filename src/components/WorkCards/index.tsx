import { motion } from 'framer-motion';
import React from 'react';
import GitHub from '../svgComponents/github';
import './styles.css';

type CardProps={
    data:{
    id: number;
    name: string;
    description: string;
    tags: string[];
    demo: string;
    github: string;
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

export default function Card({data}: CardProps){
    return(
        <motion.li variants={items} className="listWrapper">
            <h2 className="cardTitle">{data.name}</h2>
            <h4 className="cardDescription"> {data.description} </h4>
            <div className="tagContainer"> {data.tags.map((tag, id)=>{
                return <span className="tagWrapper" key={id}>#{tag}</span>
            })} 
            </div>
            <footer className="footerContainer">
                <a className="visitLink" target="_blank" href={data.demo} rel="noreferrer" >Visit</a>
                <a className="githubLink" target="_blank" href={data.github} rel="noreferrer" >
                    <GitHub width={30} height={30} />
                </a>
            </footer>
        </motion.li>
    );
}