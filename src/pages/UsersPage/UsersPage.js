import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import {User} from "../../components/User/User";
import './style.css'

const UsersPage = () => {
    const [users,seUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value => seUsers(value))
    },[])

    return (
        <div className={'users'}>
            <div className={'users-left'}>
                {
                users.map(user => <User key={user.id} user={user}/>)
            }
            </div>
            <div className={'users-right'}><Outlet/></div>
        </div>
    );
};

export {UsersPage};