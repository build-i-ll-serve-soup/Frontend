// import React, {useState} from "react";
// import {Form} from "formik";


// const AddItemForm = props => {

//     const [item, setItem] = useState("");
  
     
//     const changeHandler = event => {
//          setItem({...item, [event.target.name]: event.target.value});
//      }

// const submitForm = event => {
//   // console.log(event)
//     event.preventDefault(); 
//     props.addNewItem(item);
// }
//     return (
//         <div className="onboard-form">
            
//         <Form className="form" onSubmit={submitForm}> 
//         <h2>Add Item Form</h2>  
       
//         <input className="formSection"
//           type="text"
//           name="itemName"
//           placeholder="Item Name"
//           value={item.itemName}
//           onChange={changeHandler}
//         />
//        <input className="formSection"
//           type="text"
//           name="stock"
//           placeholder="Amount in Stock"
//           value={item.stock}
//           onChange={changeHandler}
//         />
//         {/* <input className="formSection"
//           type="text"
//           name="category"
//           placeholder="Item Category"
//           value={item.category}
//           onChange={changeHandler}
//         /> */}
//         <select value={changeHandler}>
//         <option value="all">Select Item Category</option>
//         <option value="produce">Produce</option>
//         <option value="dry-goods">Dry Goods</option>
//         <option value="canned-goods">Canned Goods</option>
//         <option value="spices/herbs">Spices and Herbs</option>
//         <option value="dairy">Dairy</option>
//         <option value="other">Other</option>
//         </select>
//         <button type="submit" className="form-button">Add Item</button>
//       </Form>
//       </div>  
//     )
//   };
  
// export default AddItemForm

import React, { useState } from 'react';
// import axios from 'axios';

const AddItemForm = ({ errors, touched, values }) => {
  const [items, setItems] = useState({id:"", name:"", amount:"", unit:"",price:"", supplier_name:"",
      supplier_contact:"", image:"", categoryID:"" });

  const kitchenHandler = event => {
    setItems({ ...items, [event.target.name]: event.target.value });
  };

  const submitItem = event => {
    event.preventDefault();
    console.log(items.name);
  };

  return (
    <div className="items-form">
      <form onSubmit={event => submitItem(event)}>
        <label>
         ID:
          <input
            type="text"
            name="id"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Unit:
          <input
            type="text"
            name="unit"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Supplier Name
          <input
            type="text"
            name="supplier_name"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Supplier Contact
          <input
            type="text"
            name="supplier_contact"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <label>
          Image:
          <input
            type="img"
            name="image"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        {/* <label>
          Category ID:
          <input
            type="text"
            name="categoryID"
            onChange={event => kitchenHandler(event)}
          />
        </label> */}
        <select value={kitchenHandler}>
            <option value="all">Select Item Category</option>
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
         </select>

        <label>
          Website:
          <input
            type="text"
            name="website"
            onChange={event => kitchenHandler(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default AddItemForm;