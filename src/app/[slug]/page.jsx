import React from 'react';
import styles from './singplePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';
import Comment from '@/components/comments/Comment';

const SinglePage = () => {
  return (
    <section className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.1.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.desc}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat maiores blanditiis, adipisci facilis eum atque iste ab est aspernatur, 
                    ad, nesciunt delectus sequi modi illum officia accusantium ratione? Incidunt, 
                    possimus!
                </p>
                <h2>
                    Lorem ipsum dolor sit amet 
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat maiores blanditiis, adipisci facilis eum atque iste ab est aspernatur, 
                    ad, nesciunt delectus sequi modi illum officia accusantium ratione? Incidunt, 
                    possimus!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quaerat maiores blanditiis, adipisci facilis eum atque iste ab est aspernatur, 
                    ad, nesciunt delectus sequi modi illum officia accusantium ratione? Incidunt, 
                    possimus!
                </p>
                </div>
                <div className={styles.comment}>
                    <Comment />
                </div>   
            </div>
            <Menu />
        </div>
    </section>
  )
}

export default SinglePage;