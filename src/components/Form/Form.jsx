import { useState } from "react";
import validation from "./validation";
import styles from './Form.module.css'

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.value]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (<div> 
  <h1><img src="http://vignette4.wikia.nocookie.net/rickandmorty/images/c/c8/Rick_and_Morty_logo.png/revision/latest?cb=20160907114210" alt="logo" className={styles.img}/></h1>
  <h1><img src="https://68.media.tumblr.com/871682ca7c79a1c01ff0e438359584e5/tumblr_olf6jjToqx1w3z1eko2_r1_500.png" alt="jim"/></h1>
  <h1><img src="http://orig13.deviantart.net/3812/f/2015/336/e/7/rick_and_morty_vector_by_clam5hell-d9ireod.png" alt="rick" className={styles.rick}/></h1>


      <form onSubmit={handleSubmit} className={styles.form}>
        {/* <label htmlFor="username"  className={styles.labels}>User</label> */}
        <input
          name="username"
          type="text"
          onChange={handleInputChange}
          value={userData.username}
          className={styles.input}
          placeholder="user"
        />
        {errors.username && <p>{errors.username}</p>}
        <br></br>
        {/* <label htmlFor="password" className={styles.labels}>Password</label> */}
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={userData.password}
          className={styles.input}
          placeholder='password'
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit" className={styles.botoncito}>Login</button>
      </form>

      </div>
  );
};

export default Form;