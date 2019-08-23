import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";
const localUrl = "http://localhost:5000";

const Login = props => {
  const [user, setUser] = useState("");

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
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name"> User Email </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={user.name}
          onChange={changeHandler}
        />
        <label htmlFor="password"> User Password </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={changeHandler}
        />
        {/* <label htmlFor = "email">  User Email </label>    
                 <input
                type="email"
                name="email"
                placeholder="Type Email Here"
                value={user.email}
                onChange={changeHandler}
                />
             <label htmlFor = "role">  User Role </label>
                 <input
                type="text"
                name="role"
                placeholder="Type Role Here"
                value={user.role}
                onChange={changeHandler}
                /> */}
        <button type="submit">Submit</button>
      </form>
      <p>Not a  Member? Sign up   <Link to="/signup">here</Link>.</p>
    </div>
  );
};
export default Login;