import React  from 'react';
import {Form, Field, withFormik} from "formik"
import axios from 'axios';
import * as Yup from "yup";


const AddItemForm = ({errors,touched}) => {

  return (
    <div className="onboard-form">
      <h2>Add Item Form</h2>
      <Form>
          <Field type="text" name="name" placeholder="name"/>
            {touched.name && errors.name &&
            <p className="error">{errors.name}</p>}

          <Field type="text" name="amount" placeholder="amount"/>
            {touched.amount && errors.amount &&
            <p className="error">{errors.amount}</p>}

          <Field type="text" name="unit" placeholder="unit"/>
            {touched.unit && errors.unit &&
            <p className="error">{errors.unit}</p>}

            
          <Field component = "select" className = "category-select" name="category">
             <option >Select Item Category</option>
             <option value="chicken">Chicken</option>
             <option value="fruits">Fruits</option>
             <option value="herbal">Herbal</option>
             <option value="proteins">Proteins</option>
             <option value="cream">Cream</option>
             <option value="instant">Instant</option>
             <option value="noodle">Noodle</option>
             <option value="fish">Fish</option>
             <option value="bread">Bread</option>
             <option value="Bisque">Bisque</option>
          </Field>


        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikItemForm = withFormik({
  mapPropsToValues({name, amount, unit}) {
    return {
        name:name || "",
        amount:amount || "",
        unit:unit || "",
    } 
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    amount: Yup.string().required(),
    unit: Yup.string().required(),
  
  }),

  handleSubmit(values){
    console.log("form submit:", values);
    axios.post("https://bw-ill-serve-soup.herokuapp.com/api/items",values)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error.response));


  }
})(AddItemForm)

export default FormikItemForm;
