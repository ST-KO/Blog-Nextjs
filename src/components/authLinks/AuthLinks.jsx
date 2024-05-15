import React from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  
  // temporary
  const status = 'notauthenticated';
  
  return (
    <section>
        {
          status === 'notauthenticated' ? 
          (
            <Link href='/login'>Login</Link>
          ) :
          (
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )
        }
    </section>
  );
};

export default AuthLinks;