"use client"

import React, { useContext } from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  
  const {theme, toggle} = useContext(ThemeContext);

  return (
    <section 
      className={styles.container} 
      onClick={toggle}
      style={theme === 'dark' ? {background: "white"} : {background: "black"}}>
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div 
        className={styles.ball} 
        style={theme === 'dark' ? {left: 1, background: "black"} : {right: 1, background: "white"}}></div>
      <Image src='/sun.png' alt='moon' width={14} height={14} />
    </section>
  )
}

export default ThemeToggle