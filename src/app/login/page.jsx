import React from 'react';
import styles from './loginPage.module.css';

const Loginpage = () => {
  return (
    <section className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>
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