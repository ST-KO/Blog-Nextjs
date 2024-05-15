import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';

const CardList = () => {
  return (
    <section className={styles.container}>
      <Pagination />
    </section>
  )
}

export default CardList