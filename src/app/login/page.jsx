"use client"
import React from 'react';
import styles from './loginPage.module.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Loginpage = () => {
  
    const {data, status} = useSession();
    const route = useRouter();

    if(status === "loading"){
        return (
            <div className={styles.loading}>Loading...</div>
        )
    }

    if(status === "authenticated"){
       route.push('/');
    }
  
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton} onClick={() => signIn("google")}>
                    Sign In with Google
                </div>
                <div className={styles.socialButton}>
                    Sign In with GitHub
                </div>
                <div className={styles.socialButton}>
                    Sign In with Facebook
                </div>
            </div>
        </section>
    );
};

export default Loginpage;