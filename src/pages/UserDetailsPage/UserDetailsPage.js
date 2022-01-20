import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const UserDetailsPage = () => {
    const {user,setUser} = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(()=>{
        if(state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    },[])

    return (
        <div>
            {
                user && (
                    <div>
                        <div>{user.name} - {user.username}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.website}</div>
                    </div>
                )
            }
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};