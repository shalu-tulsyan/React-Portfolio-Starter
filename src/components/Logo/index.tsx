import React, { useContext } from 'react';
import { ThemedContext } from '../../constants/themes';
import './styles.css';

export default function LogoComponent() {
    const {theme} = useContext(ThemedContext);

    return (
        <h1 className={`header  ${theme==='Dark' ? 'lightHeader': 'darkHeader' }`}>ST</h1>
    );
    }
    
    