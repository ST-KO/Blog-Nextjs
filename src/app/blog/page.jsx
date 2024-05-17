import React from 'react';
import styles from './blogPage.module.css';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/Menu/Menu';

const page = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </section>
  );
};

export default page;