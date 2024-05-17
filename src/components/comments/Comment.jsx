import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comment = () => {
  
    const status = "authenticated"
  
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                status === 'authenticated' ?
                (
                    <div className={styles.write}>
                        <textarea placeholder='write a comment...' className={styles.input} />
                        <button className={styles.button}>Post</button>
                    </div>
                ) :
                (
                    <Link href='/login'>
                        Login to write a comment
                    </Link>
                )
            }
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vel numquam quasi eligendi eius earum odit reprehenderit excepturi consequuntur! 
                        Fugiat nemo sed voluptates numquam, 
                        iste quis ad unde eum quia alias!
                    </p>
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.user}>
                        <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.image} />
                        <div className={styles.userInfo}>
                            <span className={styles.username}>John Doe</span>
                            <span className={styles.date}>01.01.2023</span>
                        </div>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vel numquam quasi eligendi eius earum odit reprehenderit excepturi consequuntur! 
                        Fugiat nemo sed voluptates numquam, 
                        iste quis ad unde eum quia alias!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Comment;