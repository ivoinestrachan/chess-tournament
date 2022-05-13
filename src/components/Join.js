import React, {useState, useEffect,useContext} from 'react';
import InformationData from '../apis/InformationData';
import { InformationContext } from '../context/InformationContext';
import styles from "../styles/join.module.css";



const Join = (props) => {
  const {Information, SetInformation}=  useContext(InformationContext);
  useEffect(() => {
     const fetchData = async () => {
       try{
         const response = await InformationData.get("/")
         SetInformation(response.data.data.information);
         }catch (err) {
           console.log(err);
         }
     }
     fetchData();
    
   },[]);

  
  const [user, setUser, data, SetData] = useState({
    username: '',
   email: '',
  });

  
  const [isError, setIsError] = useState(false);

  const [fieldSuccess, setFieldSuccess] = useState({
    username: '',
    email: '',
  });

  const handleOnChange = async(e) => {
    setUser({ ...user, ...data, username: e.target.value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault(); 
    if (user.username || user.email) setIsError(true);
    if (user.email) setFieldSuccess({...fieldSuccess, email: 'You have been added '});
    if (!user.username || !user.email) setIsError(true);
    if (!user.email) setFieldSuccess({...fieldSuccess, email: 'Fill in all fields' });
   /* try{
       const response = await InformationData.post("/", {
          username: user.username,
          email: user.email,
        })
        console.log(response);
    }catch(err) {
      console.log(err);
    }
  */
    try{
      const response = await fetch('https://v1.nocodeapi.com/rexct/google_sheets/yGxWOCdZGFqiWIUH?tabId=Sheet1',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        [user.username, user.email, new Date().toLocaleString()]
      ])
    });
    await response.json();
    SetData({...data, 
      username: user.username,
      email:  user.email,
    });
    }catch (err) {
        console.log(err);
    }
    
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleOnSubmit}>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
      <input 
      type="text" 
      placeholder="Enter your name"
       className={styles.input} 
       value={user.username}
       onChange={handleOnChange}
      autoComplete='off'
      name="user" />
      
      </div>
      <div className={styles.inputWrapper}>
      <input type="email"
       placeholder="Enter your email" 
       className={`${styles.input} ${
        isError && fieldSuccess ? styles.errorfield : ''
      } `} 
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      name="email" 
      />
              <p className={styles.fieldSuccessmsg}>{fieldSuccess.email}</p>
      
          </div>
          <div className={styles.inputWrapper}>
              <button className={styles.button}>Join</button> 
              </div>
          </div>
      </form>
    </div>
  );
}

export default Join;
