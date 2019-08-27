import React, { useState } from "react"; // Import useEffect
import { Form, Field, withFormik } from "formik";
import '../../App.css';
import axios from "axios";

const deployedUrl = "https://bw-ill-serve-soup.herokuapp.com";
const localUrl = "http://localhost:5000";

const Signup = ({ values, status }) => {
  const [user, setUser] = useState({});

  return (
    <div className="onboard-form">
      <div className="form-header">
        <h1>Join</h1>
      </div>

      <Form className="form">
        <Field
          required
          component="input"
          type="text"
          name="name"
          placeholder="Name"
        />
        <Field
          required
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Field
          required
          component="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Field
          required
          component="input"
          type="text"
          name="role"
          placeholder="Role"
        />
        <button className="form-button" type="submit">
          Submit
        </button>
      </Form>
      <div className="form-footer">
        <p>By creating an account, you agree to our <span style={{color: '#8db864'}}>terms of service</span> and <span style={{color: '#8db864'}}>privacy policy</span></p>
      </div>
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
    resetForm();

    axios
      .post(`${deployedUrl}/api/users/register`, values)
      .then(res => {
        console.log(res.status);
      })
      .catch(err => {
        console.log(err);
      });
  }
});

export default formikHOC(Signup);
