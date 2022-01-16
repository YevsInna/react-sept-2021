import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";

const Users = ({getUser}) => {                              //3.відловили гетюзер, передали Юзеру стр.15, далі в Ю.джс
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} getUser={getUser}/>)
            }
        </div>
    );
};

export default Users;