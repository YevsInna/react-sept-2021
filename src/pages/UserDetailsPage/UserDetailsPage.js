import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import './style.css'
import {UserPostsPage} from "../UserPostsPage/UserPostsPage";


const UserDetailsPage = () => {
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    }, [id])

    return (
        <div className={'user-details'}>
            <div>
                {
                    user && (
                        <div>
                            <h3>{user.name} - "{user.username}"</h3>
                            <p><span>Email:</span> {user.email}</p>
                            <p><span>Phone:</span> {user.phone}</p>
                            <p><span>Website:</span> {user.website}</p>
                            <p><span>Address:</span> {user.address.street} street, {user.address.city} city</p>
                            <p><span>Company:</span> {user.company.name}</p>
                        </div>
                    )
                }
            </div>
            <Link to={'posts'}>
                <button>User posts</button>
            </Link>

            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};