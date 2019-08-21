import React, {useState} from "react";


const Signup = props => {

    const [newUser, setNewUser] = useState("")

    const changeHandler = event => {
        // console.log(event)
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        console.log(event)
        event.preventDefault();
        // const newUser = {
        //     ...user,
        //     id:Date.now()
        // }
        props.addNewUser(newUser);
        // console.log(newUser)
    }

    return(
        <div>
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">  New User Name </label>
            <input
                type="text"
                name="name"
                placeholder="Type Name Here"
                value={newUser.name}
                onChange={changeHandler}
                />
                 <label htmlFor = "password">  New User Password </label>
                 <input
                type="text"
                name="password"
                placeholder="Type Password Here"
                value={newUser.name}
                onChange={changeHandler}
                />
             <label htmlFor = "email">  New User Email </label>    
                 <input
                type="email"
                name="email"
                placeholder="Type Email Here"
                value={newUser.email}
                onChange={changeHandler}
                />
             <label htmlFor = "role">  New User Role </label>
                 <input
                type="text"
                name="role"
                placeholder="Type Role Here"
                value={newUser.role}
                onChange={changeHandler}
                />
            <button type="submit">Submit</button>
        </form>
        <p>Already a Member? Login here</p>
        <button>Login</button>
        </div>
    )
}
export default Signup