import React, { useState } from 'react';
import Main from './pages/Main';
import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import Blog from './pages/Blog';
import MySkills from './pages/MySkills';
import Work from './pages/Work';
import About from './pages/About';
import { AnimatePresence } from 'framer-motion';
import {ThemedContext, ThemeType } from './constants/themes';
import SoundBar from './components/SoundBar';

function App() {

  const location = useLocation();

  const [theme, setTheme] = useState(ThemeType.Light);

  function changeTheme(){
    theme=== 'Light'? setTheme(ThemeType.Dark): setTheme(ThemeType.Light);
  }

  return (

    <ThemedContext.Provider value={{theme, changeTheme}} >
      <SoundBar />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/mySkills' element={<MySkills/>} />
        <Route path='/work' element={<Work/>} />
      </Routes>
      </AnimatePresence>
    </ThemedContext.Provider>
   
  );
}

export default App;
