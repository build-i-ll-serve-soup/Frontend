import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import axios from "axios";

const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";

const Login = props => {
  const [user, setUser] = useState("");

  const changeHandler = event => {
    // console.log(event)
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    // console.log(event);
    event.preventDefault();
    axios
      .post(`${deployedUrl}/api/users/login`, user)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("JWT", res.data.token);
        props.setLoggedin(true);
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="onboard-form">
      <div className="form-header">
        <h1>Sign In</h1>
      </div>
      <form className="form" onSubmit={submitForm}>
        <input
          required
          type="text"
          name="email"
          placeholder="email"
          value={user.name}
          onChange={changeHandler}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={changeHandler}
        />

        <button className="form-button" type="submit">Submit</button>
      </form>
      <div className="form-footer">
        <p>Not a Member? Sign up <Link to='/signup' style={{color: '#7cb342', fontWeight: 'bold'}}>here</Link></p>
      </div>
    </div>
  );
};
export default Login;
