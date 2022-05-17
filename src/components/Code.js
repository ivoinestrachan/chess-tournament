import React,{useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../styles/code.module.css"

const passPhrases = ["5HJO"]
const Code = () => {

  const navigate = useNavigate();
  const location =  useLocation();

  const [phrase, setPhrase] = useState('');
  const [msg, setMsg] = useState('');

  function submit(){
      setMsg("");
      
      if(phrase.length < 4)
          return setMsg("Code must be at least 4 characters long");

      if(!passPhrases.includes(phrase))
          return setMsg("Not a Valid Code");
      

      setPhrase(navigate("/players", {state: {from: location}}));
      // do something when the user's phrase is correct
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault(); 
  }
  return (
    <div>
          <form className={styles.formContainer} onSubmit={handleOnSubmit}>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
          <input 
            type="text" 
            placeholder="Code"
            className={styles.input}
            autoCapitalize="on"
            value={phrase}
            onChange={(e)=>setPhrase(e.target.value)}
          />
          </div>
          <div className={styles.buttWrapper}>
              <button className={styles.button} onClick={submit}>Enter</button> 
              </div>
          </div>
          <div className={styles.msg}>{msg}</div>
      </form>
    </div>
  );
}

export default Code;
