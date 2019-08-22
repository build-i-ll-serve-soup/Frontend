import React, { useState } from "react"; // Import useEffect
import { Form, Field, withFormik } from "formik";
import '../App.css';
// Import Axios
const Signup = ({values, status}) => {
    //
    // Example of handling state change using response
    //
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   if (status) {
    //     setUsers(users => [...users, status]);
    //     console.log(users);
    //   }
    // }, [status]);

  return (
    <div className="onboard-form">
      <Form className="form">
            <Field component="input" type="text" name="name" placeholder="Name" / >
            <Field component="input" type="password" name="password" placeholder="Password" / >
            <Field component="input" type="email" name="email" placeholder="Email" / >
            <Field component="input" type="text" name="role" placeholder="Role" / >
            <button className="form-button" type="submit">Submit</button>
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
    mapPropsToValues({ name, password, email, role }){
        return {
            name: name,
            password: password,
            email: email,
            role: role
        }
    },
    handleSubmit(values, { setStatus, resetForm }){
        
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
})

export default formikHOC(Signup);
