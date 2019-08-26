import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";
const localUrl = "http://localhost:5000";

const Login = props => {
  const [user, setUser] = useState("");
  console.log(props.login);
  const changeHandler = event => {
    // console.log(event)
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  console.log(user);

  const submitForm = event => {
    // console.log(event);
    event.preventDefault();
    axios
      .post(`${deployedUrl}/api/users/login`, user)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("JWT", res.data.token);
      })
      .catch(err => {
        console.log("Error:", err);
      });

    // const newUser = {
    //     ...user,
    //     id:Date.now()
    // }
    // props.addNewUser(user);
    // console.log(newUser)
  };

  //username and password are the only fields required to login

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
