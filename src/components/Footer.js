import React from 'react';
import styles from "../styles/footer.module.css";
import {FaGithub, FaInstagram, FaDiscord, FaGoogle} from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
        
        <footer className={styles.footer}>
      <div className={styles.iconHolder}>
        <a href='https://github.com/sikethedev'>
      <FaGithub className={styles.icon}/>
      </a>
      <a href='https://www.instagram.com/ivoinetech/'>
      <FaInstagram  className={styles.icon}/>
      </a>
      <a href='https://discord.com/users/505373999904194560'>
      <FaDiscord  className={styles.icon}/>
      </a>
      <a href='https://www.google.com/search?q=ivoine+strachan&sxsrf=ALiCzsZl1mrc-Hms2Nr26IwIwi_Lj8rtPA%3A1651532989051&ei=vWRwYuDbAoHEqtsPqtWawAk&oq=ivoine+s&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIGCAAQFhAeOgcIIxCwAxAnOgcIABBHELADOhAILhDHARDRAxDUAhCwAxBDOgQIABAeOgYIABAKEB5KBAhBGABKBAhGGABQqAFYhANghxJoAXABeACAAYIBiAGCApIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz'>
      <FaGoogle  className={styles.icon}/>
      </a>
      </div>
    </footer>
    </div>

  );
}

export default Footer;
