import React from 'react';
import styles from "../styles/table.module.css"
import Footer from './Footer';
import person from "./lib/players.json"
const Players = () => {
  const DisplayData=person.map(
    (info)=>{
        return(
            <tr>
                <td>{info.white}</td>
                <td>{info.won}</td>
                <td>{info.black}</td>
                <td>{info.lost}</td>
            </tr>
        )
    }
)
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableCon}>
      <h1>Round 1</h1>
      <div className={styles.play}>
      <table class='table table-dark'>          
        <th>White</th>
        <th>Won</th>
        <th>Black</th>   
        <th>Lost</th>
        <tbody>
      {DisplayData}
        </tbody>
        
</table>
</div>
</div>
<div className={styles.buttonWrap}>
  <a href="https://discord.gg/nBW3nhaCvw">
  <button className={styles.button}>Join discord for access</button>
  </a>
</div>
<Footer />
    </div>
  );
}

export default Players;
