import React, {useState} from "react";

const AddItemForm = props => {

    const [item, setItem] = useState("");
     
    const changeHandler = event => {
         setItem({...item, [event.target.name]: event.target.value});
     };
const submitForm = event => {
    event.preventDefault();
   
props.addNewItem(item);
}
    return (
        <div className="onboard-form">
            <h2>Add Item Form</h2>
         <form onSubmit={submitForm}>
        
        <input
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={item.itemName}
          onChange={changeHandler}
        />
       <input
          type="text"
          name="stock"
          placeholder="Amount in Stock"
          value={item.stock}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="category"
          placeholder="Item Category"
          value={item.category}
          onChange={changeHandler}
        />
        <button type="submit">Add Item</button>
      </form>
      </div>  
    )
  };
  
export default AddItemForm