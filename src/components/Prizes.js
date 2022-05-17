import React from 'react';
import styles from "../styles/prizes.module.css";
import Footer from './Footer';
import {BsTrophy} from 'react-icons/bs';
const Prizes = () => {
  return (
    <div className={styles.container}>
      <h1>Prizes</h1>
      <ul>
        <div className={styles.listcon}>
        <h3>1st place <span className={styles.trophy}><BsTrophy /></span></h3>
        <li className={styles.list}>Discord Nitro</li>
        </div>
      
        <div className={styles.listcon}>
        <h3>2nd place <span className={styles.trophy}><BsTrophy /></span></h3>
        <li className={styles.list}>Discord Nitro</li>
        </div>
        <div className={styles.listcon}>
        <h3>3rd place <span className={styles.trophy}><BsTrophy /></span></h3>
        <li className={styles.list}>Discord Nitro Classic</li>
        </div>
      </ul>
      <Footer />
    </div>
  );
}

export default Prizes;
