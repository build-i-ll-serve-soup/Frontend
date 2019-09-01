import React  from 'react';
import {Form, Field, withFormik} from "formik"
import axios from 'axios';
import * as Yup from "yup";
import KitchenList from "./components/Content/KitchenList"

const AddKitchenForm = ({errors,touched}) => {

  return (
    <div className="onboard-form">
      <h2>Participating Kitchens</h2>
      <KitchenList />
      <h2>Add Kitchen Form</h2>
      <Form>
          <Field type="text" name="name" placeholder="name"/>
            {touched.name && errors.name &&
            <p className="error">{errors.name}</p>}

           <Field type="text" name="location" placeholder=""/>
            {touched.location && errors.location &&
            <p className="error">{errors.location}</p>}
        
          <Field component="textarea" type="text" name="mission" placeholder="mission"/>
            {touched.mission && errors.mission &&
            <p className="error">{errors.mission}</p>}

          <Field type="text" name="average_visitors" placeholder="average_visitors" />
            {touched.average_visitors && errors.average_visitors &&
            <p className="error">{errors.average_visitors}</p>}

          <Field type="text" name="website" placeholder= "website"/>
            {touched.website && errors.website &&
            <p className="error">{errors.website}</p>}

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

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    mission: Yup.string().required(),
    average_visitors: Yup.string().required(),
    website: Yup.string().email().required()
  }),

  handleSubmit(values){
    console.log("form submit:", values);
    axios.post("https://bw-ill-serve-soup.herokuapp.com/api/kitchens",values)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error.response));


  }
})(AddKitchenForm)

export default FormikKitchenForm;
