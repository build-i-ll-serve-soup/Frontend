import React, {useState} from "react";
import {Form} from "formik";

const AddKitchenForm = props => {
    
    const [kitchen, setKitchen] = useState("");

    const kitchenHandler = event => {
      setKitchen({...kitchen, [event.target.name]: event.target.value});
    }

    const submitKitchen = event => {
        event.preventDefault()
        props.addNewKitchen(kitchen)
    }

    return (
        <div className="onboard-form">

            <Form className="form" onSubmit={submitKitchen}>
              <h2>Add Kitchen Form</h2>

              <input className="formSection" 
                type="text"
                name="name"
                placeholder="Name of Kitchen"
                value={kitchen.name}
                onChange={kitchenHandler}
                />
              <input className="formSection" 
                type="text"
                name="location"
                placeholder="Address"
                value={kitchen.location}
                onChange={kitchenHandler}
                />
              <input className="formSection" 
                type="text"
                name="mission"
                placeholder="Mission Statement"
                value={kitchen.mission}
                onChange={kitchenHandler}
                />
              <input className="formSection" 
                type="text"
                name="visitors"
                placeholder="Average # of Visitors"
                value={kitchen.average_visitors}
                onChange={kitchenHandler}
                />
              <input className="formSection" 
                type="email"
                name="website"
                placeholder="Email"
                value={kitchen.website}
                onChange={kitchenHandler}
                />
                <button type="submit" className="form-button">Submit</button>
            </Form>
        </div>
    )
};

export default AddKitchenForm