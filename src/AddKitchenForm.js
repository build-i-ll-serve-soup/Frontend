import React  from 'react';
import {Form, Field, withFormik} from "formik"
// import axios from 'axios';

const AddKitchenForm = (props) => {

  return (
    <div className="kitchen-form">
      <h2>Add Kitchen Form</h2>
      <Form>
          <Field type="text" name="name" placeholder="name"/>
          <Field type="text" name="location" placeholder="location"/>
          <Field type="text" name="mission" placeholder="mission"/>
          <Field type="text" name="average_visitors" placeholder="average_visitors" />
          <Field type="text" name="website" placeholder= "website"/>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikKitchenForm = withFormik({
  mapPropsToValues({name, location, mission, average_visitors, website}) {
    return {
        name:name || "",
        location:location || "",
        mission:mission || "",
        average_visitors:average_visitors || "",
        website:website || ""
    }
  },

  handleSubmit(values){
    console.log("form submit:", values)

  }
})(AddKitchenForm)

export default FormikKitchenForm;
