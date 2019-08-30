import React, {useState} from "react";
import {Form, Field} from "formik";


const AddItemForm = props => {

    const [item, setItem] = useState("");
  
     
    const changeHandler = event => {
         setItem({...item, [event.target.name]: event.target.value});
     };

const submitForm = event => {
  // console.log(event)
    event.preventDefault(); 
    props.addNewItem(item);
}
    return (
        <div className="onboard-form">
            
        <Form className="form" onSubmit={submitForm}> 
        <h2>Add Item Form</h2>  
       
        <input className="formSection"
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={item.itemName}
          onChange={changeHandler}
        />
       <input className="formSection"
          type="text"
          name="stock"
          placeholder="Amount in Stock"
          value={item.stock}
          onChange={changeHandler}
        />
        {/* <input className="formSection"
          type="text"
          name="category"
          placeholder="Item Category"
          value={item.category}
          onChange={changeHandler}
        /> */}
        <select value={changeHandler}>
        <option value="all">Select Item Category</option>
        <option value="produce">Produce</option>
        <option value="dry-goods">Dry Goods</option>
        <option value="canned-goods">Canned Goods</option>
        <option value="spices/herbs">Spices and Herbs</option>
        <option value="dairy">Dairy</option>
        <option value="other">Other</option>
        </select>
        <button type="submit" className="form-button">Add Item</button>
      </Form>
      </div>  
    )
  };
  
export default AddItemForm