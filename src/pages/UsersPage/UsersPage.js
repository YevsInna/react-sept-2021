import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import store from "../../store/store.config";
import {getAllUsers} from "../../store";

const UsersPage = () => {

    const {users} = useSelector(store => store['usersReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    return (
        <div>
            {
                users.map(user =>
                    <div key={user.id}>
                        <h2>{user.id}. Name - {user.name}</h2>
                        <h3>Username - {user.username}</h3>
                    </div>)
            }
        </div>
    );
};

export {UsersPage};