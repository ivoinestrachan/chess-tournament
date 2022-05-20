import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/winner.module.css"
const WinnerLink = () => {
  return (
    <div className={styles.container}>
      <Link to="/winners">
     <h1>Winners</h1> 
      </Link>
    </div>
  );
}

export default WinnerLink;
