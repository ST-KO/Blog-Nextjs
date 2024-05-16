import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Discover my projects and stories.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>My 1st blog</h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora veniam praesentium nam! Iusto animi maxime eveniet facere atque, 
            temporibus, consectetur molestias voluptatum nisi id sed adipisci voluptate, 
            est iure amet.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Featured