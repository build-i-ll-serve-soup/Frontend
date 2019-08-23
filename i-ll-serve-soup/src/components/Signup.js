// import React, {useState} from "react";
// import { Link } from "react-router-dom";

// const Signup = props => {

//     const [newUser, setNewUser] = useState("")

//     const changeHandler = event => {
//         // console.log(event)
//         setNewUser({...newUser, [event.target.name]: event.target.value})

//     }

//     const submitForm = event => {
//         console.log(event)
//         event.preventDefault();
//         // const newUser = {
//         //     ...user,
//         //     id:Date.now()
//         // }
//         props.addNewUser(newUser);
//         console.log(newUser)
//     }

//     return(
//         <div>
//         <form onSubmit = {submitForm}>
//             <label htmlFor = "name">  New User Name </label>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Type Name Here"
//                 value={newUser.name}
//                 onChange={changeHandler}
//                 />
//                  <label htmlFor = "password">  New User Password </label>
//                  <input
//                 type="text"
//                 name="password"
//                 placeholder="Type Password Here"
//                 value={newUser.name}
//                 onChange={changeHandler}
//                 />
//              <label htmlFor = "email">  New User Email </label>    
//                  <input
//                 type="email"
//                 name="email"
//                 placeholder="Type Email Here"
//                 value={newUser.email}
//                 onChange={changeHandler}
//                 />
//              <label htmlFor = "role">  New User Role </label>
//                  <input
//                 type="text"
//                 name="role"
//                 placeholder="Type Role Here"
//                 value={newUser.role}
//                 onChange={changeHandler}
//                 />
//             <button type="submit">Submit Signup</button>
//         </form>
//         <p>Already a Member? LogIn <Link to="/login">here</Link>.</p>
//         </div>
//     )
// }
// export default Signup

import React, { useState } from "react"; // Import useEffect
import { Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";
const localUrl = "http://localhost:5000";

const Signup = ({ values, status }) => {
  //
  // Example of handling state change using response
  //
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   if (status) {
  //     setUsers(users => [...users, status]);
  //     console.log(users);
  //   }
  // }, [status]);

  const changeHandler = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  console.log(user);

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post(`${localUrl}/api/users/register`, user)
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="onboard-form">
       
      <Form className="form" onSubmit={submitHandler}>
      <label htmlFor="name"> New User Email </label>
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
        />
         <label htmlFor="password"> New User Password </label>
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />
         <label htmlFor = "email">  New User Email </label>  
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
         <label htmlFor = "role">  New User Role </label>
        <Field
          component="input"
          type="text"
          name="role"
          placeholder="Role"
          onChange={changeHandler}
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </Form>
      <p>Already a Member? LogIn <Link to="/login">here</Link>.</p>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, password, email, role }) {
    return {
      name: name,
      password: password,
      email: email,
      role: role
    };
  },
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values);
    resetForm();

    //
    // Example of using formm data in axios request...
    //
    // handleSubmit(values, { setStatus, resetForm }) {
    //     axios
    //       .post("https://reqres.in/api/users", values)
    //       .then(response => {
    //         // console.log(response)
    //         setStatus(response.data);
    //         resetForm();
    //       })
    //       .catch(error => {
    //         console.log("Submission error...", error);
    //       });
    //   }
  }
});

export default formikHOC(Signup);
