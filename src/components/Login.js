import React from 'react';
import styles from "../styles/login.module.css"
import {FaDiscord} from 'react-icons/fa';

const Login = () => {

  const redirect  = () => {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=976541743879184414&redirect_uri=https%3A%2F%2Fchesstournament.vercel.app%2Fauth%2Fplayers&response_type=code&scope=identify";
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
