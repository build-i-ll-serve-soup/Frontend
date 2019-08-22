import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = props => {

    const [user, setUser] = useState("")

    const changeHandler = event => {
        // console.log(event)
        setUser({...user, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        console.log(event)
        event.preventDefault();
        // const newUser = {
        //     ...user,
        //     id:Date.now()
        // }
        // props.addNewUser(user);
        // console.log(newUser)
    }

    return(
        <div>
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">  User Name </label>
            <input
                type="text"
                name="name"
                placeholder="Type Name Here"
                value={user.name}
                onChange={changeHandler}
                />
                 <label htmlFor = "password">  User Password </label>
                 <input
                type="text"
                name="password"
                placeholder="Type Password Here"
                value={user.name}
                onChange={changeHandler}
                />
             <label htmlFor = "email">  User Email </label>    
                 <input
                type="email"
                name="email"
                placeholder="Type Email Here"
                value={user.email}
                onChange={changeHandler}
                />
             <label htmlFor = "role">  User Role </label>
                 <input
                type="text"
                name="role"
                placeholder="Type Role Here"
                value={user.role}
                onChange={changeHandler}
                />
            <button type="submit">Submit Login</button>
        </form>
        <p>Not a  Member? Sign up   <Link to="/signup">here</Link>.</p>
    </div>
    )
}
export default Login