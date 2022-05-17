import React, { useState } from "react";
import styles from "../styles/faq.module.css";
import {BsPlusLg} from 'react-icons/bs';


export const FaqSection = ({ question: { que, ans } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqcontainer} onClick={() => setOpen(!open)}>
      <div className={styles.faqque_wrapper}>
        <div className={styles.faqque}>{que}</div>
        <BsPlusLg
          width="40"
          height="40"
          style={{ transform: `rotate(${open ? 0 : " 180deg"})` }}
          className={styles.faqarrow}
         
        />
      </div>
      <div
        className={styles.faqwrapper}
        style={{ maxHeight: `${open ? "none" : 0}` }}
      >
        <div className={styles.faqans}>{ans}</div>
      </div>
    </div>
  );
};