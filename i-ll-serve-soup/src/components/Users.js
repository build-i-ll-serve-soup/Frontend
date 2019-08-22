import React from "react";
import axios from "./axios";


const Users = props => {
    return(
        <div>
            {props.usersList.map(user => {
                return (
                    <div className="user" key = {user.id}>
                        <p>{user.name}</p>
                        <p>{users.password}</p>
                        <p>{user.email}</p>
                        <p>{user.role}</p>
                    </div>
                )
            })}

        </div>
    )
}
export default Users;