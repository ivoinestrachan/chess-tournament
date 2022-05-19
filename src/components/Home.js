import React from 'react';
/* import Code from './Code'; */
/* import Board from './Board'; */
import Countdown from './Countdown';
import Faq from './Faq';
/*import Join from './Join'; */
import styles from "../styles/faq.module.css"
import Login from './Login';
const Home = () => {
  return (
    <div>
      <Countdown />
      <Login />
     {/* <Code /> */}
      <h2 className={styles.faqheading}>FAQS</h2>
      <Faq />
     {/* <Join /> */}
    {/*  <Board /> */}
    </div>
  );
}

export default Home;
