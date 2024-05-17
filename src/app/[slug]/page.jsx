import React from 'react';
import styles from './singplePage.module.css';
import Menu from '@/components/Menu/Menu';
import Image from 'next/image';

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
            <div className={styles.post}></div>
            <Menu />
        </div>
    </section>
  )
}

export default SinglePage;