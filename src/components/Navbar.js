import React from 'react';
import styles from '../styles/navbar.module.css';
import logo from "../assets/logo3.svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
        <Link to="/">
        <img src={logo} alt=""  draggable="false"/>
        </Link>
      </div>
      <div className={styles.links}>
      <Link to="/" className={styles.link2}>
            Home      
        </Link>
        <Link to="/prizes" className={styles.link}>
            Prizes      
        </Link>
        </div>
    </div>
  );
}

export default Navbar;
