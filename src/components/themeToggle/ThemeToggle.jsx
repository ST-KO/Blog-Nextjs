import React from 'react';
import styles from './themeToggle.module.css';
import Image from 'next/image';

const ThemeToggle = () => {
  return (
    <section className={styles.container}>
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <Image src='/sun.png' alt='moon' width={14} height={14} />
    </section>
  )
}

export default ThemeToggle