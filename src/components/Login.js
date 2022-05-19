import React from 'react';
import styles from "../styles/login.module.css"
import {FaDiscord} from 'react-icons/fa';

const Login = () => {

  const redirect  = () => {
    window.location.href = " https://chesstournament.vercel.app/auth/redirect";
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <button className={styles.discord} onClick={redirect}>
      <span><FaDiscord /></span> login with discord
      </button>
      </div>
    </div>
  );
}

export default Login;
