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
      <h2>Signup Form</h2>
      <Form className="form" onSubmit={submitHandler}>
        <Field
          component="input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeHandler}
        />
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
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