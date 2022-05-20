import React from "react";
import styles from "../styles/winner.module.css";
import Footer from "./Footer";

const team = [
  
  {
    index: 0,
    post: "1st Place",
    name: "Dhawal",
    img: "https://cdn.discordapp.com/attachments/973647876901204028/977251295473856542/new.jpg",
    color: "white",
  },
  {
    index: 1,
    post: "2nd Place",
    name: "Avian Pride",
    img: "https://thenassauguardian.com/wp-content/uploads/2022/05/Avian-Pride-medium.jpg",
    color: "white",
  },
  {
    index: 3,
    post: "3rd Place",
    name: "Chika Pride",
    img: "https://thenassauguardian.com/wp-content/uploads/2020/12/Sports-Chika-Pride.jpg",
    color: "white",
  },
 
];

class Tg extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.addedImg = false;
  }
  render() {
    return (
      
      <div ref={this.containerRef}>
          <h3 className={styles.heading}>WINNERS</h3>
        <div className={styles.container}>
          {team.map(
            (
              {
                post,
                name,
                img,
                github,
                favoriteLang,
                yrsTrappedInVim,
                website,
                color,
                index,
              },
              i
            ) => {
              return (
                
                <div
                  key={i}
                  className={`${styles.itemContainer} ${styles.flipContainer}`}
                >
                  <div className={`${styles.flipper}`}>
                    <div className={styles.front}>
                      <div className={styles.header} style={{ color: color }}>
                        {post}
                      </div>
                      <img
                        className={styles.img}
                        src={img}
                        alt="img"
                        data-frontGridIndex={index}
                      />
                      <div className={styles.name} style={{ color: color }}>
                        {name}
                      </div>
                    </div>
                    <div className={styles.back}>
                      <img
                        className={styles.img}
                        src={img}
                        alt="img"
                        data-backGridIndex={index}
                      />
                      <div className={styles.backStats}>
                        <div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
}

export default Tg;