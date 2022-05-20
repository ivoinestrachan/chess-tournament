
import styles from "../styles/countdown.module.css";
import { useState } from "react";


const Countdown = () => {
  // const [timer, setTimer] = useState();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
   const [hr, setHr] = useState(0);

   const countDownDate = new Date("may 20, 2022 11:0:0 EST").getTime();

   setInterval(() => {
   //current time
    var today = new Date().getTime();

  // launch day - current time
   var distance = countDownDate - today;
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
     setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSec(Math.floor((distance % (1000 * 60)) / 1000));
   }, 1000);

  return (
    <div className={styles.animate}>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.days}`}>
          <p className={styles.timerText}>{day}</p>
          <p className={styles.placeholder}>Days</p>
        </div>
        <div className={`${styles.box} ${styles.hours}`}>
          <p className={styles.timerText}>{hour}</p>
          <p className={styles.placeholder}>Hours</p>
        </div>
        <div className={`${styles.box} ${styles.minutes}`}>
          <p className={styles.timerText}>{min}</p>
          <p className={styles.placeholder}>Minutes</p>
        </div>
        <div className={`${styles.box} ${styles.seconds}`}>
          <p className={styles.timerText}>{sec}</p>
          <p className={styles.placeholder}>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;