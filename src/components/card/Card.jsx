import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <section className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2024 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href='/'>
                <h1>Title</h1>  
            </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio necessitatibus dignissimos similique, 
                quas qui sed repudiandae voluptatum nam dicta doloremque, 
                eaque velit, quisquam inventore nihil saepe earum ex molestias reprehenderit.
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
        </div>
    </section>
  );
};

export default Card;