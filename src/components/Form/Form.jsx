import { useState } from "react";
import validation from "./validation";

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

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User</label>
        <input
          name="username"
          type="text"
          onChange={handleInputChange}
          value={userData.username}
        />
        {errors.username && <p>{errors.username}</p>}
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={userData.password}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button type="submit">Login</button>
      </form>
  );
};

export default Form;