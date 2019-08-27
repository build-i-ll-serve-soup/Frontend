// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";
// const localUrl = "http://localhost:5000";

// const Login = props => {
//   const [user, setUser] = useState("");

//   const changeHandler = event => {
//     // console.log(event)
//     setUser({ ...user, [event.target.name]: event.target.value });
//   };

//   console.log(user);

//   const submitForm = event => {
//     // console.log(event);
//     event.preventDefault();
//     axios
//       .post(`${deployedUrl}/api/users/login`, user)
//       .then(res => {
//         console.log(res.data);
//         localStorage.setItem("JWT", res.data.token);
//       })
//       .catch(err => {
//         console.log("Error:", err);
//       });

//     // const newUser = {
//     //     ...user,
//     //     id:Date.now()
//     // }
//     // props.addNewUser(user);
//     // console.log(newUser)
//   };

//   //username and password are the only fields required to login

//   return (
//     <div className="onboard-form">
//       <h2>Login Form</h2>
//       <form onSubmit={submitForm}>
//         <input
//           type="text"
//           name="email"
//           placeholder="Email"
//           value={user.name}
//           onChange={changeHandler}
//         />
//         <input
//           type="text"
//           name="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={changeHandler}
//         />
       
//         <button type="submit">Submit</button>
//       </form>
//       <p>Not a  Member? Sign up   <Link to="/signup">here</Link>.</p>
//     </div>
//   );
// };
// export default Login;

import React from "react";

const Login = props => {
return(
  <h2> This space is reserved for the Login Page</h2>
)
}

export default Login