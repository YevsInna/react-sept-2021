import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import {userService} from "../../services/user.service";
import {User} from "../../components/User/User";

const UsersPage = () => {
    const [users,seUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => seUsers(value))
    },[])

    return (
        <div>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
            <Outlet/>
        </div>
    );
};

export {UsersPage};