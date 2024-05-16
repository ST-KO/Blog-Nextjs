import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Browse By Categories</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
              <Image 
                src="/style.png" 
                alt='' 
                width={32} 
                height={32} 
                className={styles.image} 
              />
              projects
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.react}`}>
              <Image 
                src="/style.png" 
                alt='' 
                width={32} 
                height={32} 
                className={styles.image} 
              />
              react
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.next}`}>
              <Image 
                src="/style.png" 
                alt='' 
                width={32} 
                height={32} 
                className={styles.image} 
              />
              nextjs
        </Link>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.coding}`}>
              <Image 
                src="/style.png" 
                alt='' 
                width={32} 
                height={32} 
                className={styles.image} 
              />
              coding
        </Link>
      </div>
    </section>
  )
}

export default CategoryList