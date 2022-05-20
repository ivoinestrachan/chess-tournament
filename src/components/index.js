
  
import { useState, useEffect } from "react";
import Winners from "./Winners";
import styles from "../styles/winner.module.css";

const Team = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data]);

  const mappendItems = data.map((props, i) => <Winners key={i} {...props} />);

  return (
    <div className={styles.team__page}>
      <div className={styles.team__text_wrapper}>
        <h1 className={styles.team__heading}>WINNERS</h1>
        <h3 className={styles.team__text}>The people work at</h3>
      </div>
      <div className={styles.card__grid}>{mappendItems}</div>
    </div>
  );
};

export default Team;